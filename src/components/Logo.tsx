/**
 * Reusable Logo component that renders only the brand image.
 * - Text rendering has been intentionally removed to match brand direction.
 * - The image size can be customized via the `size` prop.
 *
 * Accessibility:
 * - Provides a clear alt fallback using the translated short company name.
 *
 * Note:
 * - `withText` is deprecated and ignored to ensure no text is rendered.
 */

import React from 'react'
import { useTranslation } from 'react-i18next'

/**
 * Props to configure the Logo component.
 */
export interface LogoProps {
  /** Image source URL for the logo. If not provided, a smart placeholder is used. */
  src?: string
  /** Accessible alt text for the logo image. */
  alt?: string
  /** Logo size in pixels for width and height. Default: 80px. */
  size?: number
  /** Optional wrapper className for additional styling. */
  className?: string
  /** @deprecated Text was removed by design; this prop is ignored. */
  withText?: boolean
}

/**
 * Logo
 * Renders a brand logo image only. Text has been removed by design.
 */
export default function Logo({
  src,
  alt,
  size = 80,
  className = '',
}: LogoProps) {
  const { t } = useTranslation()

  // Fallback to a smart placeholder if no src is provided
  const finalSrc =
    src ||
    'https://pub-cdn.sider.ai/u/U0VEHZXLO64/web-coder/68b076a238697d89a138793c/resource/7b202a52-5b12-43da-96ce-1457c247ef2b.png'

  // Accessible alt text fallback uses the short company name when available
  const altText =
    alt || `${t('common.companyShortName', { defaultValue: 'CleanDock' })} logo`

  return (
    <div className={`flex items-center ${className}`}>
      <img
        src={finalSrc}
        alt={altText}
        className="object-contain"
        style={{ width: size, height: size }}
      />
    </div>
  )
}
