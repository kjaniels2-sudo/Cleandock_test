import { Button } from './ui/button'
import { Anchor, Users, Building, Zap, Handshake, Globe } from 'lucide-react'
import Logo from './Logo'
import { useTranslation } from 'react-i18next'

/**
 * Header component with navigation for ShorePower B2B solutions
 * @param activeSection - Currently active section
 * @param setActiveSection - Function to set active section
 */
interface HeaderProps {
  activeSection: string
  setActiveSection: (section: string) => void
}

export default function Header({ activeSection, setActiveSection }: HeaderProps) {
  const { t, i18n } = useTranslation()

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setActiveSection(sectionId)
    }
  }

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng)
    localStorage.setItem('language', lng)
  }

  const navItems = [
    { id: 'home', label: t('header.home'), icon: <Anchor size={16} /> },
    { id: 'value', label: t('header.valueProposition'), icon: <Zap size={16} /> },
    { id: 'solution', label: t('header.solution'), icon: <Building size={16} /> },
    { id: 'stakeholders', label: t('header.stakeholders'), icon: <Users size={16} /> },
    { id: 'partnership', label: t('header.partnership'), icon: <Handshake size={16} /> },
    { id: 'contact', label: t('header.contact'), icon: <Users size={16} /> }
  ]

  const guideNavItems = [
    { id: 'netlify-guide', label: 'Deployment Guide', icon: <Globe size={16} />, external: true }
  ]

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-slate-200">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Logo />
          
          <nav className="hidden lg:flex space-x-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-200 ${
                  activeSection === item.id
                    ? 'bg-blue-50 text-blue-700 font-medium'
                    : 'text-slate-600 hover:text-blue-600 hover:bg-slate-50'
                }`}
              >
                {item.icon}
                <span className="text-sm">{item.label}</span>
              </button>
            ))}
            {guideNavItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-200 text-slate-600 hover:text-blue-600 hover:bg-slate-50"
              >
                {item.icon}
                <span className="text-sm">{item.label}</span>
              </a>
            ))}
          </nav>
          
          <div className="flex items-center space-x-4">
            <div className="relative group">
              <Button 
                variant="outline"
                className="bg-transparent border-blue-600 text-blue-600 hover:bg-blue-50 flex items-center space-x-2"
              >
                <Globe size={16} />
                <span>{i18n.language === 'zh' ? '中文' : 'English'}</span>
              </Button>
              <div className="absolute right-0 mt-2 w-32 bg-white rounded-lg shadow-lg border border-slate-200 z-50 hidden group-hover:block">
                <button
                  onClick={() => changeLanguage('en')}
                  className={`w-full text-left px-4 py-2 hover:bg-slate-50 ${i18n.language === 'en' ? 'bg-blue-50 text-blue-600' : ''}`}
                >
                  English
                </button>
                <button
                  onClick={() => changeLanguage('zh')}
                  className={`w-full text-left px-4 py-2 hover:bg-slate-50 ${i18n.language === 'zh' ? 'bg-blue-50 text-blue-600' : ''}`}
                >
                  中文
                </button>
              </div>
            </div>
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700"
            >
              {t('common.partnerWithUs')}
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
