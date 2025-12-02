import React from "react";

const AdminRooms = () => {
  return (
    <section>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold">Lista i status pokoi</h1>
          <p className="text-sm text-slate-400">
            Lista użytkowników, klientów i gości korzystających z systemu.
          </p>
        </div>
      </div>

      {/* Pasek wyszukiwania / filtrów */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <div className="relative w-full md:w-1/3">
          <input
            type="text"
            placeholder="Szukaj pokoju"
            className="w-full rounded-lg bg-slate-800 border border-slate-700 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div className="flex gap-2 text-sm">
          <button className="px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-slate-200 hover:bg-slate-700 transition">
            Wszystkie
          </button>
          <button className="px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-slate-200 hover:bg-slate-700 transition">
            Wolne
          </button>
          <button className="px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-slate-200 hover:bg-slate-700 transition">
            Zajęte
          </button>
          <button className="px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-slate-200 hover:bg-slate-700 transition">
            Oczekujące
          </button>
        </div>
      </div>

      {/* Tabela pokoi */}
      <div className="overflow-hidden rounded-xl border border-slate-700 bg-slate-800/60">
        <table className="min-w-full text-sm">
          <thead className="bg-slate-800">
            <tr className="text-left text-slate-300">
              <th className="px-4 py-3">Nr pokoju</th>
              <th className="px-4 py-3">Nazwa</th>
              <th className="px-4 py-3">Iloososobowy</th>
              <th className="px-4 py-3">Typ</th>
              <th className="px-4 py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t border-slate-700/60 hover:bg-slate-800/70 transition">
              <td className="px-4 py-3 text-slate-100">5</td>
              <td className="px-4 py-3 text-slate-300">
                Pokój dwuosobowy classic
              </td>
              <td className="px-4 py-3 text-slate-100">2</td>
              <td className="px-4 py-3 text-slate-300">Standard</td>
              <td className="px-4 py-3">
                <span className="inline-flex items-center rounded-full bg-emerald-500/15 px-2.5 py-0.5 text-xs font-medium text-emerald-400">
                  Wolny
                </span>
              </td>
            </tr>

            <tr className="border-t border-slate-700/60 hover:bg-slate-800/70 transition">
              <td className="px-4 py-3 text-slate-100">6</td>
              <td className="px-4 py-3 text-slate-300">
                Pokój czteroosobowy deluxe
              </td>
              <td className="px-4 py-3 text-slate-100">4</td>
              <td className="px-4 py-3 text-slate-300">Deluxe</td>
              <td className="px-4 py-3">
                <span className="inline-flex items-center rounded-full bg-amber-500/15 px-2.5 py-0.5 text-xs font-medium text-amber-400">
                  Sprzątanie
                </span>
              </td>
            </tr>

            <tr className="border-t border-slate-700/60 hover:bg-slate-800/70 transition">
              <td className="px-4 py-3 text-slate-100">7</td>
              <td className="px-4 py-3 text-slate-300">
                Apartament pałacowy czteroosobowy
              </td>
              <td className="px-4 py-3 text-slate-100">4</td>
              <td className="px-4 py-3 text-slate-300">Apartament</td>
              <td className="px-4 py-3">
                <span className="inline-flex items-center rounded-full bg-sky-500/15 px-2.5 py-0.5 text-xs font-medium text-sky-400">
                  Oczekujący
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default AdminRooms;
