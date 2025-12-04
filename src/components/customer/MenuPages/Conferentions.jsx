export default function Conferentions() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 px-6 py-24">
      <div className="max-w-5xl mx-auto">

        <h1 className="text-4xl font-bold mb-8 text-green-400">
          Konferencje i Eventy
        </h1>

        <p className="text-slate-300 text-lg leading-relaxed mb-10">
          Nasze centrum konferencyjne oferuje nowoczesne sale, pełne wyposażenie multimedialne
          oraz profesjonalną obsługę techniczną. Idealne miejsce na szkolenia, prezentacje,
          spotkania biznesowe oraz większe eventy firmowe.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <div className="bg-slate-800 rounded-xl border border-slate-700 p-6 shadow-lg">
            <h3 className="text-2xl font-semibold text-indigo-400 mb-3">Sala Biznesowa</h3>
            <p className="text-slate-400 text-sm mb-4">
              Przestrzeń dla 20–30 osób z ekranem projekcyjnym i szybkim Wi-Fi.
            </p>
            <p className="text-slate-300 font-semibold">Cena: 299 zł / godz.</p>
          </div>

          <div className="bg-slate-800 rounded-xl border border-slate-700 p-6 shadow-lg">
            <h3 className="text-2xl font-semibold text-indigo-400 mb-3">Sala Konferencyjna</h3>
            <p className="text-slate-400 text-sm mb-4">
              Idealna na większe prezentacje i szkolenia, pomieści do 80 osób.
            </p>
            <p className="text-slate-300 font-semibold">Cena: 499 zł / godz.</p>
          </div>

          <div className="bg-slate-800 rounded-xl border border-slate-700 p-6 shadow-lg">
            <h3 className="text-2xl font-semibold text-indigo-400 mb-3">Sala Premium</h3>
            <p className="text-slate-400 text-sm mb-4">
              Luksusowa przestrzeń z nagłośnieniem, oświetleniem sceny i obsługą techniczną.
            </p>
            <p className="text-slate-300 font-semibold">Cena: 799 zł / godz.</p>
          </div>

        </div>

      </div>
    </div>
  );
}