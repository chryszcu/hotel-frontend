export default function SPA() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 px-6 py-24">
      <div className="max-w-5xl mx-auto">

        <h1 className="text-4xl font-bold mb-8 text-purple-400">
          Strefa SPA
        </h1>

        <p className="text-slate-300 text-lg leading-relaxed mb-10">
          Zapraszamy do wyjątkowej strefy relaksu, w której oferujemy szeroki wybór zabiegów,
          masaży oraz udogodnień. Nasze SPA to idealne miejsce na regenerację ciała i odprężenie umysłu.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <div className="bg-slate-800 rounded-xl border border-slate-700 p-6 shadow-lg">
            <h3 className="text-2xl font-semibold text-indigo-400 mb-3">Masaż relaksacyjny</h3>
            <p className="text-slate-400 text-sm mb-4">
              Delikatny masaż odprężający, który pomoże Ci się wyciszyć i zregenerować.
            </p>
            <p className="text-slate-300 font-semibold">Cena: 199 zł / 60 min</p>
          </div>

          <div className="bg-slate-800 rounded-xl border border-slate-700 p-6 shadow-lg">
            <h3 className="text-2xl font-semibold text-indigo-400 mb-3">Sauna & Wellness</h3>
            <p className="text-slate-400 text-sm mb-4">
              Do dyspozycji gości znajduje się sauna sucha, parowa oraz jacuzzi.
            </p>
            <p className="text-slate-300 font-semibold">Cena: 79 zł / wejście</p>
          </div>

          <div className="bg-slate-800 rounded-xl border border-slate-700 p-6 shadow-lg">
            <h3 className="text-2xl font-semibold text-indigo-400 mb-3">Zabiegi na twarz</h3>
            <p className="text-slate-400 text-sm mb-4">
              Profesjonalne zabiegi pielęgnacyjne, nawilżające i regenerujące skórę.
            </p>
            <p className="text-slate-300 font-semibold">Cena: od 149 zł</p>
          </div>

        </div>

      </div>
    </div>
  );
}
