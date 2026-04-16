import heroBg from '../assets/hero_bg.png'
import marketplaceImg from '../assets/marketplace.png'
import liveImg from '../assets/live_sessions.png'
import { Link } from 'react-router-dom'

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 glass m-4 px-6 py-4 flex items-center justify-between max-w-7xl mx-auto border-white/5">
    <div className="flex items-center gap-2">
      <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-primary to-secondary animate-pulse" />
      <span className="text-2xl font-heading font-extrabold tracking-tight">G'Cr8</span>
    </div>
    <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/70">
      <a href="#features" className="hover:text-white transition-colors">Features</a>
      <Link to="/marketplace" className="hover:text-white transition-colors">Marketplace</Link>
      <a href="#live" className="hover:text-white transition-colors">Live</a>
      <a href="#community" className="hover:text-white transition-colors">Community</a>
    </div>
    <div className="flex items-center gap-4">
      <Link to="/portfolio/demo" className="text-white/70 hover:text-white transition-colors text-sm font-medium">Demo Portfolio</Link>
      <Link to="/dashboard" className="px-6 py-2 rounded-full bg-white text-obsidian font-bold text-sm hover:bg-white/90 transition-all active:scale-95">
        Get Started
      </Link>
    </div>
  </nav>
)

const Hero = () => (
  <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img src={heroBg} className="w-full h-full object-cover opacity-40 scale-110 blur-sm" alt="" />
      <div className="absolute inset-0 bg-gradient-to-b from-obsidian/0 via-obsidian/50 to-obsidian" />
    </div>
    
    <div className="container relative z-10 text-center animate-fadeIn">
      <div className="inline-block px-4 py-1 rounded-full bg-primary/20 border border-primary/30 text-primary text-xs font-bold mb-6 tracking-widest uppercase">
        Empowering the Global Creative Economy
      </div>
      <h1 className="text-5xl md:text-8xl mb-6 tracking-tighter max-w-5xl mx-auto leading-[1.1]">
        Turn Your Talent into <br />
        <span className="gradient-text">Sustainable Income</span>
      </h1>
      <p className="text-xl text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
        The digital ecosystem designed for creatives to monetize skills, 
        build global communities, and showcase work to the world.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <Link to="/dashboard" className="w-full sm:w-auto px-10 py-4 rounded-2xl bg-primary text-white font-bold hover:shadow-[0_0_40px_rgba(99,102,241,0.5)] transition-all active:scale-95 text-center">
          Launch Your Portfolio
        </Link>
        <a href="#marketplace" className="w-full sm:w-auto px-10 py-4 rounded-2xl glass font-bold hover:bg-white/10 transition-all active:scale-95 text-center">
          Explore Marketplace
        </a>
      </div>
    </div>
    
    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-20">
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
      </svg>
    </div>
  </section>
)

const Features = () => {
  const features = [
    { title: 'Rich Portfolios', desc: 'Showcase your best work in a professional, high-performance gallery.', icon: '🎨' },
    { title: 'Audience Tracking', desc: 'Deep analytics to understand and grow your global fan base.', icon: '📈' },
    { title: 'Instant Community', desc: 'Build private or public circles around your creative projects.', icon: '🌍' },
    { title: 'Ticket Sales', desc: 'Host and sell access to exclusive digital or physical events.', icon: '🎫' },
  ]

  return (
    <section id="features" className="py-24 container">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((f, i) => (
          <div key={i} className="glass-hover p-8 group">
            <div className="text-4xl mb-6 group-hover:scale-110 transition-transform">{f.icon}</div>
            <h3 className="text-xl mb-3">{f.title}</h3>
            <p className="text-white/50 text-sm leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

const Showcase = ({ title, desc, img, reverse = false, id }: { title: string, desc: string, img: string, reverse?: boolean, id?: string }) => (
  <section id={id} className={`py-24 container flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-16`}>
    <div className="flex-1 space-y-6">
      <h2 className="text-4xl md:text-6xl leading-tight">{title}</h2>
      <p className="text-lg text-white/60 leading-relaxed italic border-l-2 border-primary pl-6">
        {desc}
      </p>
      <button className="group flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all">
        Learn More 
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </button>
    </div>
    <div className="flex-1 relative group">
      <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-secondary/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
      <img src={img} className="rounded-3xl border border-white/10 relative z-10 w-full animate-float transition-transform group-hover:rotate-1" alt="" />
    </div>
  </section>
)

const LandingPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <Showcase 
        id="marketplace"
        title="Physical & Digital Marketplace"
        desc="Bridge the gap between your physical crafts and digital assets. Sell everything from limited edition prints to exclusive NFTs in one unified ecosystem."
        img={marketplaceImg}
      />
      <Showcase 
        id="live"
        title="Live Creative Sessions"
        desc="Perform live on stream. From podcasts and freestyles to behind-the-scenes sessions, connect with your audience in real-time and monetize every second."
        img={liveImg}
        reverse
      />
      
      <section className="py-24 container text-center">
        <div className="glass p-16 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary" />
          <h2 className="text-4xl md:text-6xl mb-8">Ready to Cr8?</h2>
          <p className="text-xl text-white/60 mb-10 max-w-2xl mx-auto">
            Join the global movement of creatives who are reclaiming their economic power.
          </p>
          <Link to="/dashboard" className="inline-block px-12 py-5 rounded-2xl bg-white text-obsidian text-lg font-bold hover:scale-105 transition-all shadow-2xl shadow-indigo-500/20 active:scale-95">
            Create Your Account
          </Link>
        </div>
      </section>

      <footer className="py-12 border-t border-white/5 container flex flex-col md:flex-row justify-between items-center gap-8 text-white/40 text-sm">
        <div>© 2026 G'Cr8. All rights reserved.</div>
        <div className="flex gap-8">
          <a href="#" className="hover:text-white transition-colors">Twitter</a>
          <a href="#" className="hover:text-white transition-colors">Instagram</a>
          <a href="#" className="hover:text-white transition-colors">Discord</a>
        </div>
        <div>Built for the Global Creative Community.</div>
      </footer>
    </div>
  )
}

export default LandingPage
