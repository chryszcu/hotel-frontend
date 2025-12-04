import React, { useState } from "react";
import BackButton from "../components/BackButton";

export default function AdminSpaReservation({ onBack }) {
  const [form, setForm] = useState({
    clientName: "",
    phone: "",
    date: "",
    time: "",
    service: "Masaż klasyczny 60 min",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Rezerwacja SPA:", form);
    alert("Zapisano rezerwację SPA!");
  };

  return (
    <div className="p-8 text-slate-100">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold">Rezerwacja SPA</h1>
          <p className="text-sm text-slate-400">
            Wybierz termin i rodzaj usługi.
          </p>
        </div>
        <BackButton onClick={onBack} label="Powrót" />
      </div>
      <form
        onSubmit={handleSubmit}
        className="bg-slate-800/70 border border-slate-700 rounded-xl p-8 space-y-4"
      >
        <div>
          <label className="block text-sm mb-1">Imię i nazwisko</label>
          <input
            type="text"
            name="clientName"
            value={form.clientName}
            onChange={handleChange}
            className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2"
          />
        </div>

        <div>
          <label className="block text-sm mb-1">Telefon</label>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2"
          />
        </div>

        <div>
          <label className="block text-sm mb-1">Data</label>
          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2"
          />
        </div>

        <div>
          <label className="block text-sm mb-1">Godzina</label>
          <input
            type="time"
            name="time"
            value={form.time}
            onChange={handleChange}
            className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2"
          />
        </div>

        <div>
          <label className="block text-sm mb-1">Usługa</label>
          <select
            name="service"
            value={form.service}
            onChange={handleChange}
            className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2"
          >
            <option>Masaż klasyczny całościowy</option>
            <option>Masaż relaksacyjny</option>
            <option>Masaż balijski</option>
            <option>Masaż ciepłą czekoladą</option>
            <option>Kobido</option>
            <option>Body peeling</option>
          </select>
        </div>

        <button
          type="submit"
          className="px-4 py-2 bg-emerald-500 hover:bg-emerald-600 rounded-lg"
        >
          Zapisz rezerwację
        </button>
      </form>
    </div>
  );
}
