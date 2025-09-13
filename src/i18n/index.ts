/**
 * i18n configuration for CleanDock Power Solutions
 * Supports English and Mandarin Chinese
 */
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

// Import translation files
import en from './locales/en.json'
import zh from './locales/zh.json'

// Initialize i18n
i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: en
      },
      zh: {
        translation: zh
      }
    },
    lng: 'en', // Default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false // React already escapes by default
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage']
    }
  })

export default i18n