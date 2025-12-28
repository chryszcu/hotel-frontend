//src\components\employee\pages\AdminReservation.jsx
import React, { useState } from "react";
import BackButton from "../components/BackButton";

export default function AdminReservation({ onBack }) {
  const [reservationForm, setReservationForm] = useState({
    name: "",
    email: "",
    phone: "",
    arrivalDate: "",
    departureDate: "",
    people: 1,
    roomType: "Standard",
    paymentMethod: "Karta płatnicza",
  });

  const handleReservationChange = (e) => {
    const { name, value } = e.target;
    setReservationForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleReservationSubmit = (e) => {
    e.preventDefault();
    console.log("FormularzRezerwacji:", reservationForm);
    alert("Rezerwacja została zapisana.");
  };

  const handleClear = () => {
    setReservationForm({
      name: "",
      email: "",
      phone: "",
      arrivalDate: "",
      departureDate: "",
      people: 1,
      roomType: "Standard",
      paymentMethod: "Karta płatnicza",
    });
  };

  return (
    <div className="p-8 text-slate-100">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold">Rezerwacja pokoju</h1>
          <p className="text-sm text-slate-400">Wybierz pokój.</p>
        </div>
        <BackButton onClick={onBack} label="Powrót" />
      </div>
      <section>
        <form
          onSubmit={handleReservationSubmit}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 bg-slate-800/70 rounded-2xl border border-slate-700 p-8"
        >
          {/* DANE KLIENTA */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-slate-100 mb-1">
              Dane klienta
            </h2>

            <div>
              <label className="block text-xs text-slate-300 mb-1">
                Imię i nazwisko
              </label>
              <input
                type="text"
                name="name"
                value={reservationForm.name}
                onChange={handleReservationChange}
                className="w-full rounded-lg bg-slate-900 border border-slate-700 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Jan Kowalski"
                required
              />
            </div>

            <div>
              <label className="block text-xs text-slate-300 mb-1">
                E-mail
              </label>
              <input
                type="email"
                name="email"
                value={reservationForm.email}
                onChange={handleReservationChange}
                className="w-full rounded-lg bg-slate-900 border border-slate-700 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="jan.kowalski@example.com"
                required
              />
            </div>

            <div>
              <label className="block text-xs text-slate-300 mb-1">
                Telefon
              </label>
              <input
                type="tel"
                name="phone"
                value={reservationForm.phone}
                onChange={handleReservationChange}
                className="w-full rounded-lg bg-slate-900 border border-slate-700 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="+48 123 456 789"
              />
            </div>
          </div>

          {/* DANE REZERWACJI */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-slate-100 mb-1">
              Szczegóły rezerwacji
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs text-slate-300 mb-1">
                  Data przyjazdu
                </label>
                <input
                  type="date"
                  name="arrivalDate"
                  value={reservationForm.arrivalDate}
                  onChange={handleReservationChange}
                  className="w-full rounded-lg bg-slate-900 border border-slate-700 px-3 py-2 text-sm text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                />
              </div>

              <div>
                <label className="block text-xs text-slate-300 mb-1">
                  Data wyjazdu
                </label>
                <input
                  type="date"
                  name="departureDate"
                  value={reservationForm.departureDate}
                  onChange={handleReservationChange}
                  className="w-full rounded-lg bg-slate-900 border border-slate-700 px-3 py-2 text-sm text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-xs text-slate-300 mb-1">
                Liczba osób
              </label>
              <input
                type="number"
                min={1}
                max={10}
                name="people"
                value={reservationForm.people}
                onChange={handleReservationChange}
                className="w-full rounded-lg bg-slate-900 border border-slate-700 px-3 py-2 text-sm text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="block text-xs text-slate-300 mb-1">
                Typ pokoju
              </label>
              <select
                name="roomType"
                value={reservationForm.roomType}
                onChange={handleReservationChange}
                className="w-full rounded-lg bg-slate-900 border border-slate-700 px-3 py-2 text-sm text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option>Standard</option>
                <option>Deluxe</option>
                <option>Suite</option>
                <option>Rodzinny</option>
              </select>
            </div>

            <div>
              <label className="block text-xs text-slate-300 mb-1">
                Sposób płatności
              </label>
              <select
                name="paymentMethod"
                value={reservationForm.paymentMethod}
                onChange={handleReservationChange}
                className="w-full rounded-lg bg-slate-900 border border-slate-700 px-3 py-2 text-sm text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option>Karta płatnicza</option>
                <option>Gotówka na miejscu</option>
                <option>Przelew</option>
                <option>BLIK</option>
              </select>
            </div>

            <h2 className="text-lg font-semibold text-slate-100 mb-1">
              Dodatki
            </h2>

            <div className="space-y-3">
              <label className="flex items-center gap-3">
                <input type="checkbox" name="breakfast" className="w-4 h-4" />
                <span className="text-sm">
                  Śniadanie (35 zł / osoba / dzień)
                </span>
              </label>
            </div>

            <div className="pt-2 flex justify-end gap-3">
              <button
                type="button"
                onClick={handleClear}
                className="px-4 py-2 rounded-lg bg-slate-700 hover:bg-slate-600 text-sm"
              >
                Wyczyść
              </button>

              <button
                type="submit"
                className="px-4 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-sm font-medium text-white"
              >
                Zapisz rezerwację
              </button>
            </div>
          </div>
        </form>
      </section>
    </div>
  );
}
