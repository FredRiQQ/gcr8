import { useState } from 'react'
import { 
  ShoppingBag, 
  Search, 
  Filter, 
  ChevronDown, 
  Heart, 
  Star, 
  ArrowRight,
  X,
  Plus,
  Minus,
  Check,
  ShoppingBagIcon,
  Package,
  Layers
} from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import work1 from '../assets/work1.png'
import work2 from '../assets/work2.png'
import work3 from '../assets/work3.png'

const Marketplace = () => {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [cartItems, setCartItems] = useState<any[]>([])
  const [activeCategory, setActiveCategory] = useState("All")
  const navigate = useNavigate()

  const products = [
    { id: 1, title: "Geometric Flow Print", type: "Physical", category: "Art", price: 120, img: work1, creator: "Alex Digital", rating: 4.8 },
    { id: 2, title: "3D Motion Pack Vol. 1", type: "Digital", category: "Tech", price: 45, img: work3, creator: "Alex Digital", rating: 5.0 },
    { id: 3, title: "Neon Nights Canvas", type: "Physical", category: "Photography", price: 210, img: work2, creator: "Alex Digital", rating: 4.7 },
    { id: 4, title: "Digital Brush Essentials", type: "Digital", category: "Art", price: 25, img: work1, creator: "Alex Digital", rating: 4.9 },
    { id: 5, title: "Glass Dimensions Model", type: "Digital", category: "3D", price: 65, img: work3, creator: "Alex Digital", rating: 4.6 },
    { id: 6, title: "Urban Explorer Presets", type: "Digital", category: "Photography", price: 35, img: work2, creator: "Alex Digital", rating: 4.8 },
  ]

  const addToCart = (product: any) => {
    setCartItems([...cartItems, product])
    setIsCartOpen(true)
  }

  const removeFromCart = (index: number) => {
    const newCart = [...cartItems]
    newCart.splice(index, 1)
    setCartItems(newCart)
  }

  const cartTotal = cartItems.reduce((acc, item) => acc + item.price, 0)

  return (
    <div className="min-h-screen bg-obsidian text-cloud font-body overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass m-4 px-6 py-4 flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center gap-8">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-primary to-secondary" />
            <span className="text-2xl font-black tracking-tighter italic">G'CR8</span>
          </Link>
          <div className="hidden lg:flex items-center gap-6 text-sm font-bold uppercase tracking-widest text-white/40">
            <a href="#" className="text-white">Shop</a>
            <a href="#" className="hover:text-white transition-colors">Drops</a>
            <a href="#" className="hover:text-white transition-colors">Creators</a>
          </div>
        </div>
        
        <div className="flex-1 max-w-md mx-8 relative hidden md:block">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20" size={18} />
          <input 
            type="text" 
            placeholder="Search for art, assets, sessions..." 
            className="w-full bg-white/5 border border-white/10 rounded-2xl py-3 pl-12 pr-4 text-sm focus:outline-none focus:border-primary transition-all"
          />
        </div>

        <div className="flex items-center gap-4">
          <button 
            onClick={() => setIsCartOpen(true)}
            className="relative p-3 glass-hover rounded-2xl group transition-all"
          >
            <ShoppingBag size={22} className="group-hover:scale-110 transition-transform" />
            {cartItems.length > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-[10px] font-black flex items-center justify-center rounded-full border-2 border-obsidian">
                {cartItems.length}
              </span>
            )}
          </button>
          <div className="w-10 h-10 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center text-xs font-black">AD</div>
        </div>
      </nav>

      <main className="pt-32 container pb-24">
        {/* Featured Drop */}
        <section className="relative h-[500px] rounded-[40px] overflow-hidden mb-16 group">
          <img src={work1} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" alt="Featured Drop" />
          <div className="absolute inset-0 bg-gradient-to-r from-obsidian via-obsidian/40 to-transparent flex flex-col justify-center p-12 md:p-20">
             <div className="inline-block px-4 py-1 rounded-full bg-primary/20 border border-primary/30 text-primary text-xs font-black mb-6 tracking-widest uppercase">
               Exclusive Drop • Live Now
             </div>
             <h2 className="text-5xl md:text-7xl font-black mb-6 leading-none tracking-tighter max-w-xl">
               Geometric <br />
               <span className="gradient-text">Flow State</span>
             </h2>
             <p className="text-xl text-white/60 mb-10 max-w-md leading-relaxed">
               Limited edition physical gallery prints and high-fidelity project files from Alex Digital.
             </p>
             <div className="flex items-center gap-6">
                <button className="px-10 py-4 bg-white text-obsidian rounded-2xl font-black text-lg hover:scale-105 transition-all shadow-2xl shadow-white/10">
                  Shop Collection
                </button>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-white/30 uppercase tracking-widest">Ending In</span>
                  <span className="text-2xl font-black tracking-tight">12h : 42m : 08s</span>
                </div>
             </div>
          </div>
        </section>

        {/* Filters & Grid */}
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar Filters */}
          <aside className="lg:w-64 space-y-10">
            <div>
              <h3 className="text-sm font-black uppercase tracking-widest text-white/40 mb-6">Categories</h3>
              <div className="space-y-3">
                {["All", "Digital Assets", "Physical Goods", "Custom Work", "Tickets"].map((cat) => (
                  <button 
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`w-full flex justify-between items-center text-sm font-bold transition-all ${activeCategory === cat ? 'text-primary' : 'text-white/60 hover:text-white'}`}
                  >
                    <span>{cat}</span>
                    {activeCategory === cat && <div className="w-1.5 h-1.5 rounded-full bg-primary" />}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-black uppercase tracking-widest text-white/40 mb-6">Price Range</h3>
              <div className="space-y-4">
                <div className="h-1 w-full bg-white/10 rounded-full relative">
                  <div className="absolute left-0 right-1/4 h-full bg-primary rounded-full" />
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-4 border-primary rounded-full transition-transform hover:scale-125 cursor-pointer" />
                  <div className="absolute right-1/4 top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-4 border-primary rounded-full transition-transform hover:scale-125 cursor-pointer" />
                </div>
                <div className="flex justify-between text-xs font-black text-white/30 tracking-widest">
                  <span>$0</span>
                  <span>$1,000+</span>
                </div>
              </div>
            </div>

            <div className="glass p-6">
              <h4 className="font-bold mb-3 flex items-center gap-2">
                <Star size={16} className="text-yellow-400" />
                Featured Artist
              </h4>
              <p className="text-xs text-white/40 leading-relaxed mb-4">Support our community-voted creator of the month.</p>
              <button className="w-full py-2 bg-white/5 border border-white/10 rounded-xl text-xs font-black uppercase tracking-widest hover:bg-white/10 transition-all">
                View Works
              </button>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            <div className="flex justify-between items-center mb-10">
              <h3 className="text-2xl font-black">All Assets <span className="text-sm font-medium text-white/30 ml-2">({products.length})</span></h3>
              <button className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-sm font-bold">
                Most Recent
                <ChevronDown size={16} />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {products.map((p) => (
                <div key={p.id} className="group">
                  <div className="relative aspect-square rounded-[32px] overflow-hidden mb-5">
                    <img src={p.img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={p.title} />
                    <div className="absolute top-4 left-4 flex gap-2">
                       <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-2 backdrop-blur-md ${p.type === 'Digital' ? 'bg-primary/30 border-primary/40 text-primary' : 'bg-emerald-500/30 border-emerald-500/40 text-emerald-400'}`}>
                          {p.type === 'Digital' ? <Layers size={12} /> : <Package size={12} />}
                          {p.type}
                       </span>
                    </div>
                    <button className="absolute top-4 right-4 p-3 bg-obsidian/40 backdrop-blur-md rounded-2xl text-white/60 hover:text-red-500 transition-colors">
                      <Heart size={18} />
                    </button>
                    <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                       <button 
                         onClick={() => addToCart(p)}
                         className="w-full py-4 bg-white text-obsidian rounded-2xl font-black transition-transform active:scale-95 flex items-center justify-center gap-2"
                        >
                         <Plus size={20} />
                         Add to Cart
                       </button>
                    </div>
                  </div>
                  <div className="px-2">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-lg font-bold group-hover:text-primary transition-colors">{p.title}</h4>
                      <div className="text-xl font-black tracking-tight">${p.price}</div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="text-sm text-white/40 flex items-center gap-2">
                        <div className="w-5 h-5 rounded bg-white/10 border border-white/5 flex items-center justify-center text-[8px]">AD</div>
                        {p.creator}
                      </div>
                      <div className="flex items-center gap-1 text-xs font-bold text-yellow-500/70">
                        <Star size={12} fill="currentColor" />
                        {p.rating}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Cart Sidebar Overlay */}
      <div className={`fixed inset-0 z-[60] transition-all duration-500 ${isCartOpen ? 'visible' : 'invisible'}`}>
        <div 
          className={`absolute inset-0 bg-obsidian/60 backdrop-blur-md transition-opacity duration-500 ${isCartOpen ? 'opacity-100' : 'opacity-0'}`} 
          onClick={() => setIsCartOpen(false)}
        />
        <div className={`absolute top-0 right-0 h-full w-full max-w-md bg-obsidian border-l border-white/10 shadow-2xl transition-transform duration-500 flex flex-col ${isCartOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="p-8 flex items-center justify-between border-b border-white/5">
            <div className="flex items-center gap-3">
              <ShoppingBagIcon className="text-primary" />
              <h2 className="text-2xl font-black">Your Cart</h2>
              <span className="px-2 py-0.5 bg-primary/20 text-primary text-[10px] font-black rounded-full uppercase">{cartItems.length} Items</span>
            </div>
            <button onClick={() => setIsCartOpen(false)} className="p-2 hover:bg-white/5 rounded-xl transition-all">
              <X size={24} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-8 space-y-6">
            {cartItems.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4 opacity-30">
                <ShoppingBag size={64} strokeWidth={1} />
                <p className="font-bold text-xl uppercase tracking-widest">Your cart is empty</p>
              </div>
            ) : (
              cartItems.map((item, i) => (
                <div key={i} className="flex gap-4 group">
                  <div className="w-20 h-20 rounded-2xl overflow-hidden border border-white/10">
                    <img src={item.img} className="w-full h-full object-cover" alt="" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between mb-1">
                      <h4 className="font-bold text-sm tracking-tight">{item.title}</h4>
                      <span className="font-black text-sm">${item.price}</span>
                    </div>
                    <div className="text-[10px] text-white/30 font-black uppercase tracking-widest mb-3">{item.type} • {item.creator}</div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3 p-1 rounded-lg bg-white/5 border border-white/5">
                        <button className="p-1 hover:text-primary transition-colors"><Minus size={12} /></button>
                        <span className="text-xs font-bold">1</span>
                        <button className="p-1 hover:text-primary transition-colors"><Plus size={12} /></button>
                      </div>
                      <button 
                        onClick={() => removeFromCart(i)}
                        className="text-[10px] font-black uppercase text-red-500/50 hover:text-red-500 tracking-widest transition-colors"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          <div className="p-8 space-y-6 border-t border-white/5 bg-white/[0.02]">
            <div className="space-y-3">
              <div className="flex justify-between text-sm font-bold text-white/40">
                <span>Subtotal</span>
                <span>${cartTotal}</span>
              </div>
              <div className="flex justify-between text-sm font-bold text-white/40">
                <span>Tax & Fees</span>
                <span>$0.00</span>
              </div>
              <div className="flex justify-between text-2xl font-black pt-3 border-t border-white/5">
                <span>Total</span>
                <span className="gradient-text">${cartTotal}</span>
              </div>
            </div>
            <button 
              disabled={cartItems.length === 0}
              onClick={() => navigate('/checkout-success')}
              className="w-full py-5 bg-primary text-white rounded-2xl font-black text-lg hover:shadow-[0_0_40px_rgba(99,102,241,0.5)] transition-all disabled:opacity-50 disabled:cursor-not-allowed active:scale-95 flex items-center justify-center gap-3"
            >
              Checkout Now
              <ArrowRight size={20} />
            </button>
            <p className="text-[10px] text-center text-white/20 font-bold uppercase tracking-widest">Secure Checkout via G'Cr8 Pay</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Marketplace
