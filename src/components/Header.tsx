export default function Header() {
  return (
    <header className="header">
      <div className="container header-inner">
        <div className="logo">מוריה מנור</div>
        <nav className="nav">
          <a href="#home" className="nav-link active">בית</a>
          <a href="#services" className="nav-link">שירותים</a>
          <a href="#articles" className="nav-link">מאמרים</a>
          <a href="#contact" className="nav-link">צור קשר</a>
        </nav>
        <a href="#contact" className="btn btn-primary btn-sm">קביעת תור</a>
      </div>
    </header>
  )
}
