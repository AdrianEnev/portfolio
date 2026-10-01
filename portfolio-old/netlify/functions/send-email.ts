import nodemailer from 'nodemailer';

// Netlify function handler
export const handler = async (event: any) => {
  const allowedOrigin = process.env.APP_BASE_URL || '*';

  const corsHeaders = {
    'Access-Control-Allow-Origin': allowedOrigin,
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
  };

  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers: corsHeaders, body: '' };
  }

  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, headers: corsHeaders, body: JSON.stringify({ error: 'Method Not Allowed' }) };
  }

  try {
    if (!event.body) {
      return { statusCode: 400, headers: corsHeaders, body: JSON.stringify({ error: 'Empty body' }) };
    }

    const data = JSON.parse(event.body);
    const { name, company, email, message, website } = data || {};

    // Honeypot (bots fill this hidden field)
    if (typeof website === 'string' && website.trim().length > 0) {
      return { statusCode: 200, headers: corsHeaders, body: JSON.stringify({ ok: true }) };
    }

    // Basic validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!name || !email || !message) {
      return { statusCode: 400, headers: corsHeaders, body: JSON.stringify({ error: 'Missing required fields' }) };
    }
    if (!emailRegex.test(email)) {
      return { statusCode: 400, headers: corsHeaders, body: JSON.stringify({ error: 'Invalid email' }) };
    }

    // SMTP transport using SES
    const transporter = nodemailer.createTransport({
      host: process.env.SES_SMTP_HOST,
      port: Number(process.env.SES_SMTP_PORT || 587),
      secure: false, // STARTTLS on 587
      auth: {
        user: process.env.SES_SMTP_USER,
        pass: process.env.SES_SMTP_PASS,
      },
    });

    const fromEmail = process.env.EMAIL_FROM;
    const fromName = process.env.EMAIL_FROM_NAME || 'Contact Form';
    const toEmail = process.env.EMAIL_TO;

    if (!fromEmail || !toEmail) {
      return { statusCode: 500, headers: corsHeaders, body: JSON.stringify({ error: 'Email routing not configured' }) };
    }

    const subject = `New contact form submission from ${name}${company ? ' @ ' + company : ''}`;

    const textBody = `You have a new contact form submission:\n\n` +
      `Name: ${name}\n` +
      (company ? `Company: ${company}\n` : '') +
      `Email: ${email}\n` +
      `\nMessage:\n${message}\n`;

    const htmlBody = `
      <div style="font-family: system-ui, -apple-system, Segoe UI, Roboto, sans-serif; line-height: 1.6;">
        <h2>New contact form submission</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        ${company ? `<p><strong>Company:</strong> ${escapeHtml(company)}</p>` : ''}
        <p><strong>Email:</strong> <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></p>
        <hr/>
        <p><strong>Message:</strong></p>
        <pre style="white-space: pre-wrap; font-family: inherit;">${escapeHtml(message)}</pre>
      </div>
    `;

    const info = await transporter.sendMail({
      from: `${fromName} <${fromEmail}>`,
      to: toEmail,
      subject,
      text: textBody,
      html: htmlBody,
      replyTo: email, // lets you reply directly to the sender
    });

    return {
      statusCode: 200,
      headers: corsHeaders,
      body: JSON.stringify({ ok: true, id: info.messageId }),
    };
  } catch (err: any) {
    console.error('send-email error', err);
    return { statusCode: 500, headers: { 'Content-Type': 'application/json', ...corsHeaders }, body: JSON.stringify({ error: 'Internal Server Error' }) };
  }
};

function escapeHtml(str: string) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
