import { useState } from 'react'
import { Button } from '../components/ui/button'
import {
  Github,
  Globe,
  Settings,
  Rocket,
  CheckCircle,
  AlertCircle,
  ArrowRight,
  FileText,
  Upload,
  Link,
  HelpCircle,
  Copy,
  ExternalLink,
  Mail
} from 'lucide-react'

/**
 * NetlifyGuide.tsx
 * Purpose:
 * - En trinnvis, prosjektspesifikk veiledning for å deploye denne React SPAen til Netlify.
 * - Inkluderer konkrete steg for Netlify Forms og e‑postvarsling til post@CleanDockPS.com.
 *
 * Oppdatering:
 * - Lagt til "Kjappstart (TL;DR)" kort for rask igangsetting med kopierbare kommandoer.
 * - Beholder detaljsteg, FAQ og feilsøking lenger ned på siden.
 */

/**
 * NetlifyGuide komponent
 * Viser steg‑for‑steg Netlify‑deploy med skjemaoppsett og varsler.
 */
export default function NetlifyGuide() {
  const [activeStep, setActiveStep] = useState(0)
  const [copiedText, setCopiedText] = useState('')

  /** Liste over hovedsteg i prosessen (detaljert) */
  const steps = [
    {
      title: 'Forbered prosjektet',
      icon: <FileText size={24} />,
      content: 'Sikre at prosjektet bygger lokalt og at avhengigheter er oppdatert.'
    },
    {
      title: 'Opprett GitHub-konto og repo',
      icon: <Github size={24} />,
      content: 'Kode lagres i GitHub og kobles til Netlify for auto-deploy.'
    },
    {
      title: 'Last opp filer til GitHub',
      icon: <Upload size={24} />,
      content: 'Push prosjektet til GitHub-repoet ditt.'
    },
    {
      title: 'Opprett Netlify-konto',
      icon: <Globe size={24} />,
      content: 'Registrer deg hos Netlify. Gratis plan holder for dette.'
    },
    {
      title: 'Koble Netlify til GitHub',
      icon: <Link size={24} />,
      content: 'Velg “New site from Git” og pek til repoet ditt.'
    },
    {
      title: 'Konfigurer build-innstillinger',
      icon: <Settings size={24} />,
      content: 'Sett riktig build-kommando og publish-katalog.'
    },
    {
      title: 'Konfigurer Netlify Forms i skjemaet',
      icon: <FileText size={24} />,
      content: 'Sjekk at kontakt-skjemaet er riktig merket for Netlify Forms.'
    },
    {
      title: 'SPA-deteksjon: legg til skjult form i index.html',
      icon: <AlertCircle size={24} />,
      content: 'Netlify må se et statisk form-element i builden for å registrere skjemaet.'
    },
    {
      title: 'Deploy nettstedet',
      icon: <Rocket size={24} />,
      content: 'Start første deploy og vent til den er ferdig.'
    },
    {
      title: 'Aktiver e‑postvarsling i Netlify',
      icon: <Mail size={24} />,
      content: 'Send innsendinger til post@CleanDockPS.com via Notifications.'
    },
    {
      title: 'Test og verifiser innsendinger',
      icon: <CheckCircle size={24} />,
      content: 'Test skjema, se Netlify → Forms, verifiser e‑post, feilsøk ved behov.'
    }
  ]

  /** Ofte stilte spørsmål som hjelper ved vanlig oppsett */
  const faqs = [
    {
      question: 'Er Netlify gratis?',
      answer:
        'Ja. Gratisplanen inkluderer hosting, SSL, custom domains og automatiske deploys. Du betaler først ved behov for mer båndbredde eller teamfunksjoner.'
    },
    {
      question: 'Hva om build feiler?',
      answer:
        'Sjekk build-loggen i Netlify. Vanlig årsak: manglende avhengigheter, feil build-kommando eller syntaksfeil.'
    },
    {
      question: 'Må jeg kunne kode for å deploye?',
      answer:
        'Grunnleggende prosjektforståelse hjelper, men selve deploy-prosessen er i stor grad stegvis oppsett i UI.'
    },
    {
      question: 'Hvor lang tid tar en deploy?',
      answer:
        'Oftest 1–3 minutter. Første deploy kan ta litt lenger tid.'
    },
    {
      question: 'Kan jeg oppdatere nettstedet etter publisering?',
      answer:
        'Ja. Push til GitHub → Netlify redeployer automatisk.'
    }
  ]

  /**
   * Kopierer tekst til utklippstavlen og viser en kort tilbakemelding
   * @param text Teksten som skal kopieres
   */
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopiedText(text)
    setTimeout(() => setCopiedText(''), 2000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-teal-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Deploy til Netlify + Skjema med e‑postvarsling
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Trinn‑for‑trinn for dette prosjektet: build‑oppsett, Netlify Forms og e‑post til post@CleanDockPS.com.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Introduction */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12 border border-blue-100">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
              <HelpCircle className="text-blue-600" size={24} />
            </div>
            <h2 className="text-2xl font-bold text-slate-800">Hva du setter opp</h2>
          </div>
          <ul className="text-slate-600 space-y-2">
            <li>• GitHub-repo koblet til Netlify for automatisk deploy</li>
            <li>• Build‑oppsett: <code>npm run build</code> → publish <code>dist</code></li>
            <li>• Netlify Forms for kontakt‑skjemaet <em>(“partnership-contact”)</em></li>
            <li>• E‑postvarsling til <strong>post@CleanDockPS.com</strong></li>
            <li>• Sikkerhet: honeypot‑felt for spam</li>
          </ul>
        </div>

        {/* Quickstart (TL;DR) */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12 border border-emerald-200">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
              <Rocket className="text-emerald-600" size={24} />
            </div>
            <h2 className="text-2xl font-bold text-slate-800">Kjappstart (TL;DR)</h2>
          </div>

          <ol className="list-decimal pl-5 text-slate-700 space-y-2">
            <li>GitHub → Opprett et repository (Public eller Private).</li>
            <li>Push koden (GitHub Desktop eller Git):</li>
          </ol>

          <div className="bg-slate-50 border border-slate-200 rounded-lg p-3 mt-2 mb-4 font-mono text-xs">
            git init<br />
            git add .<br />
            git commit -m "Initial commit"<br />
            git branch -M main<br />
            git remote add origin https://github.com/bruker/DITT-REPO.git<br />
            git push -u origin main
          </div>

          <ol start={3} className="list-decimal pl-5 text-slate-700 space-y-2">
            <li>Netlify → New site from Git → GitHub → velg repoet.</li>
            <li>
              Build/publish:
              <div className="grid sm:grid-cols-2 gap-3 mt-2">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Build command</label>
                  <div className="flex items-center space-x-2">
                    <code className="bg-slate-100 px-3 py-2 rounded flex-1">npm run build</code>
                    <button
                      onClick={() => copyToClipboard('npm run build')}
                      className="p-2 bg-blue-100 text-blue-600 rounded hover:bg-blue-200"
                    >
                      <Copy size={16} />
                    </button>
                  </div>
                  {copiedText === 'npm run build' && <span className="text-xs text-green-600">Kopiert!</span>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Publish directory</label>
                  <div className="flex items-center space-x-2">
                    <code className="bg-slate-100 px-3 py-2 rounded flex-1">dist</code>
                    <button
                      onClick={() => copyToClipboard('dist')}
                      className="p-2 bg-blue-100 text-blue-600 rounded hover:bg-blue-200"
                    >
                      <Copy size={16} />
                    </button>
                  </div>
                  {copiedText === 'dist' && <span className="text-xs text-green-600">Kopiert!</span>}
                </div>
              </div>
            </li>
            <li>
              SPA/Forms: Legg inn skjult fallback‑skjema i <code>index.html</code>:
              <pre className="bg-slate-100 p-3 rounded text-xs overflow-x-auto mt-2">{`<!-- Hidden fallback form so Netlify can register it at build time -->
<form name="partnership-contact" netlify netlify-honeypot="bot-field" hidden>
  <input type="text" name="name" />
  <input type="text" name="organization" />
  <input type="email" name="email" />
  <input type="text" name="phone" />
  <input type="text" name="stakeholderType" />
  <input type="text" name="subject" />
  <textarea name="message"></textarea>
</form>`}</pre>
              <p className="text-sm text-slate-600 mt-2">
                Detaljer i Steg 8 nedenfor.
              </p>
            </li>
            <li>
              Deploy → Netlify → Forms → <code>partnership-contact</code> → Notifications → Email →{' '}
              <strong>post@CleanDockPS.com</strong>. Test en innsending.
            </li>
          </ol>
        </div>

        {/* Progress Steps */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {steps.map((step, index) => (
              <button
                key={index}
                onClick={() => setActiveStep(index)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all ${
                  activeStep === index
                    ? 'bg-blue-600 text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-xs">
                  {index + 1}
                </div>
                <span className="text-sm font-medium hidden sm:inline">{step.title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Step-by-Step Instructions */}
        <div className="space-y-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden">
              <div className="bg-gradient-to-r from-blue-50 to-teal-50 p-6 border-b border-slate-200">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-sm">
                    <div className="text-blue-600">{step.icon}</div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-800">
                      Steg {index + 1}: {step.title}
                    </h3>
                    <p className="text-slate-600">{step.content}</p>
                  </div>
                </div>
              </div>

              <div className="p-6">
                {renderStepContent(index, copyToClipboard, copiedText)}
              </div>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="mt-16 bg-white rounded-xl shadow-lg p-8 border border-blue-100">
          <div className="flex items-center space-x-3 mb-8">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
              <HelpCircle className="text-blue-600" size={24} />
            </div>
            <h2 className="text-2xl font-bold text-slate-800">Ofte stilte spørsmål</h2>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="border-l-4 border-blue-200 pl-6">
                <h3 className="font-semibold text-slate-800 mb-2">{faq.question}</h3>
                <p className="text-slate-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Conclusion */}
        <div className="mt-12 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">🎉 Ferdig!</h2>
          <p className="text-blue-100 mb-6">
            Nettstedet ditt er klart for Netlify med skjema‑innsendinger og e‑postvarsler.
          </p>
          <Button className="bg-white text-blue-600 hover:bg-slate-100">
            Gå til Netlify Dashboard <ArrowRight size={16} className="ml-2" />
          </Button>
        </div>
      </div>
    </div>
  )
}

/**
 * Renders step-specific content for the deployment guide.
 * @param stepIndex Hvilket steg som rendres
 * @param copyToClipboard Funksjon for å kopiere tekst
 * @param copiedText Hvilken tekst som er kopiert (for å vise “Kopiert!”)
 */
function renderStepContent(
  stepIndex: number,
  copyToClipboard: (text: string) => void,
  copiedText: string
) {
  switch (stepIndex) {
    case 0:
      return (
        <div className="space-y-4">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h4 className="font-semibold text-blue-800 mb-2">For React/TypeScript-prosjekter:</h4>
            <ul className="space-y-2 text-sm text-blue-700">
              <li className="flex items-start">
                <CheckCircle size={16} className="mr-2 mt-0.5 flex-shrink-0" />
                Bekreft at alle avhengigheter ligger i package.json
              </li>
              <li className="flex items-start">
                <CheckCircle size={16} className="mr-2 mt-0.5 flex-shrink-0" />
                Kjør prosjektet lokalt og fiks evt. feil
              </li>
              <li className="flex items-start">
                <CheckCircle size={16} className="mr-2 mt-0.5 flex-shrink-0" />
                Rydd vekk midlertidige konsollutskrifter
              </li>
            </ul>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
            <h4 className="font-semibold text-amber-800 mb-2">💡 Tips:</h4>
            <p className="text-sm text-amber-700">
              Kjør <code className="bg-amber-100 px-2 py-1 rounded">npm run build</code> lokalt for å oppdage problemer før første deploy.
            </p>
          </div>
        </div>
      )

    case 1:
      return (
        <div className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-slate-50 rounded-lg p-4">
              <h4 className="font-semibold text-slate-800 mb-3">GitHub-konto:</h4>
              <ol className="space-y-2 text-sm text-slate-600">
                <li>1. Gå til <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">github.com</a></li>
                <li>2. Klikk “Sign up”</li>
                <li>3. Velg brukernavn/passord</li>
                <li>4. Verifiser e‑post</li>
              </ol>
            </div>
            <div className="bg-slate-50 rounded-lg p-4">
              <h4 className="font-semibold text-slate-800 mb-3">Opprett repo:</h4>
              <ol className="space-y-2 text-sm text-slate-600">
                <li>1. “+” → “New repository”</li>
                <li>2. Navn f.eks. “cleandock-site”</li>
                <li>3. Velg “Public”</li>
                <li>4. “Create repository”</li>
              </ol>
            </div>
          </div>
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <h4 className="font-semibold text-green-800 mb-2">✅ Suksess:</h4>
            <p className="text-sm text-green-700">
              Du har en repo-URL som: <code className="bg-green-100 px-2 py-1 rounded ml-2">https://github.com/bruker/cleandock-site</code>
            </p>
          </div>
        </div>
      )

    case 2:
      return (
        <div className="space-y-4">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h4 className="font-semibold text-blue-800 mb-3">Metode 1: GitHub Desktop</h4>
            <ol className="space-y-2 text-sm text-blue-700">
              <li>1. Installer GitHub Desktop</li>
              <li>2. Logg inn</li>
              <li>3. “File” → “Add Local Repository”</li>
              <li>4. Velg prosjektmappen</li>
              <li>5. “Publish repository” → velg repo</li>
            </ol>
          </div>
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
            <h4 className="font-semibold text-purple-800 mb-3">Metode 2: Git (avansert)</h4>
            <div className="space-y-2 text-sm">
              <div className="bg-purple-100 p-2 rounded font-mono text-xs">
                git init<br />
                git add .<br />
                git commit -m "Initial commit"<br />
                git branch -M main<br />
                git remote add origin YOUR_REPO_URL<br />
                git push -u origin main
              </div>
            </div>
          </div>
        </div>
      )

    case 3:
      return (
        <div className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-slate-50 rounded-lg p-4">
              <h4 className="font-semibold text-slate-800 mb-3">Registrering:</h4>
              <ol className="space-y-2 text-sm text-slate-600">
                <li>1. Gå til <a href="https://netlify.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">netlify.com</a></li>
                <li>2. Klikk “Sign up”</li>
                <li>3. “Sign up with GitHub”</li>
                <li>4. Autoriser Netlify</li>
              </ol>
            </div>
            <div className="bg-slate-50 rounded-lg p-4">
              <h4 className="font-semibold text-slate-800 mb-3">Kontooppsett:</h4>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>• Velg Free plan</li>
                <li>• Verifiser e‑post</li>
                <li>• Fullfør profil</li>
              </ul>
            </div>
          </div>
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <h4 className="font-semibold text-green-800 mb-2">Gratis inkluderer:</h4>
            <ul className="text-sm text-green-700 space-y-1">
              <li>• 100GB båndbredde/mnd</li>
              <li>• 300 build‑minutter/mnd</li>
              <li>• Gratis SSL</li>
              <li>• Custom domains</li>
              <li>• Auto-deploy fra Git</li>
            </ul>
          </div>
        </div>
      )

    case 4:
      return (
        <div className="space-y-4">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h4 className="font-semibold text-blue-800 mb-3">Koble GitHub til Netlify:</h4>
            <ol className="space-y-2 text-sm text-blue-700">
              <li>1. Netlify dashboard → “New site from Git”</li>
              <li>2. Velg “GitHub”</li>
              <li>3. Installer Netlify app i GitHub</li>
              <li>4. Gi tilgang til repoet</li>
              <li>5. Velg repoet i listen</li>
            </ol>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
            <h4 className="font-semibold text-amber-800 mb-2">Viktig:</h4>
            <p className="text-sm text-amber-700">
              Ser du ikke repoet? Sjekk at det er “Public”, eller gi Netlify tilgang til Private repositories.
            </p>
          </div>
        </div>
      )

    case 5:
      return (
        <div className="space-y-4">
          <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
            <h4 className="font-semibold text-slate-800 mb-3">Build‑innstillinger:</h4>
            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Build command:</label>
                <div className="flex items-center space-x-2">
                  <code className="bg-slate-100 px-3 py-2 rounded flex-1">npm run build</code>
                  <button
                    onClick={() => copyToClipboard('npm run build')}
                    className="p-2 bg-blue-100 text-blue-600 rounded hover:bg-blue-200"
                  >
                    <Copy size={16} />
                  </button>
                </div>
                {copiedText === 'npm run build' && <span className="text-xs text-green-600">Kopiert!</span>}
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Publish directory:</label>
                <div className="flex items-center space-x-2">
                  <code className="bg-slate-100 px-3 py-2 rounded flex-1">dist</code>
                  <button
                    onClick={() => copyToClipboard('dist')}
                    className="p-2 bg-blue-100 text-blue-600 rounded hover:bg-blue-200"
                  >
                    <Copy size={16} />
                  </button>
                </div>
                {copiedText === 'dist' && <span className="text-xs text-green-600">Kopiert!</span>}
              </div>
            </div>
          </div>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h4 className="font-semibold text-blue-800 mb-2">Rammeverksnotater:</h4>
            <div className="text-sm text-blue-700 space-y-1">
              <p><strong>React/SPA:</strong> Build: <code>npm run build</code>, Publish: <code>dist</code></p>
            </div>
          </div>
        </div>
      )

    case 6:
      return (
        <div className="space-y-4">
          <div className="bg-white border border-slate-200 rounded-lg p-4">
            <h4 className="font-semibold text-slate-800 mb-2">Skjemaoppsett i dette prosjektet</h4>
            <p className="text-sm text-slate-700 mb-3">
              Kontakt‑skjemaet er allerede tilpasset Netlify Forms i <code>src/components/Contact.tsx</code>:
            </p>
            <ul className="text-sm text-slate-700 space-y-1">
              <li>• <code>name="partnership-contact"</code></li>
              <li>• <code>method="POST"</code></li>
              <li>• <code>data-netlify="true"</code></li>
              <li>• <code>data-netlify-honeypot="bot-field"</code> (spam-beskyttelse)</li>
              <li>• Skjulte felter: <code>&lt;input type="hidden" name="form-name" value="partnership-contact" /&gt;</code> og <code>&lt;input type="hidden" name="bot-field" /&gt;</code></li>
            </ul>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
            <h4 className="font-semibold text-amber-800 mb-2">Viktig for Netlify Forms:</h4>
            <p className="text-sm text-amber-700">
              Innsending skjer til <code>/</code> med <code>application/x-www-form-urlencoded</code>, og Netlify fanger dette opp når skjemaet er registrert (neste steg).
            </p>
          </div>
        </div>
      )

    case 7:
      return (
        <div className="space-y-4">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h4 className="font-semibold text-blue-800 mb-3">Hvorfor trengs dette for SPA?</h4>
            <p className="text-sm text-blue-700">
              Netlify registrerer skjemaer ved å skanne statisk HTML under build. I en SPA rendres skjemaet i klienten, derfor må du legge til et <em>skjult fallback‑skjema</em> i <code>index.html</code> slik at Netlify oppdager det.
            </p>
          </div>
          <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
            <h4 className="font-semibold text-slate-800 mb-3">Legg til i index.html (inne i &lt;body&gt;)</h4>
            <pre className="bg-slate-100 p-3 rounded text-xs overflow-x-auto">
{`<!-- Hidden fallback form so Netlify can register it at build time -->
<form name="partnership-contact" netlify netlify-honeypot="bot-field" hidden>
  <input type="text" name="name" />
  <input type="text" name="organization" />
  <input type="email" name="email" />
  <input type="text" name="phone" />
  <input type="text" name="stakeholderType" />
  <input type="text" name="subject" />
  <textarea name="message"></textarea>
</form>`}
            </pre>
            <p className="text-sm text-slate-600 mt-2">
              Etter at dette er lagt inn og deployet, vil Netlify vise skjemaet under <strong>Forms</strong> i dashboardet.
            </p>
          </div>
        </div>
      )

    case 8:
      return (
        <div className="space-y-4">
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <h4 className="font-semibold text-green-800 mb-3">Publiser</h4>
            <ol className="space-y-2 text-sm text-green-700">
              <li>1. Klikk “Deploy site”</li>
              <li>2. Vent til build fullfører (1–3 min)</li>
              <li>3. Åpne generert URL (f.eks. <code>*.netlify.app</code>)</li>
            </ol>
          </div>
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
            <h4 className="font-semibold text-purple-800 mb-2">Oppdateringer</h4>
            <p className="text-sm text-purple-700">
              Push til GitHub → Netlify bygger og deployer automatisk.
            </p>
          </div>
        </div>
      )

    case 9:
      return (
        <div className="space-y-4">
          <div className="bg-white border border-slate-200 rounded-lg p-4">
            <h4 className="font-semibold text-slate-800 mb-2">Slå på e‑postvarsling</h4>
            <ol className="text-sm text-slate-700 space-y-2">
              <li>1. Netlify Dashboard → <strong>Forms</strong> → Velg <code>partnership-contact</code></li>
              <li>2. <strong>Notifications</strong> → <strong>Email</strong></li>
              <li>3. Legg inn <strong>post@CleanDockPS.com</strong></li>
              <li>4. Lagre</li>
            </ol>
          </div>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h4 className="font-semibold text-blue-800 mb-2">Valgfritt</h4>
            <ul className="text-sm text-blue-700 space-y-1">
              <li>• Filtrer spam i Netlify Forms eller aktiver reCAPTCHA</li>
              <li>• Send webhook til CRM eller Slack i tillegg til e‑post</li>
            </ul>
          </div>
        </div>
      )

    case 10:
      return (
        <div className="space-y-4">
          <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
            <h4 className="font-semibold text-slate-800 mb-3">Test innsending</h4>
            <ol className="space-y-2 text-sm text-slate-700">
              <li>1. Åpne siden → Gå til “Contact”</li>
              <li>2. Fyll ut testdata og send inn</li>
              <li>3. Netlify → <strong>Forms</strong>: Bekreft at innsendingen vises</li>
              <li>4. Sjekk e‑posten <strong>post@CleanDockPS.com</strong> for varsel</li>
            </ol>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
            <h4 className="font-semibold text-amber-800 mb-2">Feilsøking</h4>
            <ul className="text-sm text-amber-700 space-y-2">
              <li><strong>Skjema vises ikke i Netlify → Forms:</strong> Sørg for at det skjulte fallback‑skjemaet er lagt til i <code>index.html</code> og deploy på nytt.</li>
              <li><strong>Får ikke e‑post:</strong> Sjekk at Notifications er aktivert for <code>partnership-contact</code> og at e‑posten er korrekt skrevet.</li>
              <li><strong>Submission 4xx/5xx:</strong> Prøv igjen, eller sjekk nettverksfanen i devtools for responsstatus.</li>
            </ul>
          </div>
        </div>
      )

    default:
      return null
  }
}
