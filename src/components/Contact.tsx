import { useState, type FormEvent } from 'react'

interface FormData {
  name: string
  phone: string
  location: string
  subject: string
  message: string
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    location: '',
    subject: '',
    message: '',
  })

  const handleChange = (field: keyof FormData) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormData((prev) => ({ ...prev, [field]: e.target.value }))
    }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">בואו נדבר</h2>
        <p className="section-subtitle">השאירו פרטים ואחזור אליכם בהקדם לשיחת היכרות ראשונית.</p>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">שם מלא</label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange('name')}
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">מספר טלפון</label>
              <input
                type="tel"
                id="phone"
                placeholder="050-0000000"
                value={formData.phone}
                onChange={handleChange('phone')}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="location">ישראלי / ישראלית</label>
              <input
                type="text"
                id="location"
                value={formData.location}
                onChange={handleChange('location')}
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="subject">נושא הפנייה (אופציונלי)</label>
            <input
              type="text"
              id="subject"
              value={formData.subject}
              onChange={handleChange('subject')}
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">ספרו לי מעט על הצורך שלכם...</label>
            <textarea
              id="message"
              rows={4}
              value={formData.message}
              onChange={handleChange('message')}
            />
          </div>
          <button type="submit" className="btn btn-primary btn-lg">שליחת הודעה</button>
        </form>
        <div className="contact-info">
          <div className="contact-item">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            <div>
              <span className="contact-label">טלפון ישיר</span>
              <span className="contact-value">052-1234567</span>
            </div>
          </div>
          <div className="contact-item">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            <div>
              <span className="contact-label">דואר אלקטרוני</span>
              <span className="contact-value">maria@manor-therapy.co.il</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
