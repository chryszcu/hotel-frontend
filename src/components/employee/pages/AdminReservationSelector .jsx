import React, { useState } from "react";
import AdminRoomReservation from "./AdminReservation";
import AdminSpaReservation from "./AdminSpaReservation";

export default function AdminReservationSelector() {
  const [mode, setMode] = useState(null); // "room" | "spa" | null

  if (mode === "room") return <AdminRoomReservation />;
  if (mode === "spa") return <AdminSpaReservation />;

  return (
    <div className="p-8 text-slate-100">
      <h1 className="text-3xl font-bold mb-6">Wybierz typ rezerwacji</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* REZERWACJA POKOJU */}
        <div
          onClick={() => setMode("room")}
          className="cursor-pointer bg-slate-800 border border-slate-700 rounded-xl p-8 hover:bg-slate-700 transition flex flex-col items-center justify-center"
        >
          <span className="text-4xl mb-4">🛏</span>
          <h2 className="text-xl font-semibold">Nowa rezerwacja pokoju</h2>
          <p className="text-sm text-slate-400 mt-2">Zarezerwuj pokój hotelowy</p>
        </div>

        {/* REZERWACJA SPA */}
        <div
          onClick={() => setMode("spa")}
          className="cursor-pointer bg-slate-800 border border-slate-700 rounded-xl p-8 hover:bg-slate-700 transition flex flex-col items-center justify-center"
        >
          <span className="text-4xl mb-4">💆</span>
          <h2 className="text-xl font-semibold">Rezerwacja SPA</h2>
          <p className="text-sm text-slate-400 mt-2">Masaże, zabiegi, wellness</p>
        </div>
      </div>
    </div>
  );
}
