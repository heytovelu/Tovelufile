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

  const apiKey = process.env.DODO_PAYMENTS_API_KEY || 'on4-roYByC5v9Pu4.vfKAYJgsr9u2srk6uXpgzL0q8TxAZRsNT5Rvw-qYWl8o5Rr5';
  const baseUrl = 'https://live.dodopayments.com';

  // Map tier to Product ID created in Ajay's live account
  let productId = '';
  if (tierId === '30_day_reset' || tierId === 'starter_30') {
    productId = process.env.DODO_PRODUCT_30_DAYS || 'pdt_0NmWMkTJggMZTgXcQJT7e';
  } else if (tierId === '90_day_mastery' || tierId === 'master_90') {
    productId = process.env.DODO_PRODUCT_90_DAYS || 'pdt_0NmWMlvqqjSnEM3tFlGex';
  } else if (tierId === 'annual_365') {
    productId = process.env.DODO_PRODUCT_365_DAYS || 'pdt_0NmWMn5VlVPr7KZl20bCb';
  } else if (tierId === 'lifetime_vip') {
    productId = process.env.DODO_PRODUCT_LIFETIME || 'pdt_0NmWL3eM2SZ1zmiyrWCTT';
  } else {
    // Default to flagship quarterly protocol
    productId = process.env.DODO_PRODUCT_90_DAYS || 'pdt_0NmWMlvqqjSnEM3tFlGex';
  }

  try {
    const returnUrl = `https://app.tovelu.store/?payment=success&tier=${encodeURIComponent(tierId || '90_day_mastery')}`;
    const dodoRes = await fetch(`${baseUrl}/checkouts`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        product_cart: [
          {
            product_id: productId,
            quantity: 1,
          },
        ],
        customer: {
          email: email || 'customer@tovelu.store',
          name: name || 'Sovereign Member',
        },
        return_url: returnUrl,
        metadata: {
          affiliate_id: affiliateId || 'direct',
          tier_id: tierId || '90_day_mastery',
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
      sessionId: data.session_id || data.id,
    });
  } catch (err: any) {
    console.error('Dodo Checkout Exception:', err);
    return res.status(500).json({
      error: 'Internal server error while connecting to Dodo Payments',
      message: err.message,
    });
  }
}
