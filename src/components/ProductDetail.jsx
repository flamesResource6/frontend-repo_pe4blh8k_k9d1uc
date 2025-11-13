import { motion, AnimatePresence } from 'framer-motion'

export default function ProductDetail({ product, open, onClose, onAdd }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="absolute inset-0 bg-black/20" onClick={onClose} />
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', stiffness: 120, damping: 18 }}
            className="absolute bottom-0 left-0 right-0 bg-white rounded-t-3xl shadow-2xl ring-1 ring-pink-100 max-h-[90%] overflow-y-auto"
          >
            <div className="p-5">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
              </div>
              <div className="mt-4 flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-serif text-pink-900">{product.name}</h3>
                  <p className="text-pink-700/80">${product.price}</p>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-sm text-pink-700/80">{product.description}</p>
              </div>
              <div className="mt-5">
                <p className="text-sm text-pink-900 mb-2">Size</p>
                <div className="flex gap-2">
                  {['Petite', 'Classic', 'Grand'].map((s) => (
                    <button key={s} className="px-4 py-2 rounded-full bg-white ring-1 ring-pink-200 text-pink-700 hover:bg-pink-50">
                      {s}
                    </button>
                  ))}
                </div>
              </div>
              <div className="mt-6 flex gap-3">
                <button onClick={() => onAdd?.(product)} className="flex-1 rounded-full bg-pink-500 hover:bg-pink-600 text-white px-5 py-3 shadow-lg shadow-pink-200">
                  Add to Cart
                </button>
                <button className="flex-1 rounded-full bg-white ring-1 ring-pink-200 text-pink-700 px-5 py-3">
                  Buy Now
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
