import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Resources from './components/Resources'
import Contact from './components/Contact'
import Footer from './components/Footer'
import AdminLayout from './admin/AdminLayout'

function MainSite() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <Resources />
      <Contact />
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainSite />} />
        <Route path="/admin/*" element={<AdminLayout />} />
      </Routes>
    </BrowserRouter>
  )
}
