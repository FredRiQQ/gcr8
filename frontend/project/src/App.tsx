import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/Landing'
import PortfolioView from './pages/Portfolio'
import Dashboard from './pages/Dashboard'
import Marketplace from './pages/Marketplace'

const Success = () => (
  <div className="min-h-screen bg-obsidian flex items-center justify-center p-4">
    <div className="glass p-12 text-center max-w-md animate-fadeIn">
      <div className="w-20 h-20 bg-emerald-500/20 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <h1 className="text-3xl font-black mb-4">Purchase Successful!</h1>
      <p className="text-white/60 mb-8">Your creative assets are now available in your dashboard. A confirmation email has been sent.</p>
      <div className="flex flex-col gap-3">
        <a href="/dashboard" className="px-8 py-3 bg-primary text-white rounded-xl font-bold transition-all hover:scale-105">View in Dashboard</a>
        <a href="/marketplace" className="px-8 py-3 glass hover:bg-white/10 rounded-xl font-bold transition-all">Back to Marketplace</a>
      </div>
    </div>
  </div>
)

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/portfolio/:id" element={<PortfolioView />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/checkout-success" element={<Success />} />
      </Routes>
    </Router>
  )
}

export default App
