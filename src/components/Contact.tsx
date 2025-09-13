import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { Label } from './ui/label'
import { Mail, MapPin, Send, Building, Globe, Handshake } from 'lucide-react'
import { useTranslation } from 'react-i18next'

/**
 * Contact.tsx
 * Purpose:
 * - Renders the Contact section with company contact info and a partnership inquiry form.
 * - Validates form input using zod + react-hook-form.
 * - Production: Submits to Netlify Forms so submissions can trigger email notifications to post@CleanDockPS.com (configured in Netlify).
 * - Development/Preview: Simulates success so stakeholders can test the UX without a Netlify backend.
 * - Shows a success or error message based on submission result.
 * - Includes a "Founders & Strategic Advisors" section highlighting leadership and Asia-focused advisory experience.
 */

/** Contact form schema validation */
const contactSchema = z.object({
  /** Full name, minimum 2 chars */
  name: z.string().min(2, { message: 'Name must be at least 2 characters' }),
  /** Organization name required */
  organization: z.string().min(2, { message: 'Organization name is required' }),
  /** Valid email format required */
  email: z.string().email({ message: 'Please enter a valid email address' }),
  /** Simple min length check for phone as placeholder validation */
  phone: z.string().min(10, { message: 'Please enter a valid phone number' }),
  /** Stakeholder type selection required */
  stakeholderType: z.string().min(1, { message: 'Please select your stakeholder type' }),
  /** Subject with minimum length */
  subject: z.string().min(5, { message: 'Subject must be at least 5 characters' }),
  /** Message with minimum length to encourage useful detail */
  message: z.string().min(10, { message: 'Message must be at least 10 characters' }),
})

/** Contact form type derived from schema */
type ContactForm = z.infer<typeof contactSchema>

/**
 * URL-encode a key/value object to x-www-form-urlencoded format for Netlify Forms.
 * Netlify requires a payload that includes "form-name".
 */
function encode(data: Record<string, string>) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

/**
 * Contact section component with contact form and information.
 */
