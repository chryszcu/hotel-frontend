// src\components\employee\AdminPanel.jsx
import React, { useState } from "react";
import AdminReservationSelector from "./pages/AdminReservationSelector";
import AdminRoomCleaning from "./pages/AdminRoomCleaning";
import AdminDashboard from "./pages/AdminDashboard";
import AdminRooms from "./pages/AdminRooms";
import AdminMembers from "./pages/AdminMembers";
import AdminSidebar from "./pages/AdminSideBar";

const AdminPanel = () => {
  const [selected, setSelected] = useState("DashBoard");

  return (
    <div className="flex bg-slate-900">
      <AdminSidebar selected={selected} setSelected={setSelected} />
      <ExampleContent selected={selected} setSelected={setSelected} />
    </div>
  );
};

const ExampleContent = ({ selected, setSelected }) => (
  <div className="h-screen w-full p-8 text-slate-100">
    {selected === "Rezerwacja" && <AdminReservationSelector />}
    {selected === "DashBoard" && (<AdminDashboard setSelected={setSelected} />)}
    {selected === "Sprzątanie" && <AdminRoomCleaning />}
    {selected === "Lista pokoi" && <AdminRooms />}
    {selected === "Członkowie" && <AdminMembers />}
  </div>
);

export default AdminPanel;