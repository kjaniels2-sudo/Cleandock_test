import { HashRouter, Route, Routes } from 'react-router'
import HomePage from './pages/Home'
import NetlifyGuide from './pages/NetlifyGuide'
import HeadMeta from './components/HeadMeta'

/**
 * App
 * Hovedapp med ruter. Laster HeadMeta for å sette fanetittel og favicon globalt.
 */
export default function App() {
  return (
    <>
      {/* Global fanetittel + favicon */}
      <HeadMeta title="CleanDock" favicon="/logo.svg" />

      <HashRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/netlify-guide" element={<NetlifyGuide />} />
        </Routes>
      </HashRouter>
    </>
  )
}
