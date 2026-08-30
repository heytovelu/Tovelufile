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

  const { email, firstName, lastName, country } = req.body || {};

  if (!email) {
    return res.status(400).json({ error: 'Email address is required' });
  }

  const brevoApiKey = process.env.BREVO_API_KEY;
  const senderEmail = process.env.BREVO_SENDER_EMAIL || 'hello@tovelu.store';
  const senderName = process.env.BREVO_SENDER_NAME || 'Tovelu Sovereign Health';

  if (!brevoApiKey) {
    return res.status(500).json({
      error: 'BREVO_API_KEY is not set on Vercel environment variables. Please provide your Brevo API key.',
      configured: false
    });
  }

  // Generate 6-digit verification code
  const confirmationCode = Math.floor(100000 + Math.random() * 900000).toString();
  const userName = `${firstName || ''} ${lastName || ''}`.trim() || 'Sovereign Member';
  const confirmationLink = `https://app.tovelu.store/?email=${encodeURIComponent(email)}&name=${encodeURIComponent(userName)}&verified=true&country=${encodeURIComponent(country || 'US')}`;

  const emailHtml = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #050709; color: #F1F5F9; margin: 0; padding: 40px 20px; }
          .card { max-width: 520px; margin: 0 auto; background-color: #0E1318; border: 1px solid #1E293B; border-radius: 24px; padding: 40px 32px; text-align: center; }
          .logo { font-size: 24px; font-weight: 900; letter-spacing: 0.2em; color: #00FF9D; margin-bottom: 24px; }
          h1 { font-size: 22px; font-weight: 800; margin: 0 0 12px 0; color: #FFFFFF; }
          p { font-size: 14px; line-height: 1.6; color: #94A3B8; margin: 0 0 24px 0; }
          .btn { display: inline-block; background-color: #00FF9D; color: #050709; font-size: 14px; font-weight: 900; text-decoration: none; padding: 14px 32px; border-radius: 14px; text-transform: uppercase; letter-spacing: 0.05em; margin: 12px 0 24px 0; }
          .code-box { background-color: #050709; border: 1px solid #334155; border-radius: 16px; padding: 16px; margin: 20px 0; font-size: 28px; font-family: monospace; font-weight: 900; letter-spacing: 0.25em; color: #00FF9D; }
          .footer { font-size: 11px; color: #64748B; margin-top: 32px; border-top: 1px solid #1E293B; padding-top: 20px; }
        </style>
      </head>
      <body>
        <div class="card">
          <div class="logo">TOVELU</div>
          <h1>Confirm Your Email Address</h1>
          <p>Hello ${userName}, welcome to Tovelu. Click the button below to verify your account and start your 52-Question Clinical Dopamine Survey on app.tovelu.store:</p>
          <a href="${confirmationLink}" class="btn">Confirm Email & Start Survey →</a>
          <p style="font-size: 12px; margin-bottom: 8px;">Or use this 6-digit confirmation code:</p>
          <div class="code-box">${confirmationCode}</div>
          <div class="footer">
            © ${new Date().getFullYear()} Tovelu Sovereign Health OS • Cellular Homeostasis & Metabolic Longevity
          </div>
        </div>
      </body>
    </html>
  `;

  try {
    const brevoResponse = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'api-key': brevoApiKey,
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        sender: {
          name: senderName,
          email: senderEmail,
        },
        to: [
          {
            email: email,
            name: userName,
          },
        ],
        subject: 'Confirm Your Tovelu Account',
        htmlContent: emailHtml,
      }),
    });

    const data = await brevoResponse.json();

    if (!brevoResponse.ok) {
      console.error('Brevo API Error:', data);
      return res.status(brevoResponse.status).json({
        error: data.message || 'Failed to dispatch email via Brevo',
        details: data,
      });
    }

    return res.status(200).json({
      success: true,
      messageId: data.messageId,
      code: confirmationCode,
    });
  } catch (err: any) {
    console.error('Brevo Dispatch Exception:', err);
    return res.status(500).json({
      error: 'Internal server error while connecting to Brevo API',
      message: err.message,
    });
  }
}
