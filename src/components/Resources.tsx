import content from '../content'

const ExternalLinkIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
)

const linkKeys = [1, 2, 3, 4] as const

export default function Resources() {
  const c = content.resources

  return (
    <section className="resources">
      <div className="container">
        <h2 className="section-title">{c.section_title}</h2>
        <p className="section-subtitle">{c.section_subtitle}</p>
        <div className="resources-inner">
          <div className="guide-card">
            <div className="guide-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
              </svg>
            </div>
            <h3>{c.guide_title}</h3>
            <p>{c.guide_desc}</p>
            <a href="#" className="btn btn-primary btn-sm">{c.guide_btn}</a>
          </div>
          <div className="resources-links">
            {linkKeys.map((n) => (
              <a
                key={n}
                href={c[`link_${n}_url` as keyof typeof c]}
                className="resource-link"
              >
                <span>{c[`link_${n}_label` as keyof typeof c]}</span>
                <ExternalLinkIcon />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
