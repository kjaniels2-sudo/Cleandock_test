/**
 * LanguageSwitcher: Click-based language selector that stays open while hovering the menu.
 * - Fixes issue where hover menus close when moving the pointer.
 * - Persists selection in localStorage ('i18nextLng') and updates i18n immediately.
 *
 * Accessibility:
 * - Button is focusable.
 * - Menu supports Escape to close and outside-click to dismiss.
 */

import React, { useEffect, useRef, useState } from 'react'
import { Globe } from 'lucide-react'
import { useTranslation } from 'react-i18next'

/**
 * Language option item.
 */
interface LanguageOption {
  code: 'en' | 'zh'
  label: string
  short: string
}

/**
 * LanguageSwitcher component: a controlled, click-to-toggle popover menu.
 */
export default function LanguageSwitcher() {
  const { t, i18n } = useTranslation()
  const [open, setOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement | null>(null)

  // Available languages
  const options: LanguageOption[] = [
    { code: 'en', label: 'English (UK)', short: 'EN' },
    { code: 'zh', label: '中文', short: '中' },
  ]

  /**
   * Set language and persist it.
   * Stores selection to localStorage for persistence across sessions.
   */
  const setLanguage = (code: LanguageOption['code']) => {
    i18n.changeLanguage(code)
    try {
      localStorage.setItem('i18nextLng', code)
    } catch {
      // Ignore storage errors (e.g., privacy modes)
    }
    setOpen(false)
  }

  // Close on outside click
  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (!containerRef.current) return
      if (!containerRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('mousedown', onDocClick)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onDocClick)
      document.removeEventListener('keydown', onKey)
    }
  }, [])

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="inline-flex items-center gap-2 rounded-md border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-700 shadow-sm hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <Globe className="h-4 w-4 text-slate-600" />
        <span>{t('common.language')}</span>
      </button>

      {open && (
        <div
          role="menu"
          aria-label="Language selector"
          className="absolute right-0 z-50 mt-2 w-44 overflow-hidden rounded-md border border-slate-200 bg-white shadow-lg"
        >
          <ul className="divide-y divide-slate-100">
            {options.map((opt) => {
              const isActive = i18n.language?.startsWith(opt.code)
              return (
                <li key={opt.code}>
                  <button
                    type="button"
                    role="menuitem"
                    onClick={() => setLanguage(opt.code)}
                    className={`flex w-full items-center justify-between px-3 py-2 text-sm transition-colors ${
                      isActive
                        ? 'bg-blue-50 text-blue-700'
                        : 'text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    <span className="font-medium">{opt.label}</span>
                    <span
                      className={`ml-2 inline-flex h-6 w-6 items-center justify-center rounded bg-slate-100 text-[11px] ${
                        isActive ? 'bg-blue-100 text-blue-700' : ''
                      }`}
                    >
                      {opt.short}
                    </span>
                  </button>
                </li>
              )
            })}
          </ul>
        </div>
      )}
    </div>
  )
}
