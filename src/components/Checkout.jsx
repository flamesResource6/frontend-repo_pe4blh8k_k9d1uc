import { useMemo } from 'react'

export default function Checkout({ items = [] }) {
  const total = useMemo(() => items.reduce((s, it) => s + it.price * (it.qty || 1), 0), [items])
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-emerald-50/40">
      <div className="mx-auto max-w-3xl px-4 py-8">
        <h2 className="text-3xl font-serif text-pink-900 mb-6">Checkout</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-4">
            <div className="bg-white rounded-3xl ring-1 ring-pink-100 shadow-sm p-6 space-y-4">
              <h3 className="text-pink-900 font-medium">Shipping</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input className="rounded-2xl bg-pink-50/50 ring-1 ring-pink-100 px-4 py-3" placeholder="Full Name" />
                <input className="rounded-2xl bg-pink-50/50 ring-1 ring-pink-100 px-4 py-3" placeholder="Email" />
                <input className="rounded-2xl bg-pink-50/50 ring-1 ring-pink-100 px-4 py-3 sm:col-span-2" placeholder="Address" />
                <input className="rounded-2xl bg-pink-50/50 ring-1 ring-pink-100 px-4 py-3" placeholder="City" />
                <input className="rounded-2xl bg-pink-50/50 ring-1 ring-pink-100 px-4 py-3" placeholder="Postal Code" />
              </div>
            </div>
            <div className="bg-white rounded-3xl ring-1 ring-pink-100 shadow-sm p-6 space-y-4">
              <h3 className="text-pink-900 font-medium">Payment</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input className="rounded-2xl bg-pink-50/50 ring-1 ring-pink-100 px-4 py-3 sm:col-span-2" placeholder="Card Number" />
                <input className="rounded-2xl bg-pink-50/50 ring-1 ring-pink-100 px-4 py-3" placeholder="Expiry" />
                <input className="rounded-2xl bg-pink-50/50 ring-1 ring-pink-100 px-4 py-3" placeholder="CVC" />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-3xl ring-1 ring-pink-100 shadow-sm p-6 space-y-4 h-fit">
            <h3 className="text-pink-900 font-medium">Order Summary</h3>
            <div className="space-y-3 max-h-64 overflow-y-auto pr-1">
              {items.length === 0 && (
                <p className="text-pink-700/70">Your cart is empty.</p>
              )}
              {items.map((it) => (
                <div key={it.id} className="flex items-center gap-3">
                  <img src={it.image} alt={it.name} className="w-14 h-14 object-cover rounded-xl"/>
                  <div className="flex-1">
                    <p className="text-sm text-pink-900">{it.name}</p>
                    <p className="text-xs text-pink-700/70">Qty {it.qty || 1}</p>
                  </div>
                  <span className="text-sm text-pink-900">${(it.price * (it.qty || 1)).toFixed(2)}</span>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-between pt-2 text-pink-900">
              <span>Total</span>
              <span className="text-xl font-semibold">${total.toFixed(2)}</span>
            </div>
            <button onClick={() => alert('Order placed!')} className="w-full rounded-full bg-gradient-to-r from-pink-400 to-pink-500 text-white px-5 py-3 shadow-lg shadow-pink-200">
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
