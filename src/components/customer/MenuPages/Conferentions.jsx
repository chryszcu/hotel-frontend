export default function Conferentions() {
  return (
    <div className="min-h-screen bg-transparent text-slate-900 px-6 py-24">
      <div className="max-w-5xl mx-auto">

        {/* Nagłówek */}
        <div className="mb-10 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold">
            KONFERENCJE I EVENTY
          </h1>
          <div className="mt-5 flex justify-center">
            <span className="h-px w-24 bg-black/70" />
          </div>
        </div>

        <p className="text-slate-600 text-lg leading-relaxed mb-12 max-w-3xl mx-auto text-center">
          Nasze centrum konferencyjne oferuje nowoczesne sale, pełne wyposażenie multimedialne
          oraz profesjonalną obsługę techniczną. To idealne miejsce na szkolenia, prezentacje,
          spotkania biznesowe oraz eventy firmowe.
        </p>

        {/* Karty sal */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <div className="bg-white border border-slate-200 shadow-sm p-6">
            <h3 className="font-heading text-2xl font-semibold text-[#C9A24D] mb-3">
              SALA BIZNESOWA
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              Przestrzeń dla 20–30 osób z ekranem projekcyjnym i szybkim Wi-Fi.
            </p>
            <div className="pt-4 border-t border-slate-200 flex justify-between items-center">
              <p className="font-semibold text-slate-900">
                299 zł / godz.
              </p>
              <span
                className="
                  text-sm font-semibold
                  border border-[#C9A24D]/70
                  px-4 py-1.5
                "
              >
                <span className="text-[#C9A24D]">Wybierz</span>
              </span>
            </div>
          </div>

          <div className="bg-white border border-slate-200 shadow-sm p-6">
            <h3 className="font-heading text-2xl font-semibold text-[#C9A24D] mb-3">
              SALA KONFERENCYJNA
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              Idealna na większe prezentacje i szkolenia, pomieści do 80 osób.
            </p>
            <div className="pt-4 border-t border-slate-200 flex justify-between items-center">
              <p className="font-semibold text-slate-900">
                499 zł / godz.
              </p>
              <span
                className="
                  text-sm font-semibold
                  border border-[#C9A24D]/70
                  px-4 py-1.5
                "
              >
                <span className="text-[#C9A24D]">Wybierz</span>
              </span>
            </div>
          </div>

          <div className="bg-white border border-slate-200 shadow-sm p-6">
            <h3 className="font-heading text-2xl font-semibold text-[#C9A24D] mb-3">
              SALA PREMIUM
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              Luksusowa przestrzeń z nagłośnieniem, oświetleniem sceny i obsługą techniczną.
            </p>
            <div className="pt-4 border-t border-slate-200 flex justify-between items-center">
              <p className="font-semibold text-slate-900">
                799 zł / godz.
              </p>
              <span
                className="
                  text-sm font-semibold
                  border border-[#C9A24D]/70
                  px-4 py-1.5
                "
              >
                <span className="text-[#C9A24D]">Wybierz</span>
              </span>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
