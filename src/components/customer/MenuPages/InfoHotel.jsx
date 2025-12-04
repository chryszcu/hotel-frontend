export default function InfoHotel() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 px-6 py-24">
      <div className="max-w-4xl mx-auto">

        <h1 className="text-4xl font-bold mb-6 text-indigo-400">
          O naszym hotelu
        </h1>

        <p className="text-slate-300 text-lg leading-relaxed mb-6">
          Nasz hotel to połączenie komfortu, luksusu oraz nowoczesnego podejścia do wypoczynku.
          Oferujemy eleganckie pokoje, strefę SPA, restaurację premium oraz zaplecze konferencyjne,
          które spełni oczekiwania zarówno gości indywidualnych, jak i biznesowych.
        </p>

        <p className="text-slate-300 text-lg leading-relaxed mb-6">
          Położenie hotelu gwarantuje idealny dostęp do natury, szlaków spacerowych oraz lokalnych atrakcji.
          Dokładamy starań, aby każdy pobyt był niezapomniany i zapewniał najwyższy standard obsługi.
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">

          <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 shadow">
            <h3 className="text-xl font-semibold mb-2">Strefa SPA</h3>
            <p className="text-slate-400 text-sm">
              Baseny, sauna, masaże oraz szeroki wybór zabiegów relaksacyjnych.
            </p>
          </div>

          <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 shadow">
            <h3 className="text-xl font-semibold mb-2">Komfortowe pokoje</h3>
            <p className="text-slate-400 text-sm">
              Pokoje o wysokim standardzie z widokiem i nowoczesnym wyposażeniem.
            </p>
          </div>

          <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 shadow">
            <h3 className="text-xl font-semibold mb-2">Konferencje</h3>
            <p className="text-slate-400 text-sm">
              Obsługa eventów, sal konferencyjnych i szkoleń dla firm.
            </p>
          </div>

        </div>
      </div>
    </div>
  )
}