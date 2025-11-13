import { motion } from 'framer-motion'
import { ShoppingCart } from 'lucide-react'

export default function ProductCard({ product, onAdd }) {
  return (
    <motion.div
      layout
      whileHover={{ y: -4 }}
      className="group bg-white rounded-3xl overflow-hidden shadow-sm ring-1 ring-pink-100">
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
        />
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="font-medium text-pink-900">{product.name}</h3>
            <p className="text-pink-600/80 text-sm">${product.price}</p>
          </div>
          <button
            onClick={() => onAdd?.(product)}
            className="shrink-0 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-pink-400 to-pink-500 text-white px-4 py-2 shadow-lg shadow-pink-200 hover:from-pink-500 hover:to-pink-600"
          >
            <ShoppingCart size={16} />
            Add
          </button>
        </div>
      </div>
    </motion.div>
  )
}
