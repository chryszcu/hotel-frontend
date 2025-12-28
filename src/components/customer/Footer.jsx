// src/components/customer/Footer.jsx
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { SiTripadvisor } from 'react-icons/si';

export default function Footer({ onNavigate, onBookNow }) {
  const currentYear = new Date().getFullYear();

  // Używamy przekazanych funkcji zamiast tworzyć własne
  const handleNavigate = (page) => {
    if (onNavigate) {
      onNavigate(page);
    }
  };

  const handleBookNow = () => {
    if (onBookNow) {
      onBookNow();
    }
  };

  return (
    <footer className="bg-white text-slate-900 pt-12 pb-8 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        {/* Główna zawartość stopki */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          
          {/* Kolumna 1: Logo hotelu i opis */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img 
                src="src/components/logo.png" 
                alt="Hotel Logo" 
                className="h-16 w-16"
              />
              <h2 className="font-heading text-2xl font-bold tracking-wider text-slate-900">
                HOTEL ZNOWU NIE DZIAŁA
              </h2>
            </div>
            <p className="text-slate-600 text-sm leading-relaxed">
              Luksusowy hotel SPA oferujący niezapomniane chwile relaksu, 
              najwyższy standard obsługi i wyjątkową atmosferę.
            </p>
            
            {/* Oceny Tripadvisor */}
            <div className="flex items-center gap-2 pt-4">
              <SiTripadvisor className="text-2xl text-[#00A680]" />
              <div>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-[#C9A24D]">★</span>
                  ))}
                </div>
                <span className="text-xs text-slate-500">Ocena 4.9/5 na TripAdvisor</span>
              </div>
            </div>
          </div>

          {/* Kolumna 2: Kontakt */}
          <div className="space-y-4">
            <h3 className="font-heading text-xl font-semibold text-slate-900 mb-4">
              KONTAKT
            </h3>
            
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-[#C9A24D] mt-1" />
                <div>
                  <p className="font-medium text-slate-900">Adres hotelu</p>
                  <p className="text-slate-600 text-sm">
                    ul. Przykładowa 12<br />
                    00-123 Warszawa
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <FaPhone className="text-[#C9A24D]" />
                <div>
                  <p className="font-medium text-slate-900">Telefon</p>
                  <p className="text-slate-600 text-sm">+48 123 456 789</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <FaEnvelope className="text-[#C9A24D]" />
                <div>
                  <p className="font-medium text-slate-900">Email</p>
                  <p className="text-slate-600 text-sm">rezerwacja@hotelspa.pl</p>
                </div>
              </div>
              
              {/* Przycisk rezerwacji */}
              <button
                onClick={handleBookNow}
                className="mt-4 w-full border border-[#C9A24D] px-6 py-3 font-heading text-sm tracking-[0.18em] uppercase text-[#C9A24D] hover:bg-[#C9A24D] hover:text-white transition"
              >
                Zarezerwuj teraz
              </button>
            </div>
          </div>

          {/* Kolumna 3: Szybkie linki */}
          <div className="space-y-4">
            <h3 className="font-heading text-xl font-semibold text-slate-900 mb-4">
              SZYBKIE LINKI
            </h3>
            
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => handleNavigate('info')}
                  className="w-full text-left text-slate-600 hover:text-[#C9A24D] transition text-sm flex items-center gap-2 hover:bg-slate-50 px-3 py-2 rounded"
                >
                  <span className="w-1 h-1 bg-[#C9A24D] rounded-full"></span>
                  O hotelu
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigate('roomsPage')}
                  className="w-full text-left text-slate-600 hover:text-[#C9A24D] transition text-sm flex items-center gap-2 hover:bg-slate-50 px-3 py-2 rounded"
                >
                  <span className="w-1 h-1 bg-[#C9A24D] rounded-full"></span>
                  Pokoje
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigate('SPA')}
                  className="w-full text-left text-slate-600 hover:text-[#C9A24D] transition text-sm flex items-center gap-2 hover:bg-slate-50 px-3 py-2 rounded"
                >
                  <span className="w-1 h-1 bg-[#C9A24D] rounded-full"></span>
                  Oferty SPA
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigate('Confer')}
                  className="w-full text-left text-slate-600 hover:text-[#C9A24D] transition text-sm flex items-center gap-2 hover:bg-slate-50 px-3 py-2 rounded"
                >
                  <span className="w-1 h-1 bg-[#C9A24D] rounded-full"></span>
                  Konferencje
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigate('Cont')}
                  className="w-full text-left text-slate-600 hover:text-[#C9A24D] transition text-sm flex items-center gap-2 hover:bg-slate-50 px-3 py-2 rounded"
                >
                  <span className="w-1 h-1 bg-[#C9A24D] rounded-full"></span>
                  Kontakt
                </button>
              </li>
              <li>
                <button
                  onClick={handleBookNow}
                  className="w-full text-left text-slate-600 hover:text-[#C9A24D] transition text-sm flex items-center gap-2 hover:bg-slate-50 px-3 py-2 rounded"
                >
                  <span className="w-1 h-1 bg-[#C9A24D] rounded-full"></span>
                  Rezerwacja online
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Dolna część stopki */}
        <div className="pt-8 border-t border-slate-300">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Logo płatności */}
            <div className="flex items-center gap-4">
              <span className="text-slate-600 text-sm">Akceptujemy:</span>
              <div className="flex gap-2">
                <div className="border border-slate-300 w-12 h-8 rounded flex items-center justify-center text-xs text-slate-700">
                  Visa
                </div>
                <div className="border border-slate-300 w-12 h-8 rounded flex items-center justify-center text-xs text-slate-700">
                  MC
                </div>
                <div className="border border-slate-300 w-12 h-8 rounded flex items-center justify-center text-xs text-slate-700">
                  PayU
                </div>
                <div className="border border-slate-300 w-12 h-8 rounded flex items-center justify-center text-xs text-slate-700">
                  BLIK
                </div>
              </div>
            </div>

            {/* Copyright i linki prawne */}
            <div className="text-center">
              <p className="text-slate-600 text-sm">
                © {currentYear} Hotel SPA Znowu Nie Działa. Wszelkie prawa zastrzeżone.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}