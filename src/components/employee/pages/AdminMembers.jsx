// src\components\employee\pages\AdminMembers.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useTableSearchSort } from "../hook/useTableSearchSort";

const initialMembersData = [
  {
    id: 1,
    name: "Dawid Dąbrowski",
    email: "dawid.dabrowski@example.com",
    type: "Gość",
    status: "Aktywny",
    lastStay: "12.10.2025 – 15.10.2025",
    reservations: 5,
  },
  {
    id: 2,
    name: "Agata Bronk",
    email: "agata.bronk@example.com",
    type: "Gość",
    status: "Oczekuje",
    lastStay: "Zaplanowany: 24.11.2025",
    reservations: 2,
  },
  {
    id: 3,
    name: "Jakub Chryszczanowicz",
    email: "admin@example.com",
    type: "Admin",
    status: "Wewnętrzny",
    lastStay: "–",
    reservations: "—",
  },
];

const statusColors = {
  Aktywny: "bg-emerald-500/15 text-emerald-400",
  Oczekuje: "bg-amber-500/15 text-amber-400",
  Wewnętrzny: "bg-sky-500/15 text-sky-400",
};

const typeFilters = [
  { label: "Wszyscy", value: "Wszyscy" },
  { label: "Goście", value: "Gość" },
  { label: "Pracownicy", value: "Pracownik" },
  { label: "Admini", value: "Admin" },
];

