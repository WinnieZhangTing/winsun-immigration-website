import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

const OWNER_EMAIL = 'winnie@winsunimmigration.ca';
const OWNER_FROM_EMAIL = 'WINSUN Immigration <onboarding@resend.dev>';
const CLIENT_FROM_EMAIL = 'Winnie Zhang <winnie@winsunimmigration.ca>';

export async function POST(request: Request) {
  try {
    const { name, email, phone, service, message } = await request.json();

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 }
      );
    }

    // ── 1. Notify Winnie with full inquiry details ──────────────────────────
    const ownerEmailResult = await resend.emails.send({
      from: OWNER_FROM_EMAIL,
      to: OWNER_EMAIL,
      replyTo: email,
      subject: `New Inquiry from ${name} — WINSUN Website`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;color:#1a1a2e;">
          <div style="background:#0F2A4A;padding:24px 32px;border-radius:8px 8px 0 0;">
            <h1 style="color:#C9A96E;font-size:22px;margin:0;letter-spacing:2px;">WINSUN</h1>
            <p style="color:rgba(255,255,255,0.6);font-size:12px;margin:4px 0 0;">New Website Inquiry 新网站咨询</p>
          </div>
          <div style="background:#f8fafc;padding:32px;border:1px solid #e2e8f0;border-top:none;border-radius:0 0 8px 8px;">
            <table style="width:100%;border-collapse:collapse;">
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #e2e8f0;color:#6b7280;font-size:13px;width:140px;">Name 姓名</td>
                <td style="padding:10px 0;border-bottom:1px solid #e2e8f0;color:#0F2A4A;font-weight:600;">${name}</td>
              </tr>
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #e2e8f0;color:#6b7280;font-size:13px;">Email 邮箱</td>
                <td style="padding:10px 0;border-bottom:1px solid #e2e8f0;color:#0F2A4A;"><a href="mailto:${email}" style="color:#C9A96E;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #e2e8f0;color:#6b7280;font-size:13px;">Phone 电话</td>
                <td style="padding:10px 0;border-bottom:1px solid #e2e8f0;color:#0F2A4A;">${phone || '—'}</td>
              </tr>
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #e2e8f0;color:#6b7280;font-size:13px;">Service 服务</td>
                <td style="padding:10px 0;border-bottom:1px solid #e2e8f0;color:#0F2A4A;">${service || '—'}</td>
              </tr>
              <tr>
                <td style="padding:16px 0 6px;color:#6b7280;font-size:13px;vertical-align:top;">Message 留言</td>
                <td style="padding:16px 0 6px;color:#0F2A4A;line-height:1.6;">${message.replace(/\n/g, '<br/>')}</td>
              </tr>
            </table>
            <div style="margin-top:24px;padding:16px;background:#fff;border:1px solid #e2e8f0;border-radius:6px;text-align:center;">
              <a href="mailto:${email}?subject=Re: Your WINSUN Immigration Inquiry" style="display:inline-block;padding:12px 28px;background:#C9A96E;color:#0F2A4A;font-weight:700;font-size:14px;text-decoration:none;border-radius:4px;">
                Reply to ${name}
              </a>
            </div>
          </div>
          <p style="color:#9ca3af;font-size:11px;text-align:center;margin-top:16px;">Sent from winsunimmigration.ca contact form</p>
        </div>
      `,
    });

    if (ownerEmailResult.error) {
      console.error('Owner notification email error:', ownerEmailResult.error);
      return NextResponse.json(
        { error: 'Failed to send inquiry notification.' },
        { status: 500 }
      );
    }

    // ── 2. Auto-reply to the client ───────────────────────────────────────
    const serviceName = service || 'immigration';

    const clientEmailResult = await resend.emails.send({
      from: CLIENT_FROM_EMAIL,
      to: email,
      replyTo: OWNER_EMAIL,
      subject: 'Thank you for contacting WINSUN Immigration Solutions',
      html: `
        <div style="font-family:Arial,sans-serif;max-width:620px;margin:0 auto;color:#1a1a2e;">
          <div style="background:#0F2A4A;padding:28px 32px;border-radius:8px 8px 0 0;">
            <h1 style="color:#C9A96E;font-size:26px;margin:0;letter-spacing:3px;font-style:italic;">WINSUN</h1>
            <p style="color:rgba(255,255,255,0.65);font-size:12px;margin:6px 0 0;letter-spacing:1px;">IMMIGRATION SOLUTIONS INC.</p>
          </div>
          <div style="background:#ffffff;padding:36px 32px;border:1px solid #e2e8f0;border-top:none;border-radius:0 0 8px 8px;">
            <p style="color:#0F2A4A;font-size:17px;line-height:1.7;margin:0 0 18px;">Hi ${name},</p>

            <p style="color:#374151;font-size:15px;line-height:1.8;margin:0 0 16px;">
              Thank you for contacting <strong>WINSUN Immigration Solutions</strong>.
            </p>

            <p style="color:#374151;font-size:15px;line-height:1.8;margin:0 0 16px;">
              We’d be happy to assist you with your <strong>${serviceName}</strong> application.
            </p>

            <p style="color:#374151;font-size:15px;line-height:1.8;margin:0 0 18px;">
              To better understand your situation, could you please add me on <strong>WeChat</strong> or <strong>WhatsApp</strong>? It will be easier for us to discuss your case and answer your questions.
            </p>

            <div style="background:#f8fafc;border:1px solid #e2e8f0;border-left:4px solid #C9A96E;border-radius:6px;padding:18px 20px;margin:0 0 24px;">
              <p style="color:#0F2A4A;font-size:15px;line-height:1.8;margin:0 0 6px;"><strong>WeChat:</strong> hahaSUV</p>
              <p style="color:#0F2A4A;font-size:15px;line-height:1.8;margin:0;"><strong>WhatsApp:</strong> +1 431 777 5668</p>
            </div>

            <p style="color:#374151;font-size:15px;line-height:1.8;margin:0 0 22px;">
              Looking forward to speaking with you!
            </p>

            <p style="color:#374151;font-size:15px;line-height:1.8;margin:0;">
              Best regards,<br/>
              <strong>Winnie Zhang</strong><br/>
              WINSUN Immigration Solutions Inc.
            </p>
          </div>
        </div>
      `,
    });

    if (clientEmailResult.error) {
      console.error('Client auto-reply email error:', clientEmailResult.error);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to send message. Please try again.' },
      { status: 500 }
    );
  }
}
