// src/components/customer/MenuPages/Rooms.jsx
import React, { useState } from "react";

const rooms = [
  {
    id: "classic",
    name: "POKÓJ CLASSIC",
    price: "299 zł / noc",
    desc:
      "Przytulny pokój w stylu klasycznym z eleganckim wykończeniem. Idealny na krótki pobyt biznesowy lub romantyczny weekend. Wyposażony w wygodne łóżko, funkcjonalne biurko i przestronną szafę. Oferuje ciszę i spokój dzięki dźwiękoszczelnym oknom.",
    details: [
      "Łóżko queen size (160x200 cm)", 
      "Wi-Fi 500 Mbps", 
      "TV Smart 43'", 
      "Klimatyzacja",
      "Sejf",
      "Ekspres do kawy",
    ],
    size: "25 m²",
    view: "Widok na ogród hotelowy",
    guests: "1-2 osoby",
    amenities: ["Ręczniki", "Szampon/odżywka", "Suszarka do włosów", "Żel pod prysznic"],
    image: "/pokoj1.jpg",
  },
  {
    id: "deluxe",
    name: "POKÓJ DELUXE",
    price: "499 zł / noc",
    desc:
      "Przestronny pokój premium z panoramicznym widokiem na park. Wyższy standard wyposażenia z eleganckimi meblami designerskimi. Idealny na dłuższy pobyt lub specjalne okazje. Przestrzeń dzienna oddzielona od strefy sypialnej.",
    details: [
      "Łóżko king size (180x200 cm)", 
      "Wi-Fi 500 Mbps", 
      "TV Smart 55'", 
      "Łazienka z wanną i prysznicem",
      "Klimatyzacja z oczyszczaczem",
      "Ekspres do kawy Nespresso",
      "Stanowisko pracy z ergonomicznym krzesłem"
    ],
    size: "35 m²",
    view: "Panoramiczny widok na park",
    guests: "1-2 osoby",
    amenities: ["Szlafrok i kapcie", "Luksusowe kosmetyki SPA", "Żelazko i deska", "Skarpetki hotelowe"],
    image: "/pokoj2.jpg",
  },
  {
    id: "palace",
    name: "APARTAMENT PAŁACOWY",
    price: "799 zł / noc",
    desc:
      "Luksusowy apartament w stylu pałacowym z oddzielnym salonem i sypialnią. Wysokie sufity, kryształowe żyrandole i antyczne meble tworzą wyjątkową atmosferę. Idealny na specjalne okazje, miesiąc miodowy lub pobyt rodzinny.",
    details: [
      "Łóżko king size + sofa rozkładana", 
      "Wi-Fi 1 Gbps", 
      "2 x TV Smart 65'", 
      "Łazienka z jacuzzi",
      "Klimatyzacja indywidualna",
      "Minibar z darmowym napojami",
      "Kuchnia z barem",
      "Przestrzeń wypoczynkowa z kominkiem"
    ],
    size: "50 m²",
    view: "Widok na pałacowy ogród",
    guests: "2-4 osoby",
    amenities: ["Przyjęcie powitalne", "Butelka wina", "Owoce", "Pralka suszarka", "Przewodnik po hotelu"],
    image: "/pokoj3.jpg",
  },
  {
    id: "aptDeluxe",
    name: "APARTAMENT DELUXE",
    price: "899 zł / noc",
    desc:
      "Nowoczesny apartament premium z najwyższym standardem wyposażenia. Przestrzeń zaprojektowana przez znanego architekta wnętrz. System inteligentnego domu, najwyższej jakości materiały wykończeniowe. Dla najbardziej wymagających gości.",
    details: [
      "Łóżko super king size (200x200 cm)", 
      "Wi-Fi 1 Gbps + router 5G", 
      "TV 4K 75' + soundbar", 
      "Łazienka SPA z sauną infrared",
      "Klimatyzacja z jonizacją",
      "Minibar premium gratis",
      "Pełna kuchnia z wyposażeniem",
      "Taras prywatny"
    ],
    size: "65 m²",
    view: "Widok na jezioro i las",
    guests: "2-4 osoby",
    amenities: ["Butler service", "Prywatny szafarz", "Dostawa śniadań do pokoju", "Wine tasting", "SPA kit premium"],
    image: "/pokoj4.jpg",
  },
];

