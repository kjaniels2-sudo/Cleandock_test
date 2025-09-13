import { Plug, Battery, Cog, Monitor, Ship, Zap } from 'lucide-react'
import { useTranslation } from 'react-i18next'

/**
 * Solution section detailing the ShorePower implementation
 */
export default function Solution() {
  const { t } = useTranslation()

  const solutionSteps = [
    {
      step: "01",
      title: t('solution.assessment'),
      description: t('solution.assessmentDesc'),
      icon: <Monitor className="text-blue-600" size={28} />
    },
    {
      step: "02", 
      title: t('solution.infrastructure'),
      description: t('solution.infrastructureDesc'),
      icon: <Cog className="text-teal-600" size={28} />
    },
    {
      step: "03",
      title: t('solution.gridIntegration'),
      description: t('solution.gridIntegrationDesc'),
      icon: <Zap className="text-blue-600" size={28} />
    },
    {
      step: "04",
      title: t('solution.operations'),
      description: t('solution.operationsDesc'),
      icon: <Battery className="text-teal-600" size={28} />
    }
  ]

  const technicalFeatures = [
    {
      icon: <Plug className="text-blue-600" size={24} />,
      title: t('solution.highVoltage'),
      description: t('solution.highVoltageDesc')
    },
    {
      icon: <Ship className="text-teal-600" size={24} />,
      title: t('solution.vesselCompatibility'),
      description: t('solution.vesselCompatibilityDesc')
    },
    {
      icon: <Monitor className="text-blue-600" size={24} />,
      title: t('solution.smartMonitoring'),
      description: t('solution.smartMonitoringDesc')
    },
    {
      icon: <Battery className="text-teal-600" size={24} />,
      title: t('solution.energyStorage'),
      description: t('solution.energyStorageDesc')
    }
  ]

  return (
    <section id="solution" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 mb-4">
            <div className="w-12 h-1 bg-gradient-to-r from-blue-600 to-teal-600"></div>
            <span className="text-blue-600 font-medium">OUR SOLUTION</span>
            <div className="w-12 h-1 bg-gradient-to-r from-blue-600 to-teal-600"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            {t('solution.title')}
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            {t('solution.description')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold text-slate-800 mb-8">{t('solution.implementationProcess')}</h3>
            <div className="space-y-8">
              {solutionSteps.map((step, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-600 to-teal-600 rounded-lg flex items-center justify-center text-white font-bold">
                    {step.step}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      {step.icon}
                      <h4 className="text-lg font-semibold text-slate-800">{step.title}</h4>
                    </div>
                    <p className="text-slate-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 border border-slate-200">
            <h3 className="text-2xl font-bold text-slate-800 mb-6">{t('solution.technicalSpecs')}</h3>
            <div className="space-y-6">
              {technicalFeatures.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-slate-50 rounded-lg flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-1">{feature.title}</h4>
                    <p className="text-slate-600 text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200">
              <h4 className="font-semibold text-slate-800 mb-4">{t('solution.powerCapacity')}</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-blue-600">8-16 MVA</div>
                  <div className="text-sm text-slate-600">{t('solution.standardCruise')}</div>
                </div>
                <div className="bg-teal-50 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-teal-600">Standardized modules</div>
                  <div className="text-sm text-slate-600">{t('solution.largeVessels')}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-teal-600 rounded-2xl p-8 md:p-12 text-white">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-blue-100">{t('solution.renewableCompatible')}</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">99.9%</div>
              <div className="text-blue-100">{t('solution.systemUptime')}</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-blue-100">{t('solution.technicalSupport')}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
