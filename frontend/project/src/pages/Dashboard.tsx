import { 
  LayoutDashboard, 
  Image as ImageIcon, 
  BarChart3, 
  Users, 
  Settings, 
  Plus, 
  MoreVertical,
  ArrowUpRight,
  TrendingUp,
  Globe,
  DollarSign
} from 'lucide-react'
import { Link } from 'react-router-dom'
import work1 from '../assets/work1.png'
import work2 from '../assets/work2.png'

const StatCard = ({ title, value, change, icon: Icon, color }: { title: string, value: string, change: string, icon: any, color: string }) => (
  <div className="glass p-6 group hover:border-white/20 transition-all">
    <div className="flex justify-between items-start mb-4">
      <div className={`p-3 rounded-2xl bg-${color}/10 text-${color} group-hover:scale-110 transition-transform`}>
        <Icon size={24} />
      </div>
      <div className="flex items-center gap-1 text-emerald-400 text-sm font-bold">
        <TrendingUp size={14} />
        {change}
      </div>
    </div>
    <div className="text-3xl font-black mb-1">{value}</div>
    <div className="text-sm text-white/40 uppercase tracking-widest font-bold">{title}</div>
  </div>
)

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-obsidian flex">
      {/* Sidebar */}
      <aside className="w-20 md:w-64 border-r border-white/5 flex flex-col items-center md:items-start py-8 px-4 gap-8">
        <Link to="/" className="flex items-center gap-3 px-4 mb-4">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-primary to-secondary" />
          <span className="hidden md:block text-2xl font-black tracking-tighter italic">G'CR8</span>
        </Link>
        
        <nav className="flex-1 w-full space-y-2">
          {[
            { icon: LayoutDashboard, label: "Overview", active: true },
            { icon: ImageIcon, label: "My Portfolio" },
            { icon: BarChart3, label: "Analytics" },
            { icon: Users, label: "Community" },
            { icon: DollarSign, label: "Earnings" },
            { icon: Settings, label: "Settings" }
          ].map((item, i) => (
             <button key={i} className={`w-full flex items-center gap-4 px-4 py-3 rounded-2xl transition-all ${item.active ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'text-white/40 hover:bg-white/5 hover:text-white'}`}>
                <item.icon size={22} />
                <span className="hidden md:block font-bold text-sm tracking-wide">{item.label}</span>
             </button>
          ))}
        </nav>

        <div className="w-full glass p-4 rounded-2xl hidden md:block">
          <div className="text-xs font-bold text-white/30 uppercase tracking-widest mb-3">Storage Used</div>
          <div className="h-1.5 w-full bg-white/5 rounded-full mb-3 overflow-hidden">
            <div className="h-full bg-gradient-to-r from-primary to-secondary w-3/4 rounded-full" />
          </div>
          <div className="flex justify-between items-center text-[10px] font-bold text-white/50 uppercase">
            <span>1.5 GB / 2 GB</span>
            <span className="text-primary">Upgrade</span>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-4 md:p-10 max-h-screen overflow-y-auto">
        <header className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-3xl font-black mb-2 leading-tight">Welcome, Alex Digital</h1>
            <p className="text-white/40 font-medium">Your creative performance is up <span className="text-emerald-400 font-bold">12%</span> this week.</p>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/marketplace" className="hidden sm:flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl font-bold text-sm transition-all">
              <Globe size={18} />
              View Marketplace
            </Link>
            <button className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-2xl font-bold text-sm hover:shadow-[0_0_30px_rgba(99,102,241,0.4)] transition-all">
              <Plus size={18} />
              Add Work
            </button>
          </div>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          <StatCard title="Total Views" value="84.2k" change="+14%" icon={BarChart3} color="primary" />
          <StatCard title="Fan Growth" value="1.2k" change="+8%" icon={Users} color="secondary" />
          <StatCard title="Global Reach" value="Nigeria" change="Top" icon={Globe} color="accent" />
          <StatCard title="Net Earnings" value="$4,280" change="+22%" icon={DollarSign} color="emerald-400" />
        </div>

        {/* Recent Work & Activity Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Portfolio Management */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold uppercase tracking-widest text-white/60">Manage Portfolio</h2>
              <button className="text-sm font-bold text-primary hover:underline">View All</button>
            </div>
            <div className="space-y-4">
              {[
                { title: "Geometric Flow", date: "Oct 12, 2026", status: "Published", img: work1, views: "12.4k" },
                { title: "Neon Reflections", date: "Oct 08, 2026", status: "Published", img: work2, views: "8.2k" }
              ].map((item, i) => (
                <div key={i} className="glass p-4 flex items-center gap-4 group hover:bg-white/10 transition-all cursor-pointer">
                  <img src={item.img} className="w-16 h-16 rounded-xl object-cover" alt="" />
                  <div className="flex-1">
                    <h3 className="font-bold mb-1">{item.title}</h3>
                    <div className="flex items-center gap-4 text-xs text-white/40 font-bold uppercase tracking-wider">
                      <span>{item.date}</span>
                      <span className="flex items-center gap-1 text-emerald-400">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                        {item.status}
                      </span>
                    </div>
                  </div>
                  <div className="hidden sm:block text-center mr-8">
                    <div className="text-sm font-bold">{item.views}</div>
                    <div className="text-[10px] text-white/40 uppercase font-black">Views</div>
                  </div>
                  <button className="p-2 text-white/30 hover:text-white">
                    <MoreVertical size={20} />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Insights */}
          <div className="space-y-6">
            <h2 className="text-xl font-bold uppercase tracking-widest text-white/60">Audience Pulse</h2>
            <div className="glass p-6 space-y-8">
               <div className="relative h-48 flex items-end gap-3 px-2">
                  {[40, 70, 45, 90, 65, 80, 55].map((h, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center gap-2">
                       <div 
                         className="w-full bg-gradient-to-t from-primary/20 to-primary rounded-t-lg transition-all hover:scale-105" 
                         style={{ height: `${h}%` }} 
                       />
                       <span className="text-[8px] font-bold text-white/20 uppercase">M T W T F S S</span>
                    </div>
                  ))}
               </div>
               <div className="space-y-4">
                 <div className="flex justify-between items-center p-3 rounded-2xl bg-white/5 border border-white/5">
                   <div className="flex items-center gap-3">
                     <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center text-secondary">
                        <ArrowUpRight size={14} />
                     </div>
                     <span className="text-xs font-bold">New show ticket sold</span>
                   </div>
                   <span className="text-[10px] text-white/40 font-bold">2m ago</span>
                 </div>
                 <div className="flex justify-between items-center p-3 rounded-2xl bg-white/5 border border-white/5">
                   <div className="flex items-center gap-3">
                     <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                        <Users size={14} />
                     </div>
                     <span className="text-xs font-bold">New fan joined circle</span>
                   </div>
                   <span className="text-[10px] text-white/40 font-bold">15m ago</span>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Dashboard
