import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

const OWNER_EMAIL = 'winnie@winsunimmigration.ca';
const FROM_EMAIL = 'WINSUN Immigration <onboarding@resend.dev>'; // change after domain verified

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
    await resend.emails.send({
      from: FROM_EMAIL,
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

    // ── 2. Auto-confirmation to the client ─────────────────────────────────
    await resend.emails.send({
      from: FROM_EMAIL,
      to: email,
      replyTo: OWNER_EMAIL,
      subject: 'Thank you for contacting WINSUN Immigration Solutions | 感谢您联系 WINSUN 移民解决方案',
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;color:#1a1a2e;">
          <div style="background:#0F2A4A;padding:28px 32px;border-radius:8px 8px 0 0;text-align:center;">
            <h1 style="color:#C9A96E;font-size:26px;margin:0;letter-spacing:3px;font-style:italic;">WINSUN</h1>
            <p style="color:rgba(255,255,255,0.6);font-size:12px;margin:6px 0 0;letter-spacing:1px;">IMMIGRATION SOLUTIONS INC.</p>
          </div>
          <div style="background:#ffffff;padding:40px 32px;border:1px solid #e2e8f0;border-top:none;">
            <h2 style="color:#0F2A4A;font-size:20px;margin:0 0 8px;">Dear ${name},</h2>
            <p style="color:#C9A96E;font-size:14px;margin:0 0 24px;">亲爱的 ${name}，</p>

            <p style="color:#374151;line-height:1.7;margin:0 0 12px;">
              Thank you for contacting <strong>WINSUN Immigration Solutions Inc.</strong> We have received your inquiry and will respond within <strong>1–2 business days</strong>.
            </p>
            <p style="color:#6b7280;font-size:13px;line-height:1.7;margin:0 0 28px;">
              感谢您联系 <strong>WINSUN 移民解决方案有限公司</strong>。我们已收到您的咨询，将在 <strong>1–2个工作日内</strong>回复您。
            </p>

            <div style="background:#f8fafc;border:1px solid #e2e8f0;border-left:3px solid #C9A96E;border-radius:4px;padding:20px;margin:0 0 28px;">
              <p style="color:#0F2A4A;font-weight:600;font-size:13px;margin:0 0 4px;">Your inquiry summary 您的咨询摘要</p>
              <p style="color:#6b7280;font-size:12px;margin:0 0 8px;">Service: ${service || 'General inquiry'}</p>
              <p style="color:#374151;font-size:13px;line-height:1.6;margin:0;">${message.substring(0, 200)}${message.length > 200 ? '...' : ''}</p>
            </div>

            <p style="color:#374151;line-height:1.7;margin:0 0 8px;">
              In the meantime, feel free to explore our services at <a href="https://winsunimmigration.ca/services" style="color:#C9A96E;">winsunimmigration.ca</a>, or reach us directly:
            </p>
            <p style="color:#6b7280;font-size:13px;margin:0 0 28px;">
              如有紧急事项，欢迎直接通过以下方式联系我们：
            </p>

            <div style="background:#0F2A4A;border-radius:6px;padding:20px 24px;margin:0 0 28px;">
              <p style="color:rgba(255,255,255,0.5);font-size:11px;letter-spacing:1px;text-transform:uppercase;margin:0 0 12px;">Contact Information 联系方式</p>
              <p style="color:#C9A96E;font-size:13px;margin:0 0 6px;">📧 <a href="mailto:${OWNER_EMAIL}" style="color:#C9A96E;text-decoration:none;">${OWNER_EMAIL}</a></p>
              <p style="color:rgba(255,255,255,0.6);font-size:13px;margin:0 0 6px;">📍 200-1460 Chevrier Blvd, Winnipeg, MB R3T 1Y7</p>
              <p style="color:rgba(255,255,255,0.6);font-size:13px;margin:0;">🕐 Mon–Fri 9:00 AM – 6:00 PM | Sat by appointment</p>
            </div>

            <p style="color:#374151;line-height:1.7;margin:0;">
              We look forward to guiding you on your Canadian immigration journey.
            </p>
            <p style="color:#6b7280;font-size:13px;margin:4px 0 0;">期待为您的加拿大移民旅程提供专业指导。</p>
          </div>
          <div style="background:#f8fafc;padding:20px 32px;border:1px solid #e2e8f0;border-top:none;border-radius:0 0 8px 8px;">
            <p style="color:#9ca3af;font-size:11px;line-height:1.6;margin:0;text-align:center;">
              <strong>Disclaimer:</strong> This email is for general information only and does not constitute legal advice. Immigration outcomes depend on individual circumstances and IRCC assessment.<br/>
              <span style="color:#d1d5db;">免责声明：本邮件仅供一般参考，不构成法律建议。移民结果取决于个人情况及IRCC评估。</span>
            </p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to send message. Please try again.' },
      { status: 500 }
    );
  }
}
