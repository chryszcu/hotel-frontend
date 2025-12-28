// src\components\employee\components\BackButton.jsx
import React from "react";
import { FiArrowLeft } from "react-icons/fi";

export default function BackButton({ onClick, label = "Powrót" }) {
  return (
    <button
      onClick={onClick}
      className="
        flex items-center gap-2
        px-3 py-1.5
        rounded-lg
        bg-slate-800
        border border-slate-600
        text-xs text-slate-200
        hover:bg-slate-700
        transition
      "
    >
      <FiArrowLeft className="text-sm" />
      {label}
    </button>
  );
}
