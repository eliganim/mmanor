import type { VercelRequest, VercelResponse } from '@vercel/node'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { name, phone, location, subject, message } = req.body

  if (!name || !phone) {
    return res.status(400).json({ error: 'שם וטלפון הם שדות חובה' })
  }

  try {
    await resend.emails.send({
      from: 'אתר מוריה מנור <onboarding@resend.dev>',
      to: 'moriahmanor@gmail.com',
      subject: `פנייה חדשה מהאתר${subject ? `: ${subject}` : ''}`,
      html: `
        <div dir="rtl" style="font-family: sans-serif; line-height: 1.8;">
          <h2>פנייה חדשה מהאתר</h2>
          <p><strong>שם:</strong> ${name}</p>
          <p><strong>טלפון:</strong> ${phone}</p>
          ${location ? `<p><strong>מיקום:</strong> ${location}</p>` : ''}
          ${subject ? `<p><strong>נושא:</strong> ${subject}</p>` : ''}
          ${message ? `<p><strong>הודעה:</strong><br/>${message.replace(/\n/g, '<br/>')}</p>` : ''}
        </div>
      `,
    })

    return res.status(200).json({ success: true })
  } catch (error) {
    console.error('Email send error:', error)
    return res.status(500).json({ error: 'שגיאה בשליחת ההודעה' })
  }
}