export default function Rooms({ roomToExpand }) {
  const [openId, setOpenId] = useState(roomToExpand);
  const toggle = (id) => setOpenId((prev) => (prev === id ? null : id));

  return (
    <section className="min-h-screen bg-transparent text-slate-900 px-6 py-24">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-10 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold">
            NASZE POKOJE
          </h1>
          <div className="mt-5 flex items-center justify-center">
            <span className="h-px w-24 bg-black/70" />
          </div>
          <p className="mt-6 text-slate-600 text-lg max-w-3xl mx-auto">
            Odkryj nasze wyjątkowe przestrzenie, zaprojektowane z myślą o Twoim komforcie i relaksie.
            Każdy pokój to połączenie elegancji, funkcjonalności i luksusu.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {rooms.map((room) => {
            const isOpen = openId === room.id;

            return (
              <div key={room.id} className="w-full">
                <button
                  type="button"
                  onClick={() => toggle(room.id)}
                  aria-expanded={isOpen}
                  className="
                    group relative w-full overflow-hidden
                    rounded-none
                    border border-slate-200 bg-white
                    shadow-sm hover:shadow-md transition-shadow
                    focus:outline-none focus:ring-2 focus:ring-amber-500/50
                  "
                >
                  {/* obraz */}
                  <div
                    className="h-[260px] sm:h-80 md:h-[340px] w-full bg-center bg-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    style={{ backgroundImage: `url(${room.image})` }}
                  />

                  {/* overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/25 to-transparent" />

                  {/* tytuł na dole */}
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <p className="text-white/80 text-xs tracking-[0.22em] uppercase">
                      Kliknij, aby {isOpen ? "zwinąć" : "rozwinąć"}
                    </p>
                    <h2 className="text-white text-2xl sm:text-3xl font-bold mt-2">
                      {room.name}
                    </h2>
                    <p className="text-white/90 text-sm mt-1">{room.price}</p>
                  </div>
                </button>

                {/* rozwijane info */}
                <div
                  className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${
                    isOpen ? "max-h-[800px]" : "max-h-0"
                  }`}
                >
                  <div className="mt-4 rounded-none border border-slate-200 bg-white shadow-sm p-6">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <div>
                        <h3 className="text-lg font-semibold text-slate-900">
                          Szczegółowe informacje
                        </h3>
                        <p className="text-slate-500 text-sm mt-1">{room.size} • {room.view} • {room.guests}</p>
                      </div>
                      <span className="text-amber-800 font-semibold text-lg">{room.price}</span>
                    </div>

                    <p className="text-slate-600 text-sm leading-relaxed mt-4">
                      {room.desc}
                    </p>

                    {/* Podstawowe informacje */}
                    <div className="mt-6">
                      <h4 className="font-medium text-slate-900 mb-3">Wyposażenie pokoju:</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {room.details.map((d, i) => (
                          <div
                            key={i}
                            className="flex items-start gap-3 rounded-none border border-slate-200 bg-slate-50 px-4 py-3"
                          >
                            <span className="mt-1 h-2 w-2 rounded-full bg-amber-500" />
                            <span className="text-sm text-slate-700">{d}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Dodatkowe udogodnienia */}
                    <div className="mt-6">
                      <h4 className="font-medium text-slate-900 mb-3">Dodatkowe udogodnienia:</h4>
                      <div className="flex flex-wrap gap-2">
                        {room.amenities.map((amenity, i) => (
                          <span
                            key={i}
                            className="px-3 py-1.5 bg-amber-50 border border-amber-100 text-amber-800 text-xs rounded-full"
                          >
                            {amenity}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Zasady */}
                    <div className="mt-6 pt-4 border-t border-slate-200">
                      <div className="flex items-center text-slate-600 text-sm">
                        <span className="mr-2">✅</span>
                        <span>Bezpłatne anulowanie do 48h przed przyjazdem</span>
                      </div>
                      <div className="flex items-center text-slate-600 text-sm mt-2">
                        <span className="mr-2">✅</span>
                        <span>Check-in od 13:00, check-out do 11:00</span>
                      </div>
                    </div>

                    <div className="mt-8 flex flex-col sm:flex-row gap-3">
                      <button
                        type="button"
                        className="flex-1 rounded-none bg-[#C9A24D] px-5 py-3 text-white font-semibold hover:bg-amber-700 transition"
                        onClick={(e) => {
                          e.stopPropagation();
                          alert(`Wybrano: ${room.name}. Przechodzisz do rezerwacji.`);
                          // Tutaj możesz dodać nawigację do rezerwacji
                          window.location.hash = 'rooms';
                        }}
                      >
                        Zarezerwuj ten pokój
                      </button>

                      <button
                        type="button"
                        className="flex-1 rounded-none border border-slate-300 px-5 py-3 font-semibold text-slate-800 hover:bg-slate-50 transition"
                        onClick={(e) => {
                          e.stopPropagation();
                          setOpenId(null);
                        }}
                      >
                        Zamknij szczegóły
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Informacje dodatkowe */}
        <div className="mt-12 p-6 bg-white border border-slate-200 shadow-sm">
          <h3 className="text-xl font-semibold text-[#C9A24D] mb-4">
            INFORMACJE DODATKOWE
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-medium text-slate-900 mb-2">Śniadania</h4>
              <p className="text-slate-600 text-sm">
                Śniadania serwowane są do pokoi po złożeniu zamówienia (dodatkowa opłata).
              </p>
            </div>
            <div>
              <h4 className="font-medium text-slate-900 mb-2">Parking</h4>
              <p className="text-slate-600 text-sm">
                Bezpłatny parking strzeżony dostępny dla wszystkich gości. 
                Podziemny garaż z ładowarkami do samochodów elektrycznych.
              </p>
            </div>
            <div>
              <h4 className="font-medium text-slate-900 mb-2">Zwierzęta</h4>
              <p className="text-slate-600 text-sm">
                Akceptujemy małe zwierzęta domowe (do 10 kg) za dodatkową opłatą 50 zł/noc.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}