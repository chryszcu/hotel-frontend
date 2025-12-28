// src\components\employee\pages\AdminReservationSelector.jsx
import React, { useState } from "react";
import AdminRoomReservation from "./AdminReservation";
import AdminSpaReservation from "./AdminSpaReservation";
import AdminMealOrder from "./AdminMealOrder";

export default function AdminReservationSelector() {
  const [mode, setMode] = useState(null); // "room" | "spa" | "meal" | null

  if (mode === "room") {
    return <AdminRoomReservation onBack={() => setMode(null)} />;
  }

  if (mode === "spa") {
    return <AdminSpaReservation onBack={() => setMode(null)} />;
  }

  if (mode === "meal") {
    return <AdminMealOrder onBack={() => setMode(null)} />;
  }

  // Ekran główny wyboru
  return (
    <div className="p-8 text-slate-100">
      <h1 className="text-3xl font-bold mb-6">Wybierz typ operacji</h1>
      <p className="text-sm text-slate-400 mb-8">
        Utwórz nową rezerwację pokoju, SPA lub przypisz posiłek do istniejącego pokoju.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* POKÓJ */}
        <button
          onClick={() => setMode("room")}
          className="cursor-pointer bg-slate-800 border border-slate-700 rounded-xl p-8 hover:bg-slate-700 transition flex flex-col items-center justify-center"
        >
          <span className="text-4xl mb-4">🛏</span>
          <h2 className="text-xl font-semibold mb-1">Rezerwacja pokoju</h2>
          <p className="text-xs text-slate-400 text-center">
            Utwórz nową rezerwację dla gościa (pokój, daty, płatność).
          </p>
        </button>

        {/* SPA */}
        <button
          onClick={() => setMode("spa")}
          className="cursor-pointer bg-slate-800 border border-slate-700 rounded-xl p-8 hover:bg-slate-700 transition flex flex-col items-center justify-center"
        >
          <span className="text-4xl mb-4">💆</span>
          <h2 className="text-xl font-semibold mb-1">Rezerwacja SPA</h2>
          <p className="text-xs text-slate-400 text-center">
            Zarezerwuj zabieg, masaż lub pakiet SPA dla gościa.
          </p>
        </button>

        {/* POSIŁEK */}
        <button
          onClick={() => setMode("meal")}
          className="cursor-pointer bg-slate-800 border border-slate-700 rounded-xl p-8 hover:bg-slate-700 transition flex flex-col items-center justify-center"
        >
          <span className="text-4xl mb-4">🍽</span>
          <h2 className="text-xl font-semibold mb-1">Posiłek do pokoju</h2>
          <p className="text-xs text-slate-400 text-center">
            Dodaj śniadanie, obiad lub inny posiłek i przypisz go do istniejącego pokoju.
          </p>
        </button>
      </div>
    </div>
  );
}
