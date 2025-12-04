export default function Rooms() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 px-6 py-24">
      <div className="max-w-5xl mx-auto">

        <h1 className="text-4xl font-bold mb-8 text-amber-400">
          Nasze Pokoje
        </h1>

        <p className="text-slate-300 text-lg leading-relaxed mb-10">
          W naszym hotelu oferujemy różnorodne pokoje – od standardowych po luksusowe apartamenty.
          Każdy pokój został zaprojektowany z dbałością o komfort, estetykę i nowoczesne udogodnienia,
          aby zapewnić idealne warunki do wypoczynku.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <div className="bg-slate-800 rounded-xl border border-slate-700 p-6 shadow-lg">
            <h3 className="text-2xl font-semibold text-indigo-400 mb-3">Pokój Standard</h3>
            <p className="text-slate-400 text-sm mb-4">
              Idealny dla osób podróżujących służbowo lub turystycznie. Wyposażony w wygodne łóżko,
              biurko oraz prywatną łazienkę.
            </p>
            <p className="text-slate-300 font-semibold">Cena: 249 zł / noc</p>
          </div>

          <div className="bg-slate-800 rounded-xl border border-slate-700 p-6 shadow-lg">
            <h3 className="text-2xl font-semibold text-indigo-400 mb-3">Pokój Deluxe</h3>
            <p className="text-slate-400 text-sm mb-4">
              Przestronny pokój z widokiem, dużym łóżkiem king-size oraz dostępem do minibaru.
            </p>
            <p className="text-slate-300 font-semibold">Cena: 399 zł / noc</p>
          </div>

          <div className="bg-slate-800 rounded-xl border border-slate-700 p-6 shadow-lg">
            <h3 className="text-2xl font-semibold text-indigo-400 mb-3">Apartament Premium</h3>
            <p className="text-slate-400 text-sm mb-4">
              Luksusowy apartament z salonem, sypialnią oraz prywatnym jacuzzi. Idealny na wyjątkowe okazje.
            </p>
            <p className="text-slate-300 font-semibold">Cena: 699 zł / noc</p>
          </div>

        </div>
      </div>
    </div>
  )
}