export default function Navbar({ onNavigate, onBookNow }) {
  return (
    <header className="w-full bg-slate-900/80 backdrop-blur-md border-b border-slate-800 fixed top-0 left-0 z-50">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <div 
        className="flex justify-center mb-4 cursor-pointer"
        onClick={() => onNavigate('home')}
>
        <img
          src="src/components/logo.png"
          alt="logo"
          className="w-35 h-30 rounded-md"
        />
        
        
      </div>

        {/* Menu */}
        <ul className="hidden md:flex items-center gap-8 text-slate-200 text-sm font-medium">
            <li 
              className="hover:text-indigo-400 cursor-pointer transition"
              onClick={() => onNavigate('info')}
            >
              O hotelu
            </li>
            <li 
              className="hover:text-indigo-400 cursor-pointer transition"
              onClick={() => onNavigate('rooms')}
            >
              Pokoje
            </li>
            <li 
              className="hover:text-indigo-400 cursor-pointer transition"
              onClick={() => onNavigate('SPA')}
            >
              SPA
            </li>
            <li 
              className="hover:text-indigo-400 cursor-pointer transition"
              onClick={() => onNavigate('Confer')}
            >
              Konferencje
            </li>
            <li 
              className="hover:text-indigo-400 cursor-pointer transition"
              onClick={() => onNavigate('Cont')}
            >
              Kontakt
            </li>
        </ul>
        
        <button 
          onClick={onBookNow}
          className="bg-indigo-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition-colors min-w-[200px]"
          // DODANE: min-w-[200px] - minimalna szerokość przycisku
        >
          Zarezerwuj teraz
        </button>
        {/* Mobile Menu Icon */}
        <div className="md:hidden text-slate-200 text-2xl cursor-pointer">
          ☰
        </div>

      </nav>
    </header>
  );
}