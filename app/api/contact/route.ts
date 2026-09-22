import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, company, interest, message } = body

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 })
    }

    const { error } = await resend.emails.send({
      from: 'ECO Integrated Technologies <noreply@mail.ecoiti.com>',
      to: 'info@ecoiti.com',
      replyTo: email,
      subject: `New Contact Form Submission — ${name}${company ? ` (${company})` : ''}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #0A1A14;">
          <div style="background: #0D3D2A; padding: 24px 32px; border-radius: 8px 8px 0 0;">
            <h2 style="color: #fff; margin: 0; font-size: 20px;">New Contact Form Submission</h2>
            <p style="color: rgba(255,255,255,0.65); margin: 4px 0 0; font-size: 13px;">ECO Integrated Technologies</p>
          </div>
          <div style="background: #f8f9fa; padding: 32px; border-radius: 0 0 8px 8px; border: 1px solid #e0e0e0; border-top: none;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; font-size: 13px; color: #666; width: 120px;">Name</td>
                <td style="padding: 8px 0; font-size: 14px; font-weight: 600;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-size: 13px; color: #666;">Email</td>
                <td style="padding: 8px 0; font-size: 14px;"><a href="mailto:${email}" style="color: #1A835A;">${email}</a></td>
              </tr>
              ${company ? `<tr>
                <td style="padding: 8px 0; font-size: 13px; color: #666;">Company</td>
                <td style="padding: 8px 0; font-size: 14px;">${company}</td>
              </tr>` : ''}
              ${interest ? `<tr>
                <td style="padding: 8px 0; font-size: 13px; color: #666;">Interest</td>
                <td style="padding: 8px 0; font-size: 14px;">${interest}</td>
              </tr>` : ''}
            </table>
            <hr style="border: none; border-top: 1px solid #e0e0e0; margin: 20px 0;" />
            <p style="font-size: 13px; color: #666; margin: 0 0 8px;">Message</p>
            <p style="font-size: 14px; line-height: 1.7; white-space: pre-wrap; margin: 0;">${message}</p>
          </div>
        </div>
      `,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json({ error: 'Failed to send message.' }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Contact route error:', err)
    return NextResponse.json({ error: 'Server error.' }, { status: 500 })
  }
}
