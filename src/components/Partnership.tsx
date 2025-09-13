import { Handshake, FileText, Users, Calendar, CheckCircle, Star } from 'lucide-react'
import { useTranslation } from 'react-i18next'

/**
 * Partnership section detailing the collaborative approach
 */
export default function Partnership() {
  const { t } = useTranslation()

  const partnershipSteps = [
    {
      icon: <FileText className="text-blue-600" size={24} />,
      title: t('partnership.initialConsultation'),
      description: t('partnership.initialConsultationDesc')
    },
    {
      icon: <Users className="text-teal-600" size={24} />,
      title: t('partnership.stakeholderAlignment'),
      description: t('partnership.stakeholderAlignmentDesc')
    },
    {
      icon: <FileText className="text-blue-600" size={24} />,
      title: t('partnership.agreementFinalization'),
      description: t('partnership.agreementFinalizationDesc')
    },
    {
      icon: <Calendar className="text-teal-600" size={24} />,
      title: t('partnership.implementationTimeline'),
      description: t('partnership.implementationTimelineDesc')
    },
    {
      icon: <CheckCircle className="text-blue-600" size={24} />,
      title: t('partnership.commissioning'),
      description: t('partnership.commissioningDesc')
    },
    {
      icon: <Star className="text-teal-600" size={24} />,
      title: t('partnership.ongoingPartnership'),
      description: t('partnership.ongoingPartnershipDesc')
    }
  ]

  const partnershipBenefits = [
    {
      title: t('partnership.sharedSuccess'),
      description: t('partnership.sharedSuccessDesc')
    },
    {
      title: t('partnership.publicPrivate'),
      description: t('partnership.publicPrivateDesc')
    },
    {
      title: t('partnership.technologyNeutrality'),
      description: t('partnership.technologyNeutralityDesc')
    },
    {
      title: t('partnership.localDevelopment'),
      description: t('partnership.localDevelopmentDesc')
    }
  ]

  return (
    <section id="partnership" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 mb-4">
            <div className="w-12 h-1 bg-gradient-to-r from-blue-600 to-teal-600"></div>
            <span className="text-blue-600 font-medium">PARTNERSHIP APPROACH</span>
            <div className="w-12 h-1 bg-gradient-to-r from-blue-600 to-teal-600"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            {t('partnership.title')}
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            {t('partnership.description')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-teal-600 rounded-lg flex items-center justify-center">
                <Handshake className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-slate-800">{t('partnership.partnershipProcess')}</h3>
            </div>
            
            <div className="space-y-6">
              {partnershipSteps.map((step, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 mt-1">{step.icon}</div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-1">{step.title}</h4>
                    <p className="text-slate-600 text-sm">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8 border border-slate-200">
            <h3 className="text-2xl font-bold text-slate-800 mb-6">{t('partnership.partnershipBenefits')}</h3>
            <div className="space-y-6">
              {partnershipBenefits.map((benefit, index) => (
                <div key={index} className="bg-white p-6 rounded-lg border border-slate-200">
                  <h4 className="font-semibold text-slate-800 mb-2">{benefit.title}</h4>
                  <p className="text-slate-600 text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-blue-600 text-white p-6 rounded-lg">
              <h4 className="font-semibold mb-3">{t('partnership.partnershipCommitment')}</h4>
              <ul className="space-y-2 text-blue-100 text-sm">
                <li className="flex items-center">
                  <CheckCircle size={16} className="mr-2" />
                  {t('partnership.partnershipTerms')}
                </li>
                <li className="flex items-center">
                  <CheckCircle size={16} className="mr-2" />
                  {t('partnership.transparentMetrics')}
                </li>
                <li className="flex items-center">
                  <CheckCircle size={16} className="mr-2" />
                  {t('partnership.regularConsultations')}
                </li>
                <li className="flex items-center">
                  <CheckCircle size={16} className="mr-2" />
                  {t('partnership.continuousImprovement')}
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-slate-50 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
              {t('partnership.successFactors')}
            </h3>
            <p className="text-slate-600 max-w-2xl mx-auto">
              {t('partnership.successFactorsDesc')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-blue-600" size={32} />
              </div>
              <h4 className="font-semibold text-slate-800 mb-2">{t('partnership.stakeholderAlignmentSuccess')}</h4>
              <p className="text-slate-600 text-sm">
                {t('partnership.stakeholderAlignmentSuccessDesc')}
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="text-teal-600" size={32} />
              </div>
              <h4 className="font-semibold text-slate-800 mb-2">{t('partnership.clearFramework')}</h4>
              <p className="text-slate-600 text-sm">
                {t('partnership.clearFrameworkDesc')}
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="text-blue-600" size={32} />
              </div>
              <h4 className="font-semibold text-slate-800 mb-2">{t('partnership.sharedVision')}</h4>
              <p className="text-slate-600 text-sm">
                {t('partnership.sharedVisionDesc')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
