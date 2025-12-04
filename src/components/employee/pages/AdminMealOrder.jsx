import React, { useState } from "react";
import BackButton from "../components/BackButton";

const DEMO_ROOMS = [
  { id: "101", label: "Pokój 101 – 2 os. standard" },
  { id: "203", label: "Pokój 203 – 3 os. deluxe" },
  { id: "305", label: "Pokój 305 – apartament" },
];

export default function AdminMealOrder({ onBack }) {
  const [form, setForm] = useState({
    roomId: "",
    guestName: "",
    mealType: "breakfast",
    quantity: 1,
    date: "",
    time: "",
    notes: "",
    deliverToRoom: true,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Zamówienie posiłku:", form);
    alert("Posiłek został przypisany do pokoju (mock).");

    // tu później wyślesz do backendu
  };

  return (
    <div className="p-8 text-slate-100">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold">Zamówienie posiłku</h1>
          <p className="text-sm text-slate-400">
            Wybierz pokój i dodaj posiłek do rachunku gościa.
          </p>
        </div>
        <BackButton onClick={onBack} label="Powrót" />
      </div>

      <form
        onSubmit={handleSubmit}
        className="bg-slate-800/70 border border-slate-700 rounded-xl p-8 grid grid-cols-1 lg:grid-cols-2 gap-8"
      >
        {/* LEWA KOLUMNA – pokój / gość */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold">Dane pokoju / gościa</h2>

          <div>
            <label className="block text-xs text-slate-300 mb-1">Pokój</label>
            <select
              name="roomId"
              value={form.roomId}
              onChange={handleChange}
              className="w-full rounded-lg bg-slate-900 border border-slate-700 px-3 py-2 text-sm text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            >
              <option value="">Wybierz pokój…</option>
              {DEMO_ROOMS.map((room) => (
                <option key={room.id} value={room.id}>
                  {room.label}
                </option>
              ))}
            </select>
            <p className="text-[10px] text-slate-500 mt-1">
              Docelowo możesz tu podpiąć listę pokoi / rezerwacji z backendu.
            </p>
          </div>

          <div>
            <label className="block text-xs text-slate-300 mb-1">
              Imię i nazwisko gościa (opcjonalnie)
            </label>
            <input
              type="text"
              name="guestName"
              value={form.guestName}
              onChange={handleChange}
              className="w-full rounded-lg bg-slate-900 border border-slate-700 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500"
              placeholder="np. Jan Kowalski"
            />
          </div>

          <div className="flex items-center gap-2 mt-2">
            <input
              id="deliverToRoom"
              type="checkbox"
              name="deliverToRoom"
              checked={form.deliverToRoom}
              onChange={handleChange}
              className="w-4 h-4"
            />
            <label htmlFor="deliverToRoom" className="text-xs text-slate-300">
              Dostawa do pokoju (room service)
            </label>
          </div>
        </div>

        {/* PRAWA KOLUMNA – posiłek */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold">Szczegóły posiłku</h2>

          <div>
            <label className="block text-xs text-slate-300 mb-1">
              Numer z menu
            </label>
            <select
              name="mealType"
              value={form.mealType}
              onChange={handleChange}
              className="w-full rounded-lg bg-slate-900 border border-slate-700 px-3 py-2 text-sm text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="breakfast">1</option>
              <option value="lunch">2</option>
              <option value="dinner">3</option>
              <option value="roomService">4</option>
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs text-slate-300 mb-1">Data</label>
              <input
                type="date"
                name="date"
                value={form.date}
                onChange={handleChange}
                className="w-full rounded-lg bg-slate-900 border border-slate-700 px-3 py-2 text-sm text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>

            <div>
              <label className="block text-xs text-slate-300 mb-1">
                Godzina
              </label>
              <input
                type="time"
                name="time"
                value={form.time}
                onChange={handleChange}
                className="w-full rounded-lg bg-slate-900 border border-slate-700 px-3 py-2 text-sm text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-xs text-slate-300 mb-1">
              Ilość porcji
            </label>
            <input
              type="number"
              min={1}
              max={10}
              name="quantity"
              value={form.quantity}
              onChange={handleChange}
              className="w-full rounded-lg bg-slate-900 border border-slate-700 px-3 py-2 text-sm text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block text-xs text-slate-300 mb-1">
              Notatka (np. bez laktozy, bez glutenu)
            </label>
            <textarea
              name="notes"
              value={form.notes}
              onChange={handleChange}
              rows={3}
              className="w-full rounded-lg bg-slate-900 border border-slate-700 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Np. śniadanie bezglutenowe, dostawa o 8:30, proszę nie dzwonić do pokoju."
            />
          </div>

          <div className="flex justify-end gap-3 pt-2">
            {onBack && (
              <button
                type="button"
                onClick={onBack}
                className="px-4 py-2 rounded-lg bg-slate-700 hover:bg-slate-600 text-sm"
              >
                Anuluj
              </button>
            )}
            <button
              type="submit"
              className="px-4 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-sm font-medium text-white"
            >
              Zapisz zamówienie
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
