/**
 * Header component with a single responsive navigation bar.
 * - Desktop (md+): inline nav links + LanguageSwitcher.
 * - Mobile (&lt;md): Menu button toggles dropdown with links; LanguageSwitcher stays visible.
 * - Eliminates duplicate stacked headers and prevents duplication at zoom levels.
 */

import React, { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Menu } from 'lucide-react'
import Logo from './Logo'
import LanguageSwitcher from './LanguageSwitcher'

/**
 * Props for Header component.
 */
interface HeaderProps {
  /** Current active section id (e.g., 'home', 'value', 'solution', ...) */
  activeSection: string
  /** Setter to update active section */
  setActiveSection: (section: string) => void
}

/**
 * Smoothly scroll to a target section by id and notify parent of active section.
 */
function scrollTo(sectionId: string, setActiveSection: (s: string) => void) {
  const el = document.getElementById(sectionId)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setActiveSection(sectionId)
  }
}

/**
 * Header
 * Sticky top navigation with brand logo, responsive section links, and a language selector.
 * - Uses a single header row to avoid duplication at different zoom levels.
 * - Mobile menu is a dropdown rendered inside the same header.
 */
export default function Header({ activeSection, setActiveSection }: HeaderProps) {
  const { t } = useTranslation()
  const [menuOpen, setMenuOpen] = useState(false)

  /** Ref for detecting outside clicks on the mobile dropdown */
  const menuRef = useRef<HTMLDivElement>(null)

  /** Close mobile menu when clicking outside */
  useEffect(() => {
    function handleOutside(e: MouseEvent) {
      if (!menuOpen) return
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', handleOutside)
    return () => document.removeEventListener('mousedown', handleOutside)
  }, [menuOpen])

  /** Close menu on Escape for accessibility */
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  // Navigation items mapped to section ids used in the landing page
  const nav = [
    { id: 'home', label: t('header.home') },
    { id: 'value', label: t('header.valueProposition') },
    { id: 'solution', label: t('header.solution') },
    { id: 'stakeholders', label: t('header.stakeholders') },
    { id: 'benefits', label: t('header.benefits') },
    { id: 'partnership', label: t('header.partnership') },
    { id: 'contact', label: t('header.contact') },
  ] as const

  /** Handle nav click: smooth scroll and close menu (if mobile dropdown) */
  function handleNavClick(id: string) {
    scrollTo(id, setActiveSection)
    setMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200 bg-white/80 backdrop-blur">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Brand */}
        <div className="flex items-center">
          {/* Responsive logo sizing across breakpoints */}
          <Logo sizes={{ base: 64, md: 80, lg: 96 }} />
        </div>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-2">
          {nav.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault()
                handleNavClick(item.id)
              }}
              className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                activeSection === item.id
                  ? 'bg-blue-50 text-blue-700'
                  : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Actions + Mobile Menu Toggle (single header approach) */}
        <div className="relative flex items-center gap-2" ref={menuRef}>
          {/* Mobile menu toggle */}
          <button
            type="button"
            aria-haspopup="menu"
            aria-expanded={menuOpen}
            aria-label="Open menu"
            className="inline-flex items-center gap-2 rounded-md border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-700 shadow-sm hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-500 md:hidden"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <Menu className="h-4 w-4 text-slate-600" aria-hidden="true" />
            <span>{t('header.home')}</span>
          </button>

          {/* Language switcher is visible at all sizes; no duplicate headers exist */}
          <LanguageSwitcher />

          {/* Mobile dropdown menu */}
          {menuOpen && (
            <div className="absolute right-0 top-full z-50 mt-2 w-56 rounded-md border border-slate-200 bg-white shadow-md md:hidden">
              <nav aria-label="Mobile">
                <ul className="py-1">
                  {nav.map((item) => (
                    <li key={item.id}>
                      <button
                        type="button"
                        onClick={() => handleNavClick(item.id)}
                        className={`block w-full text-left px-3 py-2 text-sm transition-colors ${
                          activeSection === item.id
                            ? 'bg-blue-50 text-blue-700'
                            : 'text-slate-700 hover:bg-slate-50'
                        }`}
                      >
                        {item.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
