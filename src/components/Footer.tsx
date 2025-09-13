import { Facebook, Twitter, Linkedin, Mail, Anchor, Zap, Building, Users } from 'lucide-react'
import Logo from './Logo'
import { useTranslation } from 'react-i18next'

/**
 * Footer component with company information and links
 */
export default function Footer() {
  const { t } = useTranslation()
  const currentYear = new Date().getFullYear()
  
  const footerLinks = [
    {
      title: t('footer.solutions'),
      links: [
        { label: t('footer.shorePowerSystems'), href: "#" },
        { label: t('footer.booModel'), href: "#" },
        { label: t('footer.technicalSpecifications'), href: "#" },
        { label: t('footer.caseStudies'), href: "#" }
      ]
    },
    {
      title: t('footer.stakeholders'),
      links: [
        { label: t('footer.harbourAuthorities'), href: "#" },
        { label: t('footer.energyCompanies'), href: "#" },
        { label: t('footer.localGovernments'), href: "#" },
        { label: t('footer.investors'), href: "#" }
      ]
    },
    {
      title: t('footer.company'),
      links: [
        { label: t('footer.aboutUs'), href: "#" },
        { label: t('footer.ourTeam'), href: "#" },
        { label: t('footer.partners'), href: "#" },
        { label: t('footer.careers'), href: "#" }
      ]
    },
    {
      title: t('footer.resources'),
      links: [
        { label: t('footer.blog'), href: "#" },
        { label: t('footer.whitePapers'), href: "#" },
        { label: t('footer.regulations'), href: "#" },
        { label: t('footer.faq'), href: "#" }
      ]
    },
    {
      title: "Developer Resources",
      links: [
        { label: "Deployment Guide", href: "#netlify-guide" },
        { label: "Getting Started", href: "#" },
        { label: "API Documentation", href: "#" },
        { label: "Best Practices", href: "#" }
      ]
    }
  ]

  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-teal-600 rounded-lg flex items-center justify-center">
                <Zap className="text-white" size={24} />
              </div>
              <div>
                <span className="text-xl font-bold">CleanDock Power</span>
                <span className="block text-xs text-blue-400 font-medium">Solutions</span>
              </div>
            </div>
            <p className="text-slate-400 mb-6 max-w-md">
              {t('footer.description')}
            </p>
            <div className="flex space-x-4 mb-6">
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Mail size={20} />
              </a>
            </div>
            <div className="bg-slate-800 rounded-lg p-4">
              <h4 className="font-semibold text-blue-400 mb-2">EU Compliance</h4>
              <p className="text-sm text-slate-400">
                Supporting Alternative Fuels Infrastructure Regulation (AFIR) and Fit for 55 initiatives
              </p>
            </div>
          </div>
          
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href={link.href} className="text-slate-400 hover:text-white transition-colors text-sm">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-slate-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm mb-4 md:mb-0">
              © {currentYear} CleanDock Power Solutions. All rights reserved.
            </p>
            <div className="flex flex-wrap items-center space-x-6 text-sm text-slate-400">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
              <a href="#" className="hover:text-white transition-colors">GDPR</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
