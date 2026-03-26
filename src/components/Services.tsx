import content from '../content'

interface ServiceDef {
  icon: React.ReactNode
  iconClass: string
  titleKey: keyof typeof content.services
  descKey: keyof typeof content.services
}

const serviceDefs: ServiceDef[] = [
  {
    iconClass: 'icon-brown',
    titleKey: 'service_1_title',
    descKey: 'service_1_desc',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    iconClass: 'icon-teal',
    titleKey: 'service_2_title',
    descKey: 'service_2_desc',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 8v4l3 3" />
      </svg>
    ),
  },
  {
    iconClass: 'icon-pink',
    titleKey: 'service_3_title',
    descKey: 'service_3_desc',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
  {
    iconClass: 'icon-red',
    titleKey: 'service_4_title',
    descKey: 'service_4_desc',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="15" y1="9" x2="9" y2="15" />
        <line x1="9" y1="9" x2="15" y2="15" />
      </svg>
    ),
  },
  {
    iconClass: 'icon-blue',
    titleKey: 'service_5_title',
    descKey: 'service_5_desc',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
  },
  {
    iconClass: 'icon-home',
    titleKey: 'service_6_title',
    descKey: 'service_6_desc',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
]

export default function Services() {
  const c = content.services

  return (
    <section id="services" className="services">
      <div className="container">
        <h2 className="section-title">{c.section_title}</h2>
        <div className="services-grid">
          {serviceDefs.map((svc) => (
            <div key={svc.titleKey} className="service-card">
              <div className={`service-icon ${svc.iconClass}`}>{svc.icon}</div>
              <h3>{c[svc.titleKey]}</h3>
              <p>{c[svc.descKey]}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