export default function Contact() {
  // i18n hook kept for future localization
  const { t } = useTranslation()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
  })

  /**
   * Submit handler
   * - Production: Netlify Forms via POST to "/".
   * - Development/Preview: Simulates success to avoid false errors when not hosted on Netlify.
   */
  const onSubmit = async (data: ContactForm) => {
    setIsSubmitting(true)
    setSubmitError(null)

    // Detect non-production to provide a smooth local/preview experience
    const isDevLike = typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.MODE !== 'production'

    // Demo success locally/preview to avoid failing POST in non-Netlify envs
    if (isDevLike) {
      await new Promise((r) => setTimeout(r, 600)) // simulate a short network delay
      setIsSubmitting(false)
      setSubmitSuccess(true)
      reset()
      setTimeout(() => setSubmitSuccess(false), 5000)
      return
    }

    try {
      // Build payload for Netlify Forms (must include "form-name")
      const payload = encode({
        'form-name': 'partnership-contact',
        name: data.name,
        organization: data.organization,
        email: data.email,
        phone: data.phone,
        stakeholderType: data.stakeholderType,
        subject: data.subject,
        message: data.message,
      })

      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: payload,
      })

      if (!response.ok) {
        // In rare cases (e.g., opaque responses), you may not get a normal 2xx signal.
        // We still guard strictly in production so real errors are surfaced.
        throw new Error(`Submission failed with status ${response.status}`)
      }

      setIsSubmitting(false)
      setSubmitSuccess(true)
      reset()
      setTimeout(() => setSubmitSuccess(false), 5000)
    } catch (err: any) {
      setIsSubmitting(false)
      // Keep the message concise; detailed troubleshooting is covered in the Netlify Guide page.
      setSubmitError('We could not submit the form right now. Please try again or email us at post@CleanDockPS.com.')
      // Optional: console.warn('Form submission error:', err)
    }
  }

  /** Stakeholder types for the selector */
  const stakeholderTypes = [
    { value: 'harbour', label: 'Harbour Authority' },
    { value: 'energy', label: 'Energy Company' },
    { value: 'government', label: 'Local Authority/Government' },
    { value: 'terminal', label: 'Terminal Operator' },
    { value: 'technology', label: 'Technology Provider' },
    { value: 'investor', label: 'Investor' },
    { value: 'other', label: 'Other' },
  ]

  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 mb-4">
            <div className="w-12 h-1 bg-gradient-to-r from-blue-600 to-teal-600"></div>
            <span className="text-blue-600 font-medium">PARTNER WITH US</span>
            <div className="w-12 h-1 bg-gradient-to-r from-blue-600 to-teal-600"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Start Your Shore Power Journey
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Ready to eliminate CAPEX and operational burdens? Contact our team to explore
            how our BOO model can work for your harbour.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-12">
          {/* Contact details */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-semibold text-slate-800 mb-6">Get in Touch</h3>

            <div className="space-y-6 mb-8">
              {/* Email */}
              <div className="flex items-start">
                <Mail className="text-blue-600 mt-1 mr-4" size={20} />
                <div>
                  <h4 className="font-medium text-slate-800">Email</h4>
                  <p className="text-slate-600">post@CleanDockPS.com</p>
                </div>
              </div>

              {/* Headquarters */}
              <div className="flex items-start">
                <MapPin className="text-blue-600 mt-1 mr-4" size={20} />
                <div>
                  <h4 className="font-medium text-slate-800">Headquarters</h4>
                  <p className="text-slate-600">Oslo, Norway</p>
                </div>
              </div>
            </div>

            {/* Why Contact Us */}
            <div className="mt-8 bg-gradient-to-r from-blue-600 to-teal-600 text-white p-6 rounded-lg">
              <h4 className="font-semibold mb-3">Why Contact Us?</h4>
              <ul className="space-y-2 text-blue-100 text-sm">
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Free feasibility assessment</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Customized BOO model proposal</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Stakeholder consultation</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-slate-200">
              <h3 className="text-2xl font-semibold text-slate-800 mb-6">Partnership Inquiry</h3>

              {submitSuccess && (
                <div className="mb-6 p-4 bg-green-50 text-green-700 rounded-lg">
                  Thank you for your inquiry! Our partnership team will contact you within 2 business days.
                </div>
              )}

              {submitError && (
                <div className="mb-6 p-4 bg-red-50 text-red-700 rounded-lg">
                  {submitError}
                </div>
              )}

              {/* Netlify Forms: name + data-netlify + honeypot */}
              <form
                name="partnership-contact"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-6"
              >
                {/* Hidden input required by Netlify */}
                <input type="hidden" name="form-name" value="partnership-contact" />
                {/* Honeypot field for bots (kept hidden) */}
                <input type="hidden" name="bot-field" />

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      {...register('name')}
                      className="mt-1"
                      placeholder="Your full name"
                      name="name"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="organization">Organization *</Label>
                    <Input
                      id="organization"
                      {...register('organization')}
                      className="mt-1"
                      placeholder="Company/organization name"
                      name="organization"
                    />
                    {errors.organization && (
                      <p className="mt-1 text-sm text-red-600">{errors.organization.message}</p>
                    )}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      {...register('email')}
                      className="mt-1"
                      placeholder="your.email@example.com"
                      name="email"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      {...register('phone')}
                      className="mt-1"
                      placeholder="+1 (555) 123-4567"
                      name="phone"
                    />
                    {errors.phone && (
                      <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                    )}
                  </div>
                </div>

                <div>
                  <Label htmlFor="stakeholderType">Stakeholder Type *</Label>
                  <select
                    id="stakeholderType"
                    {...register('stakeholderType')}
                    name="stakeholderType"
                    className="mt-1 w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select your stakeholder type</option>
                    {stakeholderTypes.map((type) => (
                      <option key={type.value} value={type.value}>
                        {type.label}
                      </option>
                    ))}
                  </select>
                  {errors.stakeholderType && (
                    <p className="mt-1 text-sm text-red-600">{errors.stakeholderType.message}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="subject">Subject *</Label>
                  <Input
                    id="subject"
                    {...register('subject')}
                    className="mt-1"
                    placeholder="How can we help you?"
                    name="subject"
                  />
                  {errors.subject && (
                    <p className="mt-1 text-sm text-red-600">{errors.subject.message}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    {...register('message')}
                    className="mt-1"
                    rows={4}
                    placeholder="Tell us about your shore power requirements and timeline..."
                    name="message"
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                  )}
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 flex items-center justify-center gap-2 py-3"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Send Partnership Inquiry
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>

        {/* Founders & Advisors */}
        <div className="mt-16">
          <h3 className="text-2xl md:text-3xl font-semibold text-slate-800 mb-4 text-center">
            {t('contact.foundersTitle')}
          </h3>
          <p className="text-slate-600 text-center max-w-3xl mx-auto mb-8">
            CleanDock's founders have held senior executive roles across telecom, energy, maritime, and infrastructure. They bring many years of Asia experience to strengthen market access, partnerships, and execution.
          </p>

          {/* Founders list */}
          <div className="max-w-3xl mx-auto mb-10 grid sm:grid-cols-2 gap-4">
            <div className="rounded-lg border border-slate-200 bg-white p-4">
              <h4 className="font-semibold text-slate-800">Jan Berner</h4>
              <p className="text-slate-600 text-sm">Founder & Chairman</p>
              <a href="mailto:jan.berner@CleanDockPS.com" className="text-blue-600 hover:underline inline-flex items-center gap-2 mt-2">
                <Mail size={16} />
                Jan.Berner@CleanDockPS.com
              </a>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-4">
              <h4 className="font-semibold text-slate-800">Kjell Arne Nielsen</h4>
              <p className="text-slate-600 text-sm">Founder & CEO</p>
              <a href="mailto:Kjell.Arne.Nielsen@CleanDockPS.com" className="text-blue-600 hover:underline inline-flex items-center gap-2 mt-2">
                <Mail size={16} />
                Kjell.Arne.Nielsen@CleanDockPS.com
              </a>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="text-blue-600" size={24} />
              </div>
              <h4 className="font-semibold text-slate-800 mb-1">{t('contact.executiveLeadershipTitle')}</h4>
              <p className="text-slate-600 text-sm">
                {t('contact.executiveLeadershipCaption')}
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="text-teal-600" size={24} />
              </div>
              <h4 className="font-semibold text-slate-800 mb-1">{t('contact.asiaExpertiseTitle')}</h4>
              <p className="text-slate-600 text-sm">
                {t('contact.asiaExpertiseCaption')}
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Handshake className="text-blue-600" size={24} />
              </div>
              <h4 className="font-semibold text-slate-800 mb-1">{t('contact.partnershipNetworkTitle')}</h4>
              <p className="text-slate-600 text-sm">
                {t('contact.partnershipNetworkCaption')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
