import { categories } from '../products'

export default function CategoryBar({ active, onChange }) {
  return (
    <div className="flex gap-2 overflow-x-auto no-scrollbar py-2">
      {categories.map(c => (
        <button
          key={c.id}
          onClick={() => onChange?.(c.id)}
          className={
            'px-4 py-2 rounded-full text-sm whitespace-nowrap transition ' +
            (active === c.id
              ? 'bg-pink-500 text-white shadow'
              : 'bg-white text-pink-700 ring-1 ring-pink-200 hover:bg-pink-50')
          }
        >
          {c.label}
        </button>
      ))}
    </div>
  )
}
