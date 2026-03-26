import content from '../content'

export default function Hero() {
  const c = content.hero
  const titleParts = c.title.split('\n')

  return (
    <section id="home" className="hero">
      <div className="container hero-inner">
        <div className="hero-image">
          <div className="hero-image-wrapper">
            <div className="hero-image-placeholder" />
          </div>
          <div className="hero-quote">
            <p>{c.quote}</p>
          </div>
        </div>
        <div className="hero-content">
          <p className="hero-subtitle">{c.subtitle}</p>
          <h1>
            {titleParts.map((part, i) => (
              <span key={i}>
                {part}
                {i < titleParts.length - 1 && <br />}
              </span>
            ))}
          </h1>
          <p className="hero-text">{c.description}</p>
          <div className="hero-buttons">
            <a href="#contact" className="btn btn-primary">{c.btn_primary}</a>
            <a href="#services" className="btn btn-outline">{c.btn_secondary}</a>
          </div>
        </div>
      </div>
    </section>
  )
}
