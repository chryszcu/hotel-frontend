import React, { useState } from "react";
import { motion } from "framer-motion";

const AdminMembers = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [memberType, setMemberType] = useState("Gość");

  return (
    <section>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold">Członkowie</h1>
          <p className="text-sm text-slate-400">
            Lista użytkowników, klientów i gości korzystających z systemu.
          </p>
        </div>

        <button
          onClick={() => setIsModalOpen(true)}
          className="px-4 py-2 rounded-lg bg-indigo-500 hover:bg-indigo-600 text-sm font-medium text-white transition"
        >
          + Dodaj członka
        </button>
      </div>

      {/* Pasek wyszukiwania / filtrów */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <div className="relative w-full md:w-1/3">
          <input
            type="text"
            placeholder="Szukaj po imieniu, nazwisku lub e-mailu..."
            className="w-full rounded-lg bg-slate-800 border border-slate-700 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div className="flex gap-2 text-sm">
          <button className="px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-slate-200 hover:bg-slate-700 transition">
            Wszyscy
          </button>
          <button className="px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-slate-200 hover:bg-slate-700 transition">
            Goście
          </button>
          <button className="px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-slate-200 hover:bg-slate-700 transition">
            Pracownicy
          </button>
          <button className="px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-slate-200 hover:bg-slate-700 transition">
            Admini
          </button>
        </div>
      </div>

      {/* Tabela członków */}
      <div className="overflow-hidden rounded-xl border border-slate-700 bg-slate-800/60">
        <table className="min-w-full text-sm">
          <thead className="bg-slate-800">
            <tr className="text-left text-slate-300">
              <th className="px-4 py-3">Imię i nazwisko</th>
              <th className="px-4 py-3">E-mail</th>
              <th className="px-4 py-3">Typ</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Ostatni pobyt</th>
              <th className="px-4 py-3 text-right">Rezerwacje</th>
            </tr>
          </thead>
          <tbody>
            {/* Wiersz 1 */}
            <tr className="border-t border-slate-700/60 hover:bg-slate-800/70 transition">
              <td className="px-4 py-3 text-slate-100">Dawid Dąbrowski</td>
              <td className="px-4 py-3 text-slate-300">
                dawid.dabrowski@example.com
              </td>
              <td className="px-4 py-3 text-slate-300">Gość</td>
              <td className="px-4 py-3">
                <span className="inline-flex items-center rounded-full bg-emerald-500/15 px-2.5 py-0.5 text-xs font-medium text-emerald-400">
                  Aktywny
                </span>
              </td>
              <td className="px-4 py-3 text-slate-300">
                12.10.2025 – 15.10.2025
              </td>
              <td className="px-4 py-3 text-right text-slate-100">5</td>
            </tr>

            {/* Wiersz 2 */}
            <tr className="border-t border-slate-700/60 hover:bg-slate-800/70 transition">
              <td className="px-4 py-3 text-slate-100">Agata Bronk</td>
              <td className="px-4 py-3 text-slate-300">
                agata.bronk@example.com
              </td>
              <td className="px-4 py-3 text-slate-300">Gość</td>
              <td className="px-4 py-3">
                <span className="inline-flex items-center rounded-full bg-amber-500/15 px-2.5 py-0.5 text-xs font-medium text-amber-400">
                  Oczekuje
                </span>
              </td>
              <td className="px-4 py-3 text-slate-300">
                Zaplanowany: 24.11.2025
              </td>
              <td className="px-4 py-3 text-right text-slate-100">2</td>
            </tr>

            {/* Wiersz 3 */}
            <tr className="border-t border-slate-700/60 hover:bg-slate-800/70 transition">
              <td className="px-4 py-3 text-slate-100">
                Jakub Chryszczanowicz
              </td>
              <td className="px-4 py-3 text-slate-300">admin@example.com</td>
              <td className="px-4 py-3 text-slate-300">Admin</td>
              <td className="px-4 py-3">
                <span className="inline-flex items-center rounded-full bg-sky-500/15 px-2.5 py-0.5 text-xs font-medium text-sky-400">
                  Wewnętrzny
                </span>
              </td>
              <td className="px-4 py-3 text-slate-300">–</td>
              <td className="px-4 py-3 text-right text-slate-100">—</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Modal Dodawania członka */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="bg-slate-800 p-6 rounded-xl w-full max-w-md shadow-xl"
          >
            <h2 className="text-xl font-semibold mb-4">Dodaj członka</h2>

            <input
              type="text"
              placeholder="Imię i nazwisko"
              className="w-full p-3 rounded bg-slate-700 placeholder-slate-400 text-white mb-3"
            />

            <input
              type="email"
              placeholder="E-mail"
              className="w-full p-3 rounded bg-slate-700 placeholder-slate-400 text-white mb-3"
            />

            {/* Typ członka */}
            <div className="mb-4">
              <label className="block text-sm mb-1 text-slate-300">
                Typ członka
              </label>
              <select
                value={memberType}
                onChange={(e) => setMemberType(e.target.value)}
                className="w-full p-3 rounded bg-slate-700 text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option>Gość</option>
                <option>Pracownik</option>
                <option>Admin</option>
              </select>
            </div>

            <div className="flex justify-end gap-3 mt-4">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 rounded-lg bg-slate-600 hover:bg-slate-500 transition"
              >
                Anuluj
              </button>

              <button className="px-4 py-2 rounded-lg bg-indigo-500 hover:bg-indigo-600 transition">
                Zapisz
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default AdminMembers;
