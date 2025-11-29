// src/components/customer/HomePage.jsx
export default function HomePage({ onBookNow }) {
  return (
    <section className="h-screen w-full flex items-center justify-center bg-linear-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="text-center px-4 max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-linear-to-r from-white to-slate-300 bg-clip-text text-transparent">
          Luksusowy Hotel
        </h1>
        <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
          Odkryj niezapomniane chwile w naszym ekskluzywnym hotelu. 
          Doskonała lokalizacja, luksusowe pokoje i niezrównany komfort.
        </p>
        <button 
          onClick={onBookNow}
          className="bg-indigo-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition-colors min-w-[200px]"
          // DODANE: min-w-[200px] - minimalna szerokość przycisku
        >
          Zarezerwuj teraz
        </button>
      </div>
    </section>
  )
}