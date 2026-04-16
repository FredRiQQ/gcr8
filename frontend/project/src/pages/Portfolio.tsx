import { ArrowLeft, Share2, Award, Globe, Camera, MessageSquare, Code } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import work1 from '../assets/work1.png'
import work2 from '../assets/work2.png'
import work3 from '../assets/work3.png'

const PortfolioView = () => {
  
  const works = [
    { title: "Geometric Flow", category: "Digital Art", img: work1, likes: "2.4k" },
    { title: "Neon Reflections", category: "Photography", img: work2, likes: "1.8k" },
    { title: "Glass Dimensions", category: "3D Render", img: work3, likes: "3.1k" },
    { title: "Cyberpunk Echoes", category: "Digital Art", img: work1, likes: "942" },
    { title: "Midnight Solitude", category: "Photography", img: work2, likes: "1.2k" },
    { title: "Prismatic Sphere", category: "3D Render", img: work3, likes: "4.5k" },
  ]

  return (
    <div className="min-h-screen bg-obsidian">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass m-4 px-6 py-4 flex items-center justify-between max-w-7xl mx-auto">
        <Link to="/" className="flex items-center gap-2 text-white/70 hover:text-white transition-colors">
          <ArrowLeft size={20} />
          <span>Back to Home</span>
        </Link>
        <div className="flex items-center gap-4">
          <button className="p-2 glass-hover rounded-full">
            <Share2 size={20} />
          </button>
          <button className="px-6 py-2 rounded-full bg-primary text-white font-bold text-sm hover:shadow-[0_0_20px_rgba(99,102,241,0.4)] transition-all">
            Follow Artist
          </button>
        </div>
      </nav>

      {/* Profile Header */}
      <header className="pt-32 pb-16 container">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-tr from-primary to-secondary rounded-3xl blur opacity-30 group-hover:opacity-60 transition-opacity" />
            <div className="w-40 h-40 rounded-3xl bg-obsidian-light border border-white/10 relative z-10 flex items-center justify-center text-5xl font-bold gradient-text overflow-hidden">
               {/* Since I exhausted my profile pic quota, I'll use initials with a stylish background */}
               AD
            </div>
          </div>
          <div className="flex-1 text-center md:text-left">
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 mb-4">
              <h1 className="text-4xl md:text-5xl font-black tracking-tight">Alex Digital</h1>
              <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-bold text-white/50 uppercase tracking-widest flex items-center gap-2">
                <Award size={14} className="text-secondary" /> Featured Artist
              </span>
            </div>
            <p className="text-xl text-white/60 mb-6 max-w-2xl">
              Visionary digital artist and 3D designer exploring the boundaries of geometry and light. 
              Creating immersive digital experiences for the global creative economy.
            </p>
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-8 py-6 border-y border-white/5">
              <div className="text-center md:text-left">
                <div className="text-2xl font-bold">12.8k</div>
                <div className="text-xs text-white/40 uppercase tracking-widest">Fans</div>
              </div>
              <div className="text-center md:text-left">
                <div className="text-2xl font-bold">84</div>
                <div className="text-xs text-white/40 uppercase tracking-widest">Projects</div>
              </div>
              <div className="text-center md:text-left">
                <div className="text-2xl font-bold">Nigeria</div>
                <div className="text-xs text-white/40 uppercase tracking-widest">Location</div>
              </div>
              <div className="flex gap-4 ml-auto">
                <a href="#" className="p-2 glass-hover rounded-xl text-white/50 hover:text-white"><Camera size={18} /></a>
                <a href="#" className="p-2 glass-hover rounded-xl text-white/50 hover:text-white"><MessageSquare size={18} /></a>
                <a href="#" className="p-2 glass-hover rounded-xl text-white/50 hover:text-white"><Code size={18} /></a>
                <a href="#" className="p-2 glass-hover rounded-xl text-white/50 hover:text-white"><Globe size={18} /></a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Portfolio Gallery */}
      <main className="container pb-24">
        <div className="flex items-center gap-8 mb-12 overflow-x-auto pb-4 no-scrollbar">
          {["All Work", "Digital Art", "Photography", "3D Render", "Case Studies"].map((tab, i) => (
            <button 
              key={i} 
              className={`whitespace-nowrap pb-2 text-sm font-bold tracking-widest uppercase transition-all ${i === 0 ? 'text-white border-b-2 border-primary' : 'text-white/40 hover:text-white'}`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {works.map((work, i) => (
            <div key={i} className="group relative glass-hover overflow-hidden rounded-3xl aspect-[4/5]">
              <img 
                src={work.img} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                alt={work.title} 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                <span className="text-xs font-bold text-primary mb-1 uppercase tracking-widest">{work.category}</span>
                <h3 className="text-2xl font-bold mb-4">{work.title}</h3>
                <div className="flex items-center justify-between">
                  <button className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-xl text-sm font-bold backdrop-blur-md transition-colors">
                    View Project
                  </button>
                  <div className="flex items-center gap-2 text-white/60">
                    <Award size={16} />
                    <span className="text-sm">{work.likes}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <button className="px-10 py-4 glass-hover rounded-2xl font-bold transition-all">
            Load More Creations
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 container text-center text-white/20 text-xs">
        © 2026 G'Cr8 Artist Network. All creations protected by blockchain-verified creative assets.
      </footer>
    </div>
  )
}

export default PortfolioView
