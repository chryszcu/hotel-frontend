import React, { useState } from "react";

const rooms = [
  {
    id: "classic",
    name: "POKÓJ CLASSIC",
    price: "249 zł / noc",
    desc:
      "Klasyczny, przytulny pokój idealny na krótki pobyt. Wygodne łóżko, biurko, prywatna łazienka.",
    details: ["1–2 osoby", "Łóżko queen / twin", "Wi-Fi, TV", "Prywatna łazienka"],
    image: "/pokoj1.jpg",
  },
  {
    id: "deluxe",
    name: "POKÓJ DELUXE",
    price: "399 zł / noc",
    desc:
      "Przestronny pokój z lepszym standardem i widokiem. Idealny na weekendowy wyjazd.",
    details: ["1–2 osoby", "Łóżko king-size", "Minibar", "Zestaw kawowy"],
    image: "/pokoj2.jpg",
  },
  {
    id: "palace",
    name: "APARTAMENT PAŁACOWY",
    price: "599 zł / noc",
    desc:
      "Wyjątkowy apartament w stylu pałacowym z przestrzenią dzienną i eleganckim wystrojem.",
    details: ["2–4 osoby", "Salon + sypialnia", "Duża przestrzeń", "Strefa wypoczynku"],
    image: "/pokoj3.jpg",
  },
  {
    id: "aptDeluxe",
    name: "APARTAMENT DELUXE",
    price: "699 zł / noc",
    desc:
      "Luksusowy apartament dla wymagających. Komfort, przestrzeń i klimat premium.",
    details: ["2–4 osoby", "Salon + sypialnia", "Opcja jacuzzi", "Minibar"],
    image: "/pokoj4.jpg",
  },
];

export default function Rooms() {
  const [openId, setOpenId] = useState(null);
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
                  </div>
                </button>

                {/* rozwijane info */}
                <div
                  className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${
                    isOpen ? "max-h-[520px]" : "max-h-0"
                  }`}
                >
                  <div className="mt-4 rounded-none border border-slate-200 bg-white shadow-sm p-6">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <h3 className="text-lg font-semibold text-slate-900">
                        Informacje o pokoju
                      </h3>
                      <span className="text-amber-800 font-semibold">{room.price}</span>
                    </div>

                    <p className="text-slate-600 text-sm leading-relaxed mt-3">
                      {room.desc}
                    </p>

                    <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
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

                    <div className="mt-6 flex flex-col sm:flex-row gap-3">
                      <button
                        type="button"
                        className="flex-1 rounded-none bg-amber-600 px-5 py-3 text-white font-semibold hover:bg-amber-700 transition"
                        onClick={(e) => {
                          e.stopPropagation();
                          alert(`Wybrano: ${room.name}`);
                        }}
                      >
                        Wybierz pokój
                      </button>

                      <button
                        type="button"
                        className="flex-1 rounded-none border border-slate-300 px-5 py-3 font-semibold text-slate-800 hover:bg-slate-50 transition"
                        onClick={(e) => {
                          e.stopPropagation();
                          setOpenId(null);
                        }}
                      >
                        Zamknij
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
