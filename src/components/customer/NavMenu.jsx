// src/components/customer/NavMenu.jsx
export default function Navbar({ onNavigate, onBookNow }) {
  return (
    <header className="w-full bg-white/90 backdrop-blur fixed top-0 left-0 z-50 border-b border-slate-200">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">

        {/* Logo */}
        <div
          className="cursor-pointer flex items-center"
          onClick={() => onNavigate("home")}
        >
          <img
            src="src/components/logo.png"
            alt="logo"
            className="h-24 w-28"
          />
        </div>

        {/* Menu - DODAJEMY "RESTAURACJA" */}
        <ul className="hidden md:flex items-center gap-10 font-heading text-sm tracking-[0.18em] uppercase text-slate-900">
          <li
            className="cursor-pointer hover:text-[#C9A24D] transition"
            onClick={() => onNavigate("info")}
          >
            O hotelu
          </li>
          <li
            className="cursor-pointer hover:text-[#C9A24D] transition"
            onClick={() => onNavigate("roomsPage")}
          >
            Pokoje
          </li>
          <li
            className="cursor-pointer hover:text-[#C9A24D] transition"
            onClick={() => onNavigate("restaurant")}
          >
            Restauracja
          </li>
          <li
            className="cursor-pointer hover:text-[#C9A24D] transition"
            onClick={() => onNavigate("SPA")}
          >
            SPA
          </li>
          <li
            className="cursor-pointer hover:text-[#C9A24D] transition"
            onClick={() => onNavigate("Confer")}
          >
            Konferencje
          </li>
          <li
            className="cursor-pointer hover:text-[#C9A24D] transition"
            onClick={() => onNavigate("Cont")}
          >
            Kontakt
          </li>
        </ul>

        {/* CTA */}
        <button
          onClick={onBookNow}
          className="
            border border-[#C9A24D]
            px-8 py-3
            font-heading text-sm tracking-[0.18em] uppercase
            text-[#C9A24D]
            hover:bg-[#C9A24D] hover:text-white
            transition
          "
        >
          Zarezerwuj
        </button>

        {/* Mobile */}
        <div className="md:hidden text-slate-900 text-2xl cursor-pointer">
          ☰
        </div>

      </nav>
    </header>
  );
}