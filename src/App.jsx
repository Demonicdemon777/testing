import './index.css'

import Background from './components/Background.jsx'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import UploadSection from './components/UploadSection.jsx'
import ScoreDashboard from './components/ScoreDashboard.jsx'
import Features from './components/Features.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <Background />
      <Navbar />
      <Hero />
      <UploadSection />
      <ScoreDashboard />
      <Features />
      <Footer />
    </>
  )
}