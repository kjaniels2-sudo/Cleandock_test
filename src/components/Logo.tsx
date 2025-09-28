/** 
 * Logo component: renders the brand logo image with optional responsive sizing.
 * - Default source is a shared SVG link; includes a PNG fallback on error.
 * - New: optional `sizes` prop enables responsive width/height per breakpoint.
 *
 * Accessibility:
 * - Provides an alt fallback using the translated short company name.
 */

import React, { useMemo } from 'react'
import { useTranslation } from 'react-i18next'

/**
 * Responsive size configuration for Tailwind-like breakpoints.
 * Values are in pixels.
 */
export interface LogoResponsiveSizes {
  /** Base size, applies to all screens unless overridden by larger breakpoints */
  base: number
  /** ≥640px (sm) */
  sm?: number
  /** ≥768px (md) */
  md?: number
  /** ≥1024px (lg) */
  lg?: number
  /** ≥1280px (xl) */
  xl?: number
}

/**
 * Props to configure the Logo component.
 */
export interface LogoProps {
  /** Image source URL for the logo. If not provided, a default SVG link is used. */
  src?: string
  /** Accessible alt text for the logo image. */
  alt?: string
  /** Single fixed size in pixels for width and height. Default: 80px. Ignored if `sizes` is provided. */
  size?: number
  /** Optional responsive sizes by breakpoint; if provided, overrides `size`. */
  sizes?: LogoResponsiveSizes
  /** Optional wrapper className for additional styling. */
  className?: string
  /** @deprecated Text was removed by design; this prop is ignored. Kept for backward compatibility. */
  withText?: boolean
}

/**
 * Logo
 * Renders a brand logo image. Supports either a fixed `size` or responsive `sizes`.
 */
export default function Logo({
  src,
  alt,
  size = 80,
  sizes,
  className = '',
}: LogoProps) {
  const { t } = useTranslation()

  /** Default SVG path served from this site (Netlify CDN). */
  const DEFAULT_LOGO_SVG_URL = '/logo.svg'

  /** Fallback PNG if SVG fails (keeps logo visible even if share URL blocks direct embedding). */
  const FALLBACK_LOGO_PNG_URL =
    'https://pub-cdn.sider.ai/u/U0VEHZXLO64/web-coder/68b076a238697d89a138793c/resource/c2790427-b211-4585-82de-d913377901d2.png'

  // Compute the initial source: prefer passed src, otherwise use the default SVG link
  const initialSrc = src || DEFAULT_LOGO_SVG_URL

  // Accessible alt text fallback uses the short company name when available
  const altText =
    alt || `${t('common.companyShortName', { defaultValue: 'CleanDock' })} logo`

  /**
   * Create a per-instance class to scope responsive CSS without polluting global CSS.
   * Using a memoized random token keeps it stable for the component lifecycle.
   */
  const instanceClass = useMemo(() => {
    // simple token; avoids characters React.useId might include like colons
    return `cd-logo-${Math.random().toString(36).slice(2, 9)}`
  }, [])

  /**
   * Build inline CSS for responsive sizes when `sizes` prop is provided.
   * - Applies width/height pairs at base and breakpoint-specific media queries.
   * - Skips media blocks when a breakpoint size is not provided.
   */
  const responsiveCss = useMemo(() => {
    if (!sizes) return ''
    const rules: string[] = []
    // Base (no media query)
    rules.push(`.${instanceClass} { width: ${sizes.base}px; height: ${sizes.base}px; }`)
    // Breakpoints
    if (typeof sizes.sm === 'number') {
      rules.push(
        `@media (min-width: 640px) { .${instanceClass} { width: ${sizes.sm}px; height: ${sizes.sm}px; } }`
      )
    }
    if (typeof sizes.md === 'number') {
      rules.push(
        `@media (min-width: 768px) { .${instanceClass} { width: ${sizes.md}px; height: ${sizes.md}px; } }`
      )
    }
    if (typeof sizes.lg === 'number') {
      rules.push(
        `@media (min-width: 1024px) { .${instanceClass} { width: ${sizes.lg}px; height: ${sizes.lg}px; } }`
      )
    }
    if (typeof sizes.xl === 'number') {
      rules.push(
        `@media (min-width: 1280px) { .${instanceClass} { width: ${sizes.xl}px; height: ${sizes.xl}px; } }`
      )
    }
    return rules.join('\n')
  }, [sizes, instanceClass])

  return (
    <div className={`flex items-center ${className}`}>
      {/* Inject instance-scoped styles only when responsive sizes are enabled */}
      {sizes ? <style>{responsiveCss}</style> : null}

      <img
        src={initialSrc}
        alt={altText}
        className={`object-contain ${sizes ? instanceClass : ''}`}
        style={sizes ? undefined : { width: size, height: size }}
        decoding="async"
        loading="eager"
        draggable={false}
        // In case the OneDrive share link cannot be embedded or returns a non-image response,
        // swap to the PNG fallback to ensure the UI does not break.
        onError={(e) => {
          if (e.currentTarget.src !== FALLBACK_LOGO_PNG_URL) {
            e.currentTarget.src = FALLBACK_LOGO_PNG_URL
          }
        }}
      />
    </div>
  )
}
