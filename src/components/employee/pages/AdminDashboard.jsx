import React from "react";

const AdminDashboard = ({ setSelected }) => {
  return (
    <section>
      <h1 className="text-3xl font-bold mb-6">DashBoard</h1>

      {/* GRID Z KAFELKAMI */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-12 mb-8">
        {/* Kafelek 1 */}
        <div
          onClick={() => setSelected("Lista pokoi")}
          className="bg-slate-800 rounded-xl p-16 shadow-lg border border-slate-700 cursor-pointer hover:bg-slate-700 transition"
        >
          <p className="text-l text-slate-400 cente">Obłożenie pokoi</p>
          <p className="mt-2 text-4xl font-bold text-indigo-400">82%</p>
          <p className="mt-1 text-xs text-emerald-400">+5% vs wczoraj</p>
        </div>

        {/* Kafelek 2 */}
        <div
          onClick={() => setSelected("Sprzątanie")}
          className="bg-slate-800 rounded-xl p-16 shadow-lg border border-slate-700 cursor-pointer hover:bg-slate-700 transition"
        >
          <p className="text-l text-slate-400">Dzisiejszy przychód</p>
          <p className="mt-2 text-4xl font-bold text-emerald-400">12 350 zł</p>
          <p className="mt-1 text-xs text-slate-400">
            z rezerwacji online i na recepcji
          </p>
        </div>

        {/* Kafelek 3 */}
        <div
          onClick={() => setSelected("Członkowie")}
          className="bg-slate-800 rounded-xl p-16 shadow-lg border border-slate-700 cursor-pointer hover:bg-slate-700 transition"
        >
          <p className="text-l text-slate-400">Goście w hotelu</p>
          <p className="mt-2 text-4xl font-bold text-sky-400">74</p>
          <p className="mt-1 text-xs text-slate-400">z 90 dostępnych miejsc</p>
        </div>

        {/* Kafelek 4 */}
        <div className="bg-slate-800 rounded-xl p-16 shadow-lg border border-slate-700">
          <p className="text-l text-slate-400">Dzisiejsze check-iny</p>
          <p className="mt-2 text-4xl font-bold text-amber-400">9</p>
          <p className="mt-1 text-xs text-slate-400">3 jeszcze oczekuje</p>
        </div>
      </div>

      {/* Dalsza część dashboardu – np. tabelki / wykresy */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-12">
        <div className="xl:col-span-2 bg-slate-800 rounded-xl p-16 border border-slate-700">
          <h2 className="text-2xl font-semibold mb-2">Dzisiejsze operacje</h2>
          <p className="text-l text-slate-400">
            Tu możesz później dodać listę dzisiejszych przyjazdów i wyjazdów.
          </p>
        </div>
        <div className="bg-slate-800 rounded-xl p-16 border border-slate-700">
          <h2 className="text-2xl font-semibold mb-2">Alerty</h2>
          <ul className="text-l text-slate-300 list-disc list-inside space-y-1">
            <li>2 pokoje oznaczone jako "do sprzątania"</li>
            <li>1 pokój zgłoszony jako "usterka"</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AdminDashboard;
