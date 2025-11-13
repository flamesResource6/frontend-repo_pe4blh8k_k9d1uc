import { X, Trash } from 'lucide-react'

export default function CartDrawer({ open, items, onClose, onRemove, onCheckout }) {
  const total = items.reduce((sum, it) => sum + it.price * (it.qty || 1), 0)
  return (
    <div className={`fixed inset-0 z-40 ${open ? '' : 'pointer-events-none'}`}>
      <div
        className={`absolute inset-0 bg-black/20 transition-opacity ${open ? 'opacity-100' : 'opacity-0'}`}
        onClick={onClose}
      />
      <aside
        className={`absolute right-0 top-0 h-full w-[92%] sm:w-[420px] bg-white shadow-2xl ring-1 ring-pink-100 transition-transform ${open ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="p-5 flex items-center justify-between border-b border-pink-100">
          <h3 className="text-lg font-medium text-pink-900">Your Cart</h3>
          <button onClick={onClose} className="p-2 rounded-xl hover:bg-pink-50 text-pink-600">
            <X />
          </button>
        </div>
        <div className="p-5 space-y-4 overflow-y-auto h-[calc(100%-180px)]">
          {items.length === 0 && (
            <p className="text-pink-700/70">Your cart is empty.</p>
          )}
          {items.map((it) => (
            <div key={it.id} className="flex gap-3 items-center">
              <img src={it.image} alt={it.name} className="w-16 h-16 rounded-2xl object-cover" />
              <div className="flex-1">
                <p className="text-pink-900 font-medium">{it.name}</p>
                <p className="text-pink-700/80 text-sm">${it.price}</p>
              </div>
              <button onClick={() => onRemove?.(it.id)} className="p-2 rounded-xl hover:bg-pink-50 text-pink-600">
                <Trash size={18} />
              </button>
            </div>
          ))}
        </div>
        <div className="p-5 border-t border-pink-100 space-y-3">
          <div className="flex items-center justify-between text-pink-900">
            <span>Subtotal</span>
            <span className="font-semibold">${total.toFixed(2)}</span>
          </div>
          <button onClick={onCheckout} className="w-full rounded-full bg-pink-500 hover:bg-pink-600 text-white px-5 py-3 shadow-lg shadow-pink-200">
            Proceed to Checkout
          </button>
        </div>
      </aside>
    </div>
  )
}
