import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative h-[360px] sm:h-[420px] rounded-3xl overflow-hidden shadow-md">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/Tu-wEVxfDuICpwJI/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative z-10 h-full flex items-center">
        <div className="px-6 sm:px-10">
          <div className="inline-block rounded-full bg-pink-100/70 text-pink-700 text-xs px-3 py-1 mb-3">New Season</div>
          <h1 className="text-4xl sm:text-5xl font-serif text-pink-800 leading-tight drop-shadow-[0_2px_12px_rgba(255,192,203,0.35)]">
            Bloom into
            <br />
            something beautiful
          </h1>
          <p className="mt-3 text-pink-700/80 max-w-md">
            Curated bouquets for gentle moments — roses, tulips, lilies and more in pastel harmony.
          </p>
          <div className="mt-6 flex gap-3">
            <button className="rounded-full bg-pink-500 hover:bg-pink-600 text-white px-5 py-2.5 shadow-lg shadow-pink-200 transition-transform hover:-translate-y-0.5">
              Shop Now
            </button>
            <button className="rounded-full bg-white/80 hover:bg-white text-pink-700 ring-1 ring-pink-200 px-5 py-2.5 backdrop-blur">
              Explore Collections
            </button>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-pink-50/80 via-pink-50/20 to-transparent" />
    </section>
  )
}
