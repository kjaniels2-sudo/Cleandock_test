import { Building, Zap, TrendingUp, Shield, Globe, Clock, Info, GripVertical } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { useMemo, useState } from 'react'
import * as Slider from '@radix-ui/react-slider'
import * as Tooltip from '@radix-ui/react-tooltip'

/**
 * ValueProposition.tsx
 * Purpose:
 * - Highlight BOO model value.
 * - Interactive Co-investment slider (0–100%).
 * - Read-only Profit sharing (computed) and CAPEX reduction (computed), both linked to Co-investment.
 * - All scales 0–100% for consistent mental model.
 *
 * Visual UX:
 * - Co-investment thumb is visually distinct (blue ring + grip icon + grab cursor) to indicate draggability.
 * - Derived sliders use subdued thumbs and not-allowed cursor to signal read-only state.
 *
 * Correlations (illustrative, not contractual):
 * - Profit sharing:
 *    if coInvestment === 0 => 0%
 *    else => min(100, round(10 + 0.7 * coInvestment))
 * - CAPEX reduction:
 *    100 - coInvestment (relative to fully self-funded scenario)
 */

/**
 * Value Proposition section highlighting the BOO model benefits
 */
export default function ValueProposition() {
  const { t } = useTranslation()

  /**
   * coInvestment stores the harbour's co-investment percentage (0–100).
   * Demo preset: 25% gives a meaningful visual baseline while still interactive.
   */
  const [coInvestment, setCoInvestment] = useState<number>(25)

  /**
   * Compute profitSharing from coInvestment (illustrative).
   * - If coInvestment === 0 => 0%
   * - Else => clamp(10 + 0.7 * coInvestment, 0, 100)
   */
  const profitSharing = useMemo(() => {
    if (coInvestment <= 0) return 0
    const calculated = Math.round(10 + 0.7 * coInvestment)
    return Math.max(0, Math.min(100, calculated))
  }, [coInvestment])

  /**
   * CAPEX reduction for the harbour relative to self-funded:
   * 100% - coInvestment
   */
  const capexReduction = useMemo(() => {
    return Math.max(0, Math.min(100, 100 - coInvestment))
  }, [coInvestment])

  const benefits = [
    {
      icon: <Building className="text-blue-600" size={32} />,
      title: t('valueProposition.zeroCapex'),
      description: t('valueProposition.zeroCapexDesc'),
      color: 'from-blue-50 to-blue-100',
    },
    {
      icon: <Zap className="text-teal-600" size={32} />,
      title: t('valueProposition.operationalSupport'),
      description: t('valueProposition.operationalSupportDesc'),
      color: 'from-teal-50 to-teal-100',
    },
    {
      icon: <TrendingUp className="text-blue-600" size={32} />,
      title: t('valueProposition.revenueSharing'),
      description: t('valueProposition.revenueSharingDesc'),
      color: 'from-blue-50 to-blue-100',
    },
    {
      icon: <Shield className="text-teal-600" size={32} />,
      title: t('valueProposition.riskMitigation'),
      description: t('valueProposition.riskMitigationDesc'),
      color: 'from-teal-50 to-teal-100',
    },
    {
      icon: <Globe className="text-blue-600" size={32} />,
      title: t('valueProposition.environmentalCompliance'),
      description: t('valueProposition.environmentalComplianceDesc'),
      color: 'from-blue-50 to-blue-100',
    },
    {
      icon: <Clock className="text-teal-600" size={32} />,
      title: t('valueProposition.rapidDeployment'),
      description: t('valueProposition.rapidDeploymentDesc'),
      color: 'from-teal-50 to-teal-100',
    },
  ]

  // Tooltip helper texts with safe defaults if i18n key is missing
  const correlationInfo = t(
    'valueProposition.correlationInfo100',
    'Illustrative: if Co-investment is 0% → Profit sharing is 0%. Otherwise Profit sharing ≈ 10% + 0.7 × Co-investment (capped at 100%).'
  )
  const capexInfo = t(
    'valueProposition.capexInfo',
    'Illustrative: CAPEX reduction = 100% − Co-investment (relative to fully self-funded).'
  )

  return (
    <section id="value" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 mb-4">
            <div className="w-12 h-1 bg-gradient-to-r from-blue-600 to-teal-600"></div>
            <span className="text-blue-600 font-medium">VALUE PROPOSITION</span>
            <div className="w-12 h-1 bg-gradient-to-r from-blue-600 to-teal-600"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            {t('valueProposition.title')}
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            {t('valueProposition.description')}
          </p>
        </div>

        {/* Benefits grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${benefit.color} p-8 rounded-xl border border-slate-200 hover:shadow-lg transition-all duration-300`}
            >
              <div className="mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">{benefit.title}</h3>
              <p className="text-slate-600 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* KPI Card: co-investment (interactive) + 2 computed sliders (read-only) */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-teal-600 rounded-2xl p-8 md:p-12 text-white">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Why choose card */}
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                {t('valueProposition.whyChoose')}
              </h3>
              <p className="text-blue-100 mb-6 leading-relaxed">
                {t('valueProposition.whyChooseDesc')}
              </p>
              <ul className="space-y-2 text-blue-100">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  {t('valueProposition.noFinancialRisk')}
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  {t('valueProposition.guaranteedPerformance')}
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  {t('valueProposition.compliance')}
                </li>
              </ul>
            </div>

            {/* KPI Sliders */}
            <Tooltip.Provider delayDuration={120} skipDelayDuration={200}>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h4 className="text-lg font-semibold mb-2">
                  {t('valueProposition.keyMetrics')}
                </h4>
                <p className="text-xs text-white/80 mb-6 leading-relaxed">
                  {t('valueProposition.coInvestmentDesc')}
                </p>

                <div className="space-y-6">
                  {/* Co-investment (interactive 0–100%) */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-white/90">
                        {t('valueProposition.coInvestment', 'Co-investment')} (0–100%)
                      </span>
                      <span className="tabular-nums">{coInvestment}%</span>
                    </div>

                    {/* Slider: interactive with distinctive thumb (blue ring + grip icon) */}
                    <Slider.Root
                      className="relative flex items-center select-none touch-none w-full h-5 opacity-95"
                      value={[coInvestment]}
                      min={0}
                      max={100}
                      step={1}
                      aria-label={t('valueProposition.coInvestment', 'Co-investment')}
                      onValueChange={(vals: number[]) => setCoInvestment(vals[0] ?? 0)}
                    >
                      <Slider.Track className="bg-white/25 relative grow rounded-full h-2">
                        <Slider.Range className="absolute bg-white rounded-full h-full" />
                      </Slider.Track>
                      <Slider.Thumb
                        className="block w-5 h-5 bg-white rounded-full shadow ring-2 ring-blue-500/60 hover:ring-blue-500 transition flex items-center justify-center cursor-grab active:cursor-grabbing"
                        aria-roledescription="draggable thumb"
                        aria-description="Drag to adjust co-investment"
                      >
                        <GripVertical className="h-3 w-3 text-blue-600" aria-hidden="true" />
                      </Slider.Thumb>
                    </Slider.Root>
                  </div>

                  {/* Profit sharing (computed, read-only 0–100%) */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-white/90 flex items-center gap-2">
                        {t('valueProposition.profitSharing', 'Profit sharing')} (0–100%)
                        <Tooltip.Root>
                          <Tooltip.Trigger asChild>
                            <button
                              type="button"
                              aria-label="Correlation info"
                              className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-white/60 bg-white/10 text-white/90 hover:bg-white/20 transition"
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
                              {correlationInfo}
                              <Tooltip.Arrow className="fill-slate-900" />
                            </Tooltip.Content>
                          </Tooltip.Portal>
                        </Tooltip.Root>
                      </span>
                      <span className="tabular-nums">{profitSharing}%</span>
                    </div>

                    {/* Slider: read-only */}
                    <Slider.Root
                      className="relative flex items-center select-none touch-none w-full h-5 opacity-90"
                      value={[profitSharing]}
                      min={0}
                      max={100}
                      step={1}
                      disabled
                      aria-label={t('valueProposition.profitSharing', 'Profit sharing')}
                      aria-readonly="true"
                    >
                      <Slider.Track className="bg-white/20 relative grow rounded-full h-2">
                        <Slider.Range className="absolute bg-white/70 rounded-full h-full" />
                      </Slider.Track>
                      <Slider.Thumb className="block w-4 h-4 bg-white/80 rounded-full shadow cursor-not-allowed" />
                    </Slider.Root>
                  </div>

                  {/* CAPEX reduction (computed, read-only 0–100%) */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-white/90 flex items-center gap-2">
                        {t('valueProposition.capexReduction', 'CAPEX reduction')} (0–100%)
                        <Tooltip.Root>
                          <Tooltip.Trigger asChild>
                            <button
                              type="button"
                              aria-label="CAPEX reduction info"
                              className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-white/60 bg-white/10 text-white/90 hover:bg-white/20 transition"
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
                              {capexInfo}
                              <Tooltip.Arrow className="fill-slate-900" />
                            </Tooltip.Content>
                          </Tooltip.Portal>
                        </Tooltip.Root>
                      </span>
                      <span className="tabular-nums">{capexReduction}%</span>
                    </div>

                    {/* Slider: read-only */}
                    <Slider.Root
                      className="relative flex items-center select-none touch-none w-full h-5 opacity-90"
                      value={[capexReduction]}
                      min={0}
                      max={100}
                      step={1}
                      disabled
                      aria-label={t('valueProposition.capexReduction', 'CAPEX reduction')}
                      aria-readonly="true"
                    >
                      <Slider.Track className="bg-white/20 relative grow rounded-full h-2">
                        <Slider.Range className="absolute bg-white/70 rounded-full h-full" />
                      </Slider.Track>
                      <Slider.Thumb className="block w-4 h-4 bg-white/80 rounded-full shadow cursor-not-allowed" />
                    </Slider.Root>
                  </div>
                </div>

                {/* Note */}
                <p className="text-xs text-white/70 mt-4 leading-relaxed">
                  {t('valueProposition.illustrativeNote')}
                </p>
              </div>
            </Tooltip.Provider>
            {/* End KPI Card */}
          </div>
        </div>
      </div>
    </section>
  )
}
