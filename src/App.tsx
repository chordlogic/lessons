import { useState, useEffect, useCallback } from 'react'
import type { Theme } from './types'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Method from './components/Method'
import Reviews from './components/Reviews'
import Pricing from './components/Pricing'
import FAQ from './components/FAQ'
import CalModal from './components/CalModal'
import Footer from './components/Footer'

function getInitialTheme(): Theme {
  const stored = localStorage.getItem('theme')
  if (stored === 'light' || stored === 'dark') return stored
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export default function App() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme)
  const [calOpen, setCalOpen] = useState(false)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggle = useCallback(() => setTheme(t => (t === 'dark' ? 'light' : 'dark')), [])
  const openCal = useCallback(() => setCalOpen(true), [])
  const closeCal = useCallback(() => setCalOpen(false), [])

  return (
    <>
      <Nav theme={theme} onToggleTheme={toggle} onOpenCal={openCal} />
      <main>
        <Hero onOpenCal={openCal} />
        <Method />
        <Reviews />
        <Pricing onOpenCal={openCal} />
        <FAQ />
      </main>
      <Footer />
      <CalModal open={calOpen} onClose={closeCal} theme={theme} />
    </>
  )
}
