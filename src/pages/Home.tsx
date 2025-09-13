import { useState } from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import ValueProposition from '../components/ValueProposition'
import Solution from '../components/Solution'
import Stakeholders from '../components/Stakeholders'
import Benefits from '../components/Benefits'
import Partnership from '../components/Partnership'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

/**
 * Home page component for ShorePower B2B solutions
 * Serves as the main landing page targeting harbour stakeholders and energy partners
 */
export default function Home() {
  const [activeSection, setActiveSection] = useState('home')

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      <main>
        <Hero setActiveSection={setActiveSection} />
        <ValueProposition />
        <Solution />
        <Stakeholders />
        <Benefits />
        <Partnership />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
