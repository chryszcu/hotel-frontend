// src\components\employee\pages\AdminRooms.jsx
import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { useTableSearchSort } from "../hook/useTableSearchSort";

const initialRoomsData = [
  {
    id: 5,
    name: "Pokój dwuosobowy classic",
    capacity: 2,
    type: "Standard",
    status: "Wolny",
  },
  {
    id: 6,
    name: "Pokój czteroosobowy deluxe",
    capacity: 4,
    type: "Deluxe",
    status: "Sprzątanie",
  },
  {
    id: 7,
    name: "Apartament pałacowy czteroosobowy",
    capacity: 4,
    type: "Apartament",
    status: "Oczekujący",
  },
];

const statusColors = {
  Wolny: "bg-emerald-500/15 text-emerald-400",
  Zajęty: "bg-red-500/15 text-red-400",
  Sprzątanie: "bg-amber-500/15 text-amber-400",
  Oczekujący: "bg-sky-500/15 text-sky-400",
};

const roomTypes = ["Standard", "Deluxe", "Apartament"];

const AdminRooms = () => {
  const [filter, setFilter] = useState("Wszystkie");

  // dane jako state, żeby dało się dodawać
  const [rooms, setRooms] = useState(initialRoomsData);

  // modal + formularz
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form, setForm] = useState({
    id: "",
    name: "",
    capacity: "",
    type: "",
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
    searchableFields: ["id", "name", "capacity", "type", "status"],
    defaultSortKey: "id",
    defaultSortDirection: "asc",
  });

  const filteredByStatus =
    filter === "Wszystkie"
      ? sortedData
      : sortedData.filter((room) => room.status === filter);

  const statusOptions = useMemo(
    () => ["Wszystkie", "Wolny", "Zajęty", "Sprzątanie", "Oczekujący"],
    []
  );

  const openModal = () => {
    setError("");
    setForm({
      id: "",
      name: "",
      capacity: "",
      type: "",
      status: "Wolny",
    });
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
    const capNum = Number(form.capacity);

    if (!Number.isInteger(idNum) || idNum <= 0) {
      setError("Podaj poprawny numer pokoju (liczba całkowita > 0).");
      return;
    }
    if (!form.name.trim()) {
      setError("Podaj nazwę pokoju.");
      return;
    }
    if (!Number.isInteger(capNum) || capNum <= 0) {
      setError("Podaj poprawną pojemność (liczba całkowita > 0).");
      return;
    }
    if (!form.type.trim()) {
      setError("Podaj typ pokoju (np. Standard/Deluxe/Apartament).");
      return;
    }
    if (rooms.some((r) => r.id === idNum)) {
      setError(`Pokój o numerze ${idNum} już istnieje.`);
      return;
    }

    const newRoom = {
      id: idNum,
      name: form.name.trim(),
      capacity: capNum,
      type: form.type.trim(),
      status: form.status,
    };

    setRooms((prev) => [...prev, newRoom]);
    setIsModalOpen(false);
  };

  return (
    <section>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold">Lista i status pokoi</h1>
          <p className="text-sm text-slate-400">
            Lista pokoi hotelowych oraz ich aktualny status.
          </p>
        </div>

        <button
          onClick={openModal}
          className="px-4 py-2 rounded-lg bg-indigo-500 hover:bg-indigo-600 text-sm font-medium text-white transition"
        >
          + Dodaj pokój
        </button>
      </div>

      {/* Pasek wyszukiwania / filtrów */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <div className="relative w-full md:w-1/3">
          <input
            type="text"
            placeholder="Szukaj po numerze, nazwie, typie, statusie..."
            className="w-full rounded-lg bg-slate-800 border border-slate-700 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="flex flex-wrap gap-2 text-sm">
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
                  onClick={() => handleSort("name")}
                  className="inline-flex items-center gap-1 hover:text-white"
                >
                  Nazwa
                  {renderSortIcon("name")}
                </button>
              </th>
              <th className="px-4 py-3">
                <button
                  type="button"
                  onClick={() => handleSort("capacity")}
                  className="inline-flex items-center gap-1 hover:text-white"
                >
                  Iloosoobowy
                  {renderSortIcon("capacity")}
                </button>
              </th>
              <th className="px-4 py-3">
                <button
                  type="button"
                  onClick={() => handleSort("type")}
                  className="inline-flex items-center gap-1 hover:text-white"
                >
                  Typ
                  {renderSortIcon("type")}
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
            {filteredByStatus.length > 0 ? (
              filteredByStatus.map((room) => (
                <tr
                  key={room.id}
                  className="border-t border-slate-700/60 hover:bg-slate-800/70 transition"
                >
                  <td className="px-4 py-3 text-slate-100">{room.id}</td>
                  <td className="px-4 py-3 text-slate-300">{room.name}</td>
                  <td className="px-4 py-3 text-slate-100">{room.capacity}</td>
                  <td className="px-4 py-3 text-slate-300">{room.type}</td>
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
                  colSpan="5"
                  className="px-4 py-6 text-center text-slate-400 italic"
                >
                  Brak wyników.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Modal dodawania pokoju */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="bg-slate-800 p-6 rounded-xl w-full max-w-md shadow-xl"
          >
            <h2 className="text-xl font-semibold mb-4">Dodaj pokój</h2>

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
              placeholder="Nazwa (np. Pokój dwuosobowy classic)"
              className="w-full p-3 rounded bg-slate-700 placeholder-slate-400 text-white mb-3"
              value={form.name}
              onChange={handleChange("name")}
            />

            <input
              type="number"
              placeholder="Ilość osób (np. 2)"
              className="w-full p-3 rounded bg-slate-700 placeholder-slate-400 text-white mb-3"
              value={form.capacity}
              onChange={handleChange("capacity")}
            />

            <div className="mb-4">
  <label className="block text-sm mb-1 text-slate-300">
    Typ pokoju
  </label>
  <select
    value={form.type}
    onChange={handleChange("type")}
    className="w-full p-3 rounded bg-slate-700 text-white text-sm
               focus:outline-none focus:ring-2 focus:ring-indigo-500"
  >
    <option value="">— wybierz typ —</option>
    {roomTypes.map((type) => (
      <option key={type} value={type}>
        {type}
      </option>
    ))}
  </select>
</div>

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
};

export default AdminRooms;
