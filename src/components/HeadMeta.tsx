/**
 * HeadMeta
 * Formål: Oppdatere dokumentets tittel og favicon programmatisk uten å røre index.html/main.tsx.
 * Bruk: Plasser én gang høyt i app-treet (f.eks. i App.tsx).
 *
 * Tilgjengelighet:
 * - Setter tydelig fanetittel for bedre orientering i nettleserfaner.
 */

import React, { useEffect } from 'react'

/**
 * Props for HeadMeta.
 */
interface HeadMetaProps {
  /** Tekst som vises i nettleserfanen. */
  title?: string
  /** Sti/URL til favicon. SVG støttes i moderne nettlesere. */
  favicon?: string
}

/**
 * HeadMeta-komponent: injiserer/oppdaterer document.title og <link rel="icon">.
 * - Beholder favicon mellom navigasjoner; re-injiseres ved prop-endring.
 */
export default function HeadMeta({
  title = 'CleanDock',
  favicon = '/logo.svg',
}: HeadMetaProps) {
  // Oppdater fanetittel
  useEffect(() => {
    if (document.title !== title) {
      document.title = title
    }
  }, [title])

  // Oppdater favicon-lenker
  useEffect(() => {
    const head = document.head

    // Fjern alle eksisterende ikonlenker for å unngå duplikater
    const existing = head.querySelectorAll('link[rel*="icon"]')
    existing.forEach((n) => n.parentElement?.removeChild(n))

    // Primær SVG-ikon
    const linkIcon = document.createElement('link')
    linkIcon.rel = 'icon'
    linkIcon.href = favicon
    if (favicon.endsWith('.svg')) {
      linkIcon.type = 'image/svg+xml'
    }
    head.appendChild(linkIcon)

    // Merk: Vi rydder ikke opp ved unmount for å bevare ikonet hvis komponenten
    // renderes betinget. Neste mount vil uansett erstatte eksisterende ikoner.
  }, [favicon])

  return null
}
