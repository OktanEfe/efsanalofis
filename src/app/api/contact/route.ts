import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, phone, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Ad, e-posta ve mesaj alanları zorunludur." },
        { status: 400 }
      );
    }

    const { error } = await resend.emails.send({
      from: "EF Sanal Ofis <onboarding@resend.dev>",
      to: "info@efsanalofis.com",
      replyTo: email,
      subject: `Yeni İletişim Formu: ${name}`,
      html: `
        <div style="font-family: Inter, sans-serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #ffffff;">
          <div style="background: #ffbe00; padding: 24px 32px; border-radius: 16px 16px 0 0;">
            <h1 style="margin: 0; font-size: 20px; font-weight: 800; color: #000;">Yeni İletişim Formu</h1>
            <p style="margin: 4px 0 0; font-size: 13px; color: rgba(0,0,0,0.6);">EF Sanal Ofis — efsanalofis.com</p>
          </div>
          
          <div style="border: 1px solid #f0f0f0; border-top: none; border-radius: 0 0 16px 16px; padding: 32px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #f5f5f5; font-size: 13px; color: #999; width: 120px;">Ad Soyad</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #f5f5f5; font-size: 14px; font-weight: 600; color: #000;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #f5f5f5; font-size: 13px; color: #999;">E-posta</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #f5f5f5; font-size: 14px; font-weight: 600; color: #000;">
                  <a href="mailto:${email}" style="color: #000; text-decoration: none;">${email}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #f5f5f5; font-size: 13px; color: #999;">Telefon</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #f5f5f5; font-size: 14px; font-weight: 600; color: #000;">
                  ${phone ? `<a href="tel:${phone}" style="color: #000; text-decoration: none;">${phone}</a>` : "—"}
                </td>
              </tr>
              <tr>
                <td style="padding: 12px 0; font-size: 13px; color: #999; vertical-align: top; padding-top: 16px;">Mesaj</td>
                <td style="padding: 12px 0; font-size: 14px; color: #333; line-height: 1.7; padding-top: 16px;">${message.replace(/\n/g, "<br>")}</td>
              </tr>
            </table>
            
            <div style="margin-top: 32px; padding: 16px; background: #fafafa; border-radius: 12px; text-align: center;">
              <a href="mailto:${email}" style="display: inline-block; background: #000; color: #fff; font-size: 13px; font-weight: 700; padding: 12px 24px; border-radius: 8px; text-decoration: none;">
                Yanıtla
              </a>
            </div>
          </div>
          
          <p style="text-align: center; font-size: 12px; color: #ccc; margin-top: 24px;">
            © ${new Date().getFullYear()} EF Sanal Ofis — Bu mail otomatik olarak gönderilmiştir.
          </p>
        </div>
      `,
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch {
    return NextResponse.json({ error: "Sunucu hatası." }, { status: 500 });
  }
}