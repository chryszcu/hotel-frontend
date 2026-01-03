// src\components\employee\pages\AdminRoomCleaning.jsx
import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { useTableSearchSort } from "../hook/useTableSearchSort";

const initialRoomsData = [
  { id: 5, people: "andrzej", status: "Wolny" },
  { id: 6, people: "zdzisalwa", status: "Sprzątanie" },
  { id: 7, people: "katarzyna", status: "Oczekujący" },
  { id: 8, people: "rysio", status: "Zajęty" },
];

const statusColors = {
  Wolny: "bg-emerald-500/15 text-emerald-400",
  Zajęty: "bg-red-500/15 text-red-400",
  Sprzątanie: "bg-amber-500/15 text-amber-400",
  Oczekujący: "bg-sky-500/15 text-sky-400",
};

export default function AdminRoomCleaning() {
  const [filter, setFilter] = useState("Wszystkie");

  // dane jako state (żeby dało się dodawać)
  const [rooms, setRooms] = useState(initialRoomsData);

  // modal + formularz
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form, setForm] = useState({
    id: "",
    people: "",
    status: "Wolny",
  });
  const [error, setError] = useState("");

  const {
    search,
    setSearch,
    handleSort,
    data: sortedData,
    renderSortIcon,
  } = useTableSearchSort({
    data: rooms,
    searchableFields: ["id", "people", "status"],
    defaultSortKey: "id",
    defaultSortDirection: "asc",
  });

  const filteredRooms =
    filter === "Wszystkie"
      ? sortedData
      : sortedData.filter((room) => room.status === filter);

  const statusOptions = useMemo(
    () => ["Wszystkie", "Wolny", "Zajęty", "Sprzątanie", "Oczekujący"],
    []
  );

  const openModal = () => {
    setError("");
    setForm({ id: "", people: "", status: "Wolny" });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setError("");
  };

  const handleChange = (key) => (e) => {
    setForm((prev) => ({ ...prev, [key]: e.target.value }));
  };

  const handleSave = () => {
    setError("");

    const idNum = Number(form.id);

    if (!Number.isInteger(idNum) || idNum <= 0) {
      setError("Podaj poprawny numer pokoju (liczba całkowita > 0).");
      return;
    }
    if (!form.people.trim()) {
      setError("Podaj imię/nazwę pracownika.");
      return;
    }
    if (rooms.some((r) => r.id === idNum)) {
      setError(`Pokój o numerze ${idNum} już istnieje na liście.`);
      return;
    }

    const newRow = {
      id: idNum,
      people: form.people.trim(),
      status: form.status,
    };

    setRooms((prev) => [...prev, newRow]);
    setIsModalOpen(false);
  };

  return (
    <section>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold">Lista i status pokoi</h1>
          <p className="text-sm text-slate-400">
            Lista pokoi oraz ich aktualny status w systemie.
          </p>
        </div>

        <button
          onClick={openModal}
          className="px-4 py-2 rounded-lg bg-indigo-500 hover:bg-indigo-600 text-sm font-medium text-white transition"
        >
          + Dodaj wpis
        </button>
      </div>

      {/* Wyszukiwarka + filtry */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <div className="relative w-full md:w-1/3">
          <input
            type="text"
            placeholder="Szukaj pokoju lub pracownika..."
            className="w-full rounded-lg bg-slate-800 border border-slate-700 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Filtry statusów */}
        <div className="flex gap-2 text-sm flex-wrap">
          {statusOptions.map((s) => (
            <button
              key={s}
              onClick={() => setFilter(s)}
              className={`px-3 py-1.5 rounded-lg border transition ${
                filter === s
                  ? "bg-indigo-600 border-indigo-600 text-white"
                  : "bg-slate-800 border-slate-700 text-slate-200 hover:bg-slate-700"
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      {/* Tabela pokoi */}
      <div className="overflow-hidden rounded-xl border border-slate-700 bg-slate-800/60">
        <table className="min-w-full text-sm">
          <thead className="bg-slate-800">
            <tr className="text-left text-slate-300">
              <th className="px-4 py-3">
                <button
                  type="button"
                  onClick={() => handleSort("id")}
                  className="inline-flex items-center gap-1 hover:text-white"
                >
                  Nr pokoju
                  {renderSortIcon("id")}
                </button>
              </th>

              <th className="px-4 py-3">
                <button
                  type="button"
                  onClick={() => handleSort("people")}
                  className="inline-flex items-center gap-1 hover:text-white"
                >
                  Przypisany pracownik
                  {renderSortIcon("people")}
                </button>
              </th>

              <th className="px-4 py-3">
                <button
                  type="button"
                  onClick={() => handleSort("status")}
                  className="inline-flex items-center gap-1 hover:text-white"
                >
                  Status
                  {renderSortIcon("status")}
                </button>
              </th>
            </tr>
          </thead>

          <tbody>
            {filteredRooms.length > 0 ? (
              filteredRooms.map((room) => (
                <tr
                  key={room.id}
                  className="border-t border-slate-700/60 hover:bg-slate-800/70 transition"
                >
                  <td className="px-4 py-3 text-slate-100">{room.id}</td>
                  <td className="px-4 py-3 text-slate-100">{room.people}</td>
                  <td className="px-4 py-3">
                    <span
                      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                        statusColors[room.status] ||
                        "bg-slate-700 text-slate-200"
                      }`}
                    >
                      {room.status}
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              <tr className="border-t border-slate-700/60">
                <td
                  colSpan="3"
                  className="px-4 py-6 text-center text-slate-400 italic"
                >
                  Brak wyników.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Modal dodawania wpisu */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="bg-slate-800 p-6 rounded-xl w-full max-w-md shadow-xl"
          >
            <h2 className="text-xl font-semibold mb-4">Dodaj wpis</h2>

            {error && (
              <div className="mb-3 rounded-lg border border-red-500/30 bg-red-500/10 px-3 py-2 text-sm text-red-200">
                {error}
              </div>
            )}

            <input
              type="number"
              placeholder="Nr pokoju (np. 101)"
              className="w-full p-3 rounded bg-slate-700 placeholder-slate-400 text-white mb-3"
              value={form.id}
              onChange={handleChange("id")}
            />

            <input
              type="text"
              placeholder="Pracownik (np. Katarzyna)"
              className="w-full p-3 rounded bg-slate-700 placeholder-slate-400 text-white mb-3"
              value={form.people}
              onChange={handleChange("people")}
            />

            <div className="mb-4">
              <label className="block text-sm mb-1 text-slate-300">Status</label>
              <select
                value={form.status}
                onChange={handleChange("status")}
                className="w-full p-3 rounded bg-slate-700 text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option>Wolny</option>
                <option>Zajęty</option>
                <option>Sprzątanie</option>
                <option>Oczekujący</option>
              </select>
            </div>

            <div className="flex justify-end gap-3 mt-4">
              <button
                onClick={closeModal}
                className="px-4 py-2 rounded-lg bg-slate-600 hover:bg-slate-500 transition"
              >
                Anuluj
              </button>

              <button
                onClick={handleSave}
                className="px-4 py-2 rounded-lg bg-indigo-500 hover:bg-indigo-600 transition text-white"
              >
                Zapisz
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
}
