import { useMemo, useState } from 'react'
import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom'
import TopNav from './components/TopNav'
import Hero from './components/Hero'
import CategoryBar from './components/CategoryBar'
import ProductCard from './components/ProductCard'
import Footer from './components/Footer'
import CartDrawer from './components/CartDrawer'
import ProductDetail from './components/ProductDetail'
import { products } from './products'

function Home({ onAdd, onOpenDetail, onSearch, filter, setFilter }) {
  const [query, setQuery] = useState('')
  const filtered = useMemo(() => {
    return products.filter((p) => {
      const matchCategory = filter === 'all' ? true : p.category === filter
      const matchQuery = p.name.toLowerCase().includes(query.toLowerCase())
      return matchCategory && matchQuery
    })
  }, [query, filter])

  return (
    <div className="space-y-8">
      <Hero />
      <div>
        <div className="px-4">
          <CategoryBar active={filter} onChange={setFilter} />
        </div>
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 px-4">
          {filtered.map((p) => (
            <div key={p.id} onClick={() => onOpenDetail(p)} className="cursor-pointer">
              <ProductCard product={p} onAdd={onAdd} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function Checkout({ items }) {
  const navigate = useNavigate()
  const total = items.reduce((s, it) => s + it.price * (it.qty || 1), 0)
  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-serif text-pink-900 mb-6">Checkout</h2>
      <div className="bg-white rounded-3xl ring-1 ring-pink-100 shadow-sm p-6 space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input className="rounded-2xl bg-pink-50/50 ring-1 ring-pink-100 px-4 py-3" placeholder="Full Name" />
          <input className="rounded-2xl bg-pink-50/50 ring-1 ring-pink-100 px-4 py-3" placeholder="Email" />
          <input className="rounded-2xl bg-pink-50/50 ring-1 ring-pink-100 px-4 py-3" placeholder="Address" />
          <input className="rounded-2xl bg-pink-50/50 ring-1 ring-pink-100 px-4 py-3" placeholder="City" />
          <input className="rounded-2xl bg-pink-50/50 ring-1 ring-pink-100 px-4 py-3" placeholder="Card Number" />
          <input className="rounded-2xl bg-pink-50/50 ring-1 ring-pink-100 px-4 py-3" placeholder="Expiry" />
        </div>
        <div className="flex items-center justify-between pt-2 text-pink-900">
          <span>Total</span>
          <span className="text-xl font-semibold">${total.toFixed(2)}</span>
        </div>
        <button
          onClick={() => navigate('/')}
          className="w-full rounded-full bg-gradient-to-r from-pink-400 to-pink-500 text-white px-5 py-3 shadow-lg shadow-pink-200"
        >
          Place Order
        </button>
      </div>
    </div>
  )
}

function AppShell() {
  const [filter, setFilter] = useState('all')
  const [cart, setCart] = useState([])
  const [openCart, setOpenCart] = useState(false)
  const [detail, setDetail] = useState({ open: false, product: null })

  const addToCart = (p) => {
    setCart((c) => [...c, { ...p, qty: 1 }])
    setOpenCart(true)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-mint-50/40">
      <TopNav cartCount={cart.length} onSearch={() => {}} />
      <main className="mx-auto max-w-7xl py-6">
        <Home
          onAdd={addToCart}
          onOpenDetail={(p) => setDetail({ open: true, product: p })}
          filter={filter}
          setFilter={setFilter}
        />
      </main>
      <Footer />
      <CartDrawer
        open={openCart}
        items={cart}
        onClose={() => setOpenCart(false)}
        onRemove={(id) => setCart((c) => c.filter((i) => i.id !== id))}
        onCheckout={() => {
          setOpenCart(false)
          window.location.href = '/checkout'
        }}
      />
      {detail.product && (
        <ProductDetail
          open={detail.open}
          product={detail.product}
          onClose={() => setDetail({ open: false, product: null })}
          onAdd={addToCart}
        />
      )}
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppShell />} />
        <Route path="/checkout" element={<Checkout items={[]} />} />
      </Routes>
    </BrowserRouter>
  )
}
