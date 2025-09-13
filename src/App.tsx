import { HashRouter, Route, Routes } from 'react-router'
import HomePage from './pages/Home'
import NetlifyGuide from './pages/NetlifyGuide'

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/netlify-guide" element={<NetlifyGuide />} />
      </Routes>
    </HashRouter>
  )
}
