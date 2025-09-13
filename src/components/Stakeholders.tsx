import { Building, Zap, Users, Settings, TrendingUp, Shield } from 'lucide-react'
import { useTranslation } from 'react-i18next'

/**
 * Stakeholders.tsx
 * Renders the Stakeholders section addressing key audience groups with their tailored benefits.
 * Uses i18n to fetch localized content and ensures benefits are arrays for rendering.
 */

/**
 * Stakeholders section addressing each key audience group
 */
export default function Stakeholders() {
  const { t } = useTranslation()

  /**
   * Safely get an array of benefits from i18n.
   * i18n may return a string or string[], we normalize to string[] for mapping.
   */
  const getBenefits = (key: string): string[] => {
    const value = t(key, { returnObjects: true }) as unknown
    return Array.isArray(value) ? (value as string[]) : []
  }

  /**
   * Stakeholder cards configuration with i18n-driven text and icons
   */
  const stakeholderGroups = [
    {
      title: t('stakeholders.harbourAuthorities.title'),
      icon: <Building className="text-blue-600" size={32} />,
      description: t('stakeholders.harbourAuthorities.description'),
      benefits: getBenefits('stakeholders.harbourAuthorities.benefits'),
      color: 'from-blue-50 to-blue-100',
      accent: 'text-blue-600',
    },
    {
      title: t('stakeholders.energyCompanies.title'),
      icon: <Zap className="text-teal-600" size={32} />,
      description: t('stakeholders.energyCompanies.description'),
      benefits: getBenefits('stakeholders.energyCompanies.benefits'),
      color: 'from-teal-50 to-teal-100',
      accent: 'text-teal-600',
    },
    {
      title: t('stakeholders.localAuthorities.title'),
      icon: <Users className="text-blue-600" size={32} />,
      description: t('stakeholders.localAuthorities.description'),
      benefits: getBenefits('stakeholders.localAuthorities.benefits'),
      color: 'from-blue-50 to-blue-100',
      accent: 'text-blue-600',
    },
    {
      title: t('stakeholders.terminalOperators.title'),
      icon: <Settings className="text-teal-600" size={32} />,
      description: t('stakeholders.terminalOperators.description'),
      benefits: getBenefits('stakeholders.terminalOperators.benefits'),
      color: 'from-teal-50 to-teal-100',
      accent: 'text-teal-600',
    },
    {
      title: t('stakeholders.technologyProviders.title'),
      icon: <TrendingUp className="text-blue-600" size={32} />,
      description: t('stakeholders.technologyProviders.description'),
      benefits: getBenefits('stakeholders.technologyProviders.benefits'),
      color: 'from-blue-50 to-blue-100',
      accent: 'text-blue-600',
    },
    {
      title: t('stakeholders.investors.title'),
      icon: <Shield className="text-teal-600" size={32} />,
      description: t('stakeholders.investors.description'),
      benefits: getBenefits('stakeholders.investors.benefits'),
      color: 'from-teal-50 to-teal-100',
      accent: 'text-teal-600',
    },
  ]

  return (
    <section id="stakeholders" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 mb-4">
            <div className="w-12 h-1 bg-gradient-to-r from-blue-600 to-teal-600"></div>
            <span className="text-blue-600 font-medium">STAKEHOLDER FOCUS</span>
            <div className="w-12 h-1 bg-gradient-to-r from-blue-600 to-teal-600"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            {t('stakeholders.title')}
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            {t('stakeholders.description')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stakeholderGroups.map((stakeholder, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${stakeholder.color} rounded-xl p-6 border border-slate-200 hover:shadow-lg transition-all duration-300`}
            >
              <div className="mb-4">{stakeholder.icon}</div>
              <h3 className={`text-xl font-bold ${stakeholder.accent} mb-3`}>
                {stakeholder.title}
              </h3>
              <p className="text-slate-600 mb-4 leading-relaxed">
                {stakeholder.description}
              </p>
              <ul className="space-y-2">
                {stakeholder.benefits.length > 0 ? (
                  stakeholder.benefits.map((benefit: string, benefitIndex: number) => (
                    <li key={benefitIndex} className="flex items-start">
                      <div
                        className={`w-1.5 h-1.5 ${stakeholder.accent.replace('text', 'bg')} rounded-full mt-2 mr-3 flex-shrink-0`}
                      ></div>
                      <span className="text-slate-700 text-sm">{benefit}</span>
                    </li>
                  ))
                ) : (
                  <li className="text-slate-700 text-sm">Benefits loading...</li>
                )}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-slate-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center">
            {t('stakeholders.partnershipEcosystem')}
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-slate-800 mb-4">
                {t('stakeholders.publicSector')}
              </h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Building className="text-blue-600" size={16} />
                  </div>
                  <span className="text-slate-700">
                    {t('stakeholders.portAuthorities')}
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Users className="text-blue-600" size={16} />
                  </div>
                  <span className="text-slate-700">
                    {t('stakeholders.municipalGovernments')}
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Shield className="text-blue-600" size={16} />
                  </div>
                  <span className="text-slate-700">
                    {t('stakeholders.environmentalAgencies')}
                  </span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-slate-800 mb-4">
                {t('stakeholders.privateSector')}
              </h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-teal-100 rounded-lg flex items-center justify-center">
                    <Zap className="text-teal-600" size={16} />
                  </div>
                  <span className="text-slate-700">
                    {t('stakeholders.energyUtilities')}
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-teal-100 rounded-lg flex items-center justify-center">
                    <Settings className="text-teal-600" size={16} />
                  </div>
                  <span className="text-slate-700">
                    {t('stakeholders.technologyProvidersList')}
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-teal-100 rounded-lg flex items-center justify-center">
                    <TrendingUp className="text-teal-600" size={16} />
                  </div>
                  <span className="text-slate-700">
                    {t('stakeholders.investmentGroups')}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
