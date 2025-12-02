import React, { useState } from "react";
import { useTableSearchSort } from "../hook/useTableSearchSort";

const roomsData = [
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

  const {
    search,
    setSearch,
    handleSort,
    data: sortedData,
    renderSortIcon,
  } = useTableSearchSort({
    data: roomsData,
    searchableFields: ["id", "people", "status"],
    defaultSortKey: "id",
    defaultSortDirection: "asc",
  });

  const filteredRooms =
    filter === "Wszystkie"
      ? sortedData
      : sortedData.filter((room) => room.status === filter);

  return (
    <section>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold">Lista i status pokoi</h1>
          <p className="text-sm text-slate-400">
            Lista pokoi oraz ich aktualny status w systemie.
          </p>
        </div>
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
        <div className="flex gap-2 text-sm">
          {["Wszystkie", "Wolny", "Zajęty", "Sprzątanie", "Oczekujący"].map(
            (s) => (
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
            )
          )}
        </div>
      </div>

      {/* Tabela pokoi */}
      <div className="overflow-hidden rounded-xl border border-slate-700 bg-slate-800/60">
        <table className="min-w-full text-sm">
          <thead className="bg-slate-800">
            <tr className="text-left text-slate-300">
              <th className="px-4 py-3">
                <button
                  onClick={() => handleSort("id")}
                  className="inline-flex items-center gap-1 hover:text-white"
                >
                  Nr pokoju
                  {renderSortIcon("id")}
                </button>
              </th>

              <th className="px-4 py-3">
                <button
                  onClick={() => handleSort("people")}
                  className="inline-flex items-center gap-1 hover:text-white"
                >
                  Przypisany pracownik
                  {renderSortIcon("people")}
                </button>
              </th>

              <th className="px-4 py-3">
                <button
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
                        statusColors[room.status]
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
    </section>
  );
}
