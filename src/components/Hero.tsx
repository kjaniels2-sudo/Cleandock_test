import { Button } from './ui/button'
import { ArrowDown, Ship, Zap, Building, Users } from 'lucide-react'
import { useTranslation } from 'react-i18next'

/**
 * Hero section component for ShorePower B2B solutions
 * @param setActiveSection - Function to set active section
 */
interface HeroProps {
  setActiveSection: (section: string) => void
}

export default function Hero({ setActiveSection }: HeroProps) {
  const { t } = useTranslation()

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setActiveSection(sectionId)
    }
  }

  return (
    <section id="home" className="py-20 md:py-32 bg-gradient-to-br from-slate-50 via-blue-50 to-teal-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                {t('hero.sustainable')}
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              {t('hero.title')} 
              <br />
              <span className="text-teal-600">{t('hero.subtitle')}</span>
            </h1>
            
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              {t('hero.description')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button 
                onClick={() => scrollToSection('contact')}
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 flex items-center gap-2 text-lg px-8 py-4"
              >
                <Building size={20} />
                {t('common.explorePartnership')}
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="bg-transparent border-blue-600 text-blue-600 hover:bg-blue-50 text-lg px-8 py-4"
                onClick={() => scrollToSection('solution')}
              >
                <Zap size={20} />
                {t('common.howItWorks')}
              </Button>
            </div>
            
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-1">0€</div>
                <div className="text-sm text-slate-600">{t('hero.capexRequired')}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-teal-600 mb-1">100%</div>
                <div className="text-sm text-slate-600">{t('hero.operationalSupport')}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-1">24/7</div>
                <div className="text-sm text-slate-600">{t('hero.monitoring')}</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-200">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-teal-100 rounded-full flex items-center justify-center">
                  <Ship className="text-blue-600" size={40} />
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                    <Building className="text-blue-600" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800">{t('hero.forHarbours')}</h3>
                    <p className="text-sm text-slate-600">{t('hero.forHarboursDesc')}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-teal-50 rounded-lg flex items-center justify-center">
                    <Zap className="text-teal-600" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800">{t('hero.forEnergy')}</h3>
                    <p className="text-sm text-slate-600">{t('hero.forEnergyDesc')}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                    <Users className="text-blue-600" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800">{t('hero.forAuthorities')}</h3>
                    <p className="text-sm text-slate-600">{t('hero.forAuthoritiesDesc')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center mt-16">
          <button 
            onClick={() => scrollToSection('value')}
            className="animate-bounce text-blue-600 flex flex-col items-center"
            aria-label="Scroll down"
          >
            <ArrowDown size={32} />
            <span className="text-sm mt-2">{t('common.learnMore')}</span>
          </button>
        </div>
      </div>
    </section>
  )
}
