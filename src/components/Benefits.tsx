/**
 * Benefits.tsx
 * Displays environmental and economic advantages plus a business case strip.
 * Ensures the KPI card headline uses clear, plain language and tooltips for context.
 */

import { useTranslation } from 'react-i18next'
import * as Tooltip from '@radix-ui/react-tooltip'
import { Info } from 'lucide-react'

/**
 * KpiCard component
 * Renders a compact KPI card with a headline, caption, and optional info tooltip.
 */
function KpiCard({
  headline,
  caption,
  accent = 'from-blue-50 to-blue-100',
  info,
}: {
  headline: string
  caption: string
  accent?: string
  info?: string
}) {
  return (
    <div className={`bg-gradient-to-br ${accent} border border-slate-200 rounded-xl p-6`}>
      <div className="flex items-start gap-2 text-slate-900 mb-2">
        <div className="text-2xl md:text-3xl font-bold leading-tight">{headline}</div>
        {info && (
          <Tooltip.Root>
            <Tooltip.Trigger asChild>
              <button
                type="button"
                aria-label="More info"
                className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full border border-slate-300 bg-white/70 text-slate-600 hover:text-slate-900 hover:bg-white transition"
              >
                <Info className="h-3.5 w-3.5" aria-hidden="true" />
              </button>
            </Tooltip.Trigger>
            <Tooltip.Portal>
              <Tooltip.Content
                side="top"
                align="start"
                sideOffset={6}
                collisionPadding={8}
                className="z-[60] max-w-xs rounded-md bg-slate-900 px-3 py-2 text-xs leading-relaxed text-white shadow-lg"
              >
                {info}
                <Tooltip.Arrow className="fill-slate-900" />
              </Tooltip.Content>
            </Tooltip.Portal>
          </Tooltip.Root>
        )}
      </div>
      <div className="text-slate-600 text-sm">{caption}</div>
    </div>
  )
}

/**
 * Benefits section
 * Communicates environmental and economic advantages and includes a business case strip.
 */
export default function Benefits() {
  const { t } = useTranslation()

  return (
    <section id="benefits" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 mb-4">
            <div className="w-12 h-1 bg-gradient-to-r from-blue-600 to-teal-600" />
            <span className="text-blue-600 font-medium">BENEFITS</span>
            <div className="w-12 h-1 bg-gradient-to-r from-teal-600 to-blue-600" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            {t('benefits.title')}
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            {t('benefits.description')}
          </p>
        </div>

        {/* Two columns: Environmental & Economic */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
            <h3 className="text-xl font-semibold text-slate-800 mb-4">
              {t('benefits.environmentalImpact')}
            </h3>
            <ul className="space-y-3 text-slate-700">
              <li>
                <span className="font-medium">{t('benefits.emissionReduction')}:</span>{' '}
                {t('benefits.emissionReductionDesc')}
              </li>
              <li>
                <span className="font-medium">{t('benefits.airQuality')}:</span>{' '}
                {t('benefits.airQualityDesc')}
              </li>
              <li>
                <span className="font-medium">{t('benefits.regulatoryComplianceFull')}:</span>{' '}
                {t('benefits.regulatoryComplianceDesc')}
              </li>
            </ul>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
            <h3 className="text-xl font-semibold text-slate-800 mb-4">
              {t('benefits.economicBenefits')}
            </h3>
            <ul className="space-y-3 text-slate-700">
              <li>
                <span className="font-medium">{t('benefits.capexElimination')}:</span>{' '}
                {t('benefits.capexEliminationDesc')}
              </li>
              <li>
                <span className="font-medium">{t('benefits.operationalEfficiency')}:</span>{' '}
                {t('benefits.operationalEfficiencyDesc')}
              </li>
              <li>
                <span className="font-medium">{t('benefits.revenueGeneration')}:</span>{' '}
                {t('benefits.revenueGenerationDesc')}
              </li>
            </ul>
          </div>
        </div>

        {/* Business case strip */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
          <div className="flex items-center justify-between flex-wrap gap-4 mb-4">
            <h3 className="text-lg md:text-xl font-semibold text-slate-800">
              {t('benefits.businessCase')}
            </h3>
            <p className="text-slate-600 text-sm md:text-base max-w-3xl">
              {t('benefits.businessCaseDesc')}
            </p>
          </div>

          {/* Single Tooltip.Provider to ensure consistent behavior */}
          <Tooltip.Provider delayDuration={120} skipDelayDuration={200}>
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6" role="group" aria-label="Business case key metrics">
              {/* EU regulations */}
              <KpiCard
                headline="EU regulations"
                caption={t('benefits.euMandate')}
                accent="from-teal-50 to-teal-100"
                info={t('benefits.euMandateInfo')}
              />
              {/* Cruise adoption timeline */}
              <KpiCard
                headline="80% of cruise fleet"
                caption={t('benefits.cruisePreference')}
                accent="from-blue-50 to-blue-100"
                info={t('benefits.cruisePreferenceInfo')}
              />
              {/* ROI context */}
              <KpiCard
                headline={t('benefits.roiPeriod')}
                caption={t('benefits.fixedCosts')}
                accent="from-indigo-50 to-indigo-100"
                info={t('benefits.roiInfo')}
              />
              {/* Global availability today (removed 'Only') */}
              <KpiCard
                headline="3% of cruise terminals"
                caption="offer shore power today"
                accent="from-amber-50 to-amber-100"
                info={t('benefits.globalAvailabilityInfo')}
              />
              {/* 2035 outlook */}
              <KpiCard
                headline="By 2035"
                caption="all major cruise terminals should offer Shore Power"
                accent="from-emerald-50 to-emerald-100"
                info={t('benefits.outlook2035Info')}
              />
            </div>
          </Tooltip.Provider>
        </div>
      </div>
    </section>
  )
}
