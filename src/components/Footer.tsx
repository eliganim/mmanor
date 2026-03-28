import logo from '../assets/logo.png'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <div className="footer-logo">
            <img src={logo} alt="מוריה מנור" className="footer-logo-icon" />
            מוריה מנור
          </div>
          <p>קליניקה פרטית לטיפול פסיכולוגי<br />ולייעוץ לגיל השלישי.</p>
        </div>
        <div className="footer-bottom">
          <div className="footer-links">
            <a href="#">מדיניות פרטיות</a>
            <a href="#">הצהרת נגישות</a>
            <a href="#">תנאי שימוש</a>
          </div>
          <p className="footer-copy">&copy; 2024 מוריה מנור - טיפול רגשי לגיל השלישי. כל הזכויות שמורות.</p>
        </div>
      </div>
    </footer>
  )
}
