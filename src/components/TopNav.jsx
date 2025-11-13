import { Search, ShoppingBag, Menu } from 'lucide-react'

export default function TopNav({ cartCount = 0, onSearch }) {
  return (
    <header className="sticky top-0 z-30 backdrop-blur bg-white/70 border-b border-pink-100/70">
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center gap-3">
        <button className="p-2 rounded-xl hover:bg-pink-50 text-pink-600 focus:outline-none">
          <Menu size={22} />
        </button>
        <div className="flex-1 text-center">
          <span className="text-2xl font-serif tracking-wide text-pink-700">Bloomify</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center bg-white rounded-full shadow-sm ring-1 ring-pink-100 overflow-hidden transition focus-within:ring-pink-300">
            <Search className="ml-3 text-pink-500" size={18} />
            <input
              onChange={(e) => onSearch?.(e.target.value)}
              placeholder="Search bouquets..."
              className="px-3 py-2 outline-none text-sm text-pink-900 placeholder-pink-300"
            />
          </div>
          <button className="relative p-2 rounded-xl hover:bg-pink-50 text-pink-600">
            <ShoppingBag size={22} />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-[10px] px-1.5 py-0.5 rounded-full">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  )
}
