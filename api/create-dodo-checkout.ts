export default async function handler(req: any, res: any) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { tierId, email, name, affiliateId } = req.body || {};

  const apiKey = process.env.DODO_PAYMENTS_API_KEY;
  const isTest = process.env.DODO_PAYMENTS_MODE === 'test' || (apiKey && apiKey.startsWith('test_'));
  const baseUrl = isTest ? 'https://test.dodopayments.com' : 'https://live.dodopayments.com';

  // Map tier to Product ID from environment variables
  let productId = '';
  if (tierId === '30_day_reset') {
    productId = process.env.DODO_PRODUCT_30_DAYS || '';
  } else if (tierId === '90_day_mastery') {
    productId = process.env.DODO_PRODUCT_90_DAYS || '';
  } else if (tierId === 'annual_365') {
    productId = process.env.DODO_PRODUCT_365_DAYS || '';
  } else if (tierId === 'lifetime_vip') {
    productId = process.env.DODO_PRODUCT_LIFETIME || '';
  }

  // If specific payment link exists in env, return that directly
  const customPaymentLink = process.env[`DODO_LINK_${tierId.toUpperCase()}`];
  if (customPaymentLink) {
    const separator = customPaymentLink.includes('?') ? '&' : '?';
    const redirectUrl = `${customPaymentLink}${separator}email=${encodeURIComponent(email || '')}&aff=${encodeURIComponent(affiliateId || '')}`;
    return res.status(200).json({ checkoutUrl: redirectUrl });
  }

  // If API Key is missing and no static product links exist:
  if (!apiKey || !productId) {
    return res.status(500).json({
      error: 'Dodo Payments products or API key not yet configured in environment variables.',
      configured: false,
      tierId,
    });
  }

  try {
    const returnUrl = `https://app.tovelu.store/?payment=success&tier=${encodeURIComponent(tierId)}`;
    const dodoRes = await fetch(`${baseUrl}/checkouts`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        product_id: productId,
        billing: {
          email: email || 'customer@tovelu.store',
          name: name || 'Sovereign Member',
        },
        return_url: returnUrl,
        metadata: {
          affiliate_id: affiliateId || 'direct',
          tier_id: tierId,
        },
      }),
    });

    const data = await dodoRes.json();

    if (!dodoRes.ok) {
      console.error('Dodo API Error:', data);
      return res.status(dodoRes.status).json({
        error: data.message || 'Failed to create Dodo checkout session',
        details: data,
      });
    }

    return res.status(200).json({
      checkoutUrl: data.checkout_url || data.url,
      checkoutId: data.checkout_id || data.id,
    });
  } catch (err: any) {
    console.error('Dodo Checkout Exception:', err);
    return res.status(500).json({
      error: 'Internal server error while connecting to Dodo Payments',
      message: err.message,
    });
  }
}
