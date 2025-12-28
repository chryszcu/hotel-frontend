// src\components\employee\Auth\AdminLogin.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";

export default function AdminLogin({ onLoginSuccess }) {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // statyczne dane: admin / admin
    if (login === "admin" && password === "admin") {
      setError("");
      onLoginSuccess();
    } else {
      setError("Nieprawidłowy login lub hasło");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900">
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 20, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        className="w-full max-w-sm bg-slate-800/80 border border-slate-700 rounded-2xl p-6 shadow-xl"
      >
        <h1 className="text-xl font-semibold text-slate-100 mb-1">
          Panel administratora
        </h1>
        <p className="text-xs text-slate-400 mb-6">
          Zaloguj się, aby przejść do dashboardu.
        </p>

        <div className="mb-4">
          <label className="block text-xs text-slate-300 mb-1">
            Login
          </label>
          <input
            type="text"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
            className="w-full rounded-lg bg-slate-900 border border-slate-700 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="admin"
          />
        </div>

        <div className="mb-4">
          <label className="block text-xs text-slate-300 mb-1">
            Hasło
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-lg bg-slate-900 border border-slate-700 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="admin"
          />
        </div>

        {error && (
          <p className="mb-3 text-xs text-red-400">
            {error}
          </p>
        )}

        <button
          type="submit"
          className="w-full mt-2 px-4 py-2 rounded-lg bg-indigo-500 hover:bg-indigo-600 text-sm font-medium text-white transition"
        >
          Zaloguj się
        </button>

        <p className="mt-3 text-[10px] text-slate-500 text-center">
          Demo: użyj loginu <span className="font-mono">admin</span> i hasła{" "}
          <span className="font-mono">admin</span>.
        </p>
      </motion.form>
    </div>
  );
}
