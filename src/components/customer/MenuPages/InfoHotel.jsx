export default function InfoHotel() {
  return (
    <div className="min-h-screen bg-transparent text-slate-900 px-6 py-24">
      <div className="max-w-4xl mx-auto">

        {/* Nagłówek */}
        <div className="mb-10 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold">
            O NASZYM HOTELU
          </h1>

          <div className="mt-5 flex justify-center">
            <span className="h-px w-24 bg-black/70" />
          </div>
        </div>

        {/* Tekst */}
        <p className="text-slate-600 text-lg leading-relaxed mb-6">
          Nasz hotel to połączenie komfortu, luksusu oraz nowoczesnego podejścia do wypoczynku.
          Oferujemy eleganckie pokoje, strefę SPA, restaurację premium oraz zaplecze konferencyjne,
          które spełni oczekiwania zarówno gości indywidualnych, jak i biznesowych.
        </p>

        <p className="text-slate-600 text-lg leading-relaxed mb-12">
          Położenie hotelu gwarantuje idealny dostęp do natury, szlaków spacerowych oraz lokalnych atrakcji.
          Dokładamy starań, aby każdy pobyt był niezapomniany i zapewniał najwyższy standard obsługi.
        </p>

        {/* Karty */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <div className="bg-white p-6 border border-slate-200 shadow-sm">
            <h3 className="font-heading text-xl font-semibold mb-2 text-[#C9A24D]">
              STREFA SPA
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Baseny, sauna, masaże oraz szeroki wybór zabiegów relaksacyjnych.
            </p>
          </div>

          <div className="bg-white p-6 border border-slate-200 shadow-sm">
            <h3 className="font-heading text-xl font-semibold mb-2 text-[#C9A24D]">
              KOMFORTOWE POKOJE
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Pokoje o wysokim standardzie z widokiem i nowoczesnym wyposażeniem.
            </p>
          </div>

          <div className="bg-white p-6 border border-slate-200 shadow-sm">
            <h3 className="font-heading text-xl font-semibold mb-2 text-[#C9A24D]">
              KONFERENCJE
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Obsługa eventów, sal konferencyjnych i szkoleń dla firm.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