const AdminMembers = () => {
  // ✅ dane jako state, żeby dało się dopisywać
  const [members, setMembers] = useState(initialMembersData);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [memberType, setMemberType] = useState("Gość");
  const [typeFilter, setTypeFilter] = useState("Wszyscy");

  // ✅ formularz + hasło
  const [form, setForm] = useState({
    name: "",
    email: "",
    status: "Aktywny",
  });
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const {
    search,
    setSearch,
    handleSort,
    data: sortedData,
    renderSortIcon,
  } = useTableSearchSort({
    data: members,
    searchableFields: ["name", "email", "type", "status", "lastStay", "reservations"],
    defaultSortKey: "name",
    defaultSortDirection: "asc",
  });

  const filteredMembers =
    typeFilter === "Wszyscy"
      ? sortedData
      : sortedData.filter((m) => m.type === typeFilter);

  const openModal = () => {
    setError("");
    setForm({ name: "", email: "", status: "Aktywny" });
    setMemberType("Gość");
    setPassword("");
    setShowPassword(false);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setError("");
  };

  const handleSave = () => {
    setError("");

    const name = form.name.trim();
    const email = form.email.trim();

    if (!name) {
      setError("Podaj imię i nazwisko.");
      return;
    }
    if (!email || !email.includes("@")) {
      setError("Podaj poprawny adres e-mail.");
      return;
    }
    if (password.length < 8) {
      setError("Hasło musi mieć minimum 8 znaków.");
      return;
    }
    if (members.some((m) => m.email.toLowerCase() === email.toLowerCase())) {
      setError("Użytkownik z takim e-mailem już istnieje.");
      return;
    }

    const nextId = members.length ? Math.max(...members.map((m) => m.id)) + 1 : 1;

    const newMember = {
      id: nextId,
      name,
      email,
      type: memberType,
      status: memberType === "Admin" ? "Wewnętrzny" : form.status,
      lastStay: "–",
      reservations: memberType === "Gość" ? 0 : "—",

      // ⚠️ DEMO/PROJEKT: trzymamy hasło tylko żeby było w payloadzie (nie pokazujemy w tabeli)
      // W realnym systemie hasło powinno iść do backendu i tam zostać zahashowane.
      password,
    };

    setMembers((prev) => [...prev, newMember]);
    setIsModalOpen(false);
  };

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
          onClick={openModal}
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
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="flex flex-wrap gap-2 text-sm">
          {typeFilters.map((t) => (
            <button
              key={t.value}
              onClick={() => setTypeFilter(t.value)}
              className={`px-3 py-1.5 rounded-lg border transition ${
                typeFilter === t.value
                  ? "bg-indigo-600 border-indigo-600 text-white"
                  : "bg-slate-800 border-slate-700 text-slate-200 hover:bg-slate-700"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tabela członków */}
      <div className="overflow-hidden rounded-xl border border-slate-700 bg-slate-800/60">
        <table className="min-w-full text-sm">
          <thead className="bg-slate-800">
            <tr className="text-left text-slate-300">
              <th className="px-4 py-3">
                <button
                  type="button"
                  onClick={() => handleSort("name")}
                  className="inline-flex items-center gap-1 hover:text-white"
                >
                  Imię i nazwisko
                  {renderSortIcon("name")}
                </button>
              </th>
              <th className="px-4 py-3">
                <button
                  type="button"
                  onClick={() => handleSort("email")}
                  className="inline-flex items-center gap-1 hover:text-white"
                >
                  E-mail
                  {renderSortIcon("email")}
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
              <th className="px-4 py-3">
                <button
                  type="button"
                  onClick={() => handleSort("lastStay")}
                  className="inline-flex items-center gap-1 hover:text-white"
                >
                  Ostatni pobyt
                  {renderSortIcon("lastStay")}
                </button>
              </th>
              <th className="px-4 py-3 text-right">
                <button
                  type="button"
                  onClick={() => handleSort("reservations")}
                  className="inline-flex items-center gap-1 hover:text-white"
                >
                  Rezerwacje
                  {renderSortIcon("reservations")}
                </button>
              </th>
            </tr>
          </thead>

          <tbody>
            {filteredMembers.length > 0 ? (
              filteredMembers.map((member) => (
                <tr
                  key={member.id}
                  className="border-t border-slate-700/60 hover:bg-slate-800/70 transition"
                >
                  <td className="px-4 py-3 text-slate-100">{member.name}</td>
                  <td className="px-4 py-3 text-slate-300">{member.email}</td>
                  <td className="px-4 py-3 text-slate-300">{member.type}</td>
                  <td className="px-4 py-3">
                    <span
                      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                        statusColors[member.status] || "bg-slate-700 text-slate-200"
                      }`}
                    >
                      {member.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-slate-300">{member.lastStay}</td>
                  <td className="px-4 py-3 text-right text-slate-100">
                    {member.reservations}
                  </td>
                </tr>
              ))
            ) : (
              <tr className="border-t border-slate-700/60">
                <td colSpan="6" className="px-4 py-6 text-center text-slate-400 italic">
                  Brak wyników.
                </td>
              </tr>
            )}
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

            {error && (
              <div className="mb-3 rounded-lg border border-red-500/30 bg-red-500/10 px-3 py-2 text-sm text-red-200">
                {error}
              </div>
            )}

            <input
              type="text"
              placeholder="Imię i nazwisko"
              className="w-full p-3 rounded bg-slate-700 placeholder-slate-400 text-white mb-3"
              value={form.name}
              onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
            />

            <input
              type="email"
              placeholder="E-mail"
              className="w-full p-3 rounded bg-slate-700 placeholder-slate-400 text-white mb-3"
              value={form.email}
              onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
            />

            {/* Hasło + pokaż/ukryj */}
            <div className="mb-3">
              <label className="block text-sm mb-1 text-slate-300">Hasło</label>
              <div className="flex gap-2">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Minimum 8 znaków"
                  className="w-full p-3 rounded bg-slate-700 placeholder-slate-400 text-white"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((v) => !v)}
                  className="px-3 rounded bg-slate-700 hover:bg-slate-600 text-slate-100 text-sm"
                  title={showPassword ? "Ukryj hasło" : "Pokaż hasło"}
                >
                  {showPassword ? "Ukryj" : "Pokaż"}
                </button>
              </div>
              <p className="mt-2 text-xs text-slate-400">
                Demo (frontend). W realnym systemie hasło powinno być obsłużone po stronie backendu.
              </p>
            </div>

            {/* Typ członka */}
            <div className="mb-4">
              <label className="block text-sm mb-1 text-slate-300">Typ członka</label>
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

            {/* Status (opcjonalnie dla nie-adminów) */}
            {memberType !== "Admin" && (
              <div className="mb-4">
                <label className="block text-sm mb-1 text-slate-300">Status</label>
                <select
                  value={form.status}
                  onChange={(e) => setForm((p) => ({ ...p, status: e.target.value }))}
                  className="w-full p-3 rounded bg-slate-700 text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <option>Aktywny</option>
                  <option>Oczekuje</option>
                </select>
              </div>
            )}

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

export default AdminMembers;
