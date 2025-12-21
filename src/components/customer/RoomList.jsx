// src/components/customer/RoomList.jsx
import { useState } from "react";

const rooms = [
  {
    id: 1,
    name: "POKÓJ CLASSIC",
    price: 299,
    size: "25 m²",
    guests: "1-2",
    image: "/pokoj1.jpg",
    amenities: ["WiFi", "TV Smart", "Klimatyzacja", "Ekspres do kawy"],
    description: "Przytulny pokój w stylu klasycznym, idealny na krótki pobyt.",
    roomId: "classic"
  },
  {
    id: 2,
    name: "POKÓJ DELUXE", 
    price: 499,
    size: "35 m²",
    guests: "1-2",
    image: "/pokoj2.jpg",
    amenities: ["WiFi", "TV Smart 55'", "Łazienka z wanną", "Klimatyzacja"],
    description: "Przestronny pokój premium z panoramicznym widokiem na park.",
    roomId: "deluxe"
  },
  {
    id: 3,
    name: "APARTAMENT PAŁACOWY",
    price: 799,
    size: "50 m²", 
    guests: "2-4",
    image: "/pokoj3.jpg",
    amenities: ["WiFi 1 Gbps", "2x TV Smart", "Jacuzzi", "Minibar gratis", "Kominek"],
    description: "Luksusowy apartament w stylu pałacowym z oddzielnym salonem.",
    roomId: "palace"
  },
  {
    id: 4,
    name: "APARTAMENT DELUXE",
    price: 899,
    size: "65 m²",
    guests: "2-4",
    image: "/pokoj4.jpg",
    amenities: ["WiFi 1 Gbps", "TV 4K 75'", "Sauna infrared", "Taras prywatny", "Minibar premium"],
    description: "Nowoczesny apartament premium z najwyższym standardem wyposażenia.",
    roomId: "aptDeluxe"
  }
];

export default function RoomList({ onSelectRoom, onBack, onNavigateToRoomDetails }) {
  const [selectedRoom, setSelectedRoom] = useState(null);

  // Funkcja do przenoszenia do strony Rooms z rozwiniętym pokojem
  const handleViewDetails = (room, event) => {
    event.stopPropagation(); // Zapobiega wywołaniu onClick na całej karcie
    
    // Przechowujemy informację o pokoju do rozwinięcia
    if (onNavigateToRoomDetails) {
      onNavigateToRoomDetails(room.roomId);
    } else {
      // Fallback: przekierowanie do strony Rooms
      window.location.hash = 'roomsPage';
      // Możesz dodać localStorage lub sessionStorage do zapisania który pokój ma być rozwinięty
      sessionStorage.setItem('expandRoomId', room.roomId);
    }
  };

  return (
    <section className="min-h-screen bg-transparent px-6 py-24 text-slate-900">
      <div className="max-w-6xl mx-auto">
        {/* Back */}
        <button
          onClick={onBack}
          className="font-heading text-sm tracking-[0.18em] uppercase text-slate-900 border border-black/70 px-4 py-2 hover:bg-black hover:text-white transition"
        >
          ← Powrót
        </button>

        {/* Title */}
        <div className="mt-10 mb-12 text-center">
          <h2 className="font-heading text-4xl md:text-5xl font-bold">
            WYBIERZ POKÓJ
          </h2>
          <div className="mt-5 flex justify-center">
            <span className="h-px w-24 bg-black/70" />
          </div>
          <p className="mt-6 text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Wybierz standard dopasowany do Twojego pobytu. Kliknij kafelek, aby zaznaczyć,
            następnie potwierdź wybór.
          </p>
          <p className="mt-2 text-slate-500 text-sm">
            Wszystkie ceny są za noc. Podatek i opłata klimatyczna wliczone w cenę.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {rooms.map((room) => {
            const isSelected = selectedRoom?.id === room.id;

            return (
              <div
                key={room.id}
                onClick={() => setSelectedRoom(room)}
                className={`bg-white border shadow-sm cursor-pointer transition hover:shadow-md
                  ${isSelected ? "border-2 border-[#C9A24D]" : "border-slate-200"}
                `}
              >
                {/* Image */}
                <div className="relative h-64 w-full overflow-hidden">
                  <div
                    className="h-full w-full bg-center bg-cover transition-transform duration-500 hover:scale-105"
                    style={{ backgroundImage: `url(${room.image})` }}
                  />
                  {isSelected && (
                    <div className="absolute top-4 right-4 bg-[#C9A24D] text-white px-3 py-1 text-sm font-semibold">
                      WYBRANY
                    </div>
                  )}
                  {/* Tag "Popularny" dla przykładowego pokoju */}
                  {room.id === 2 && (
                    <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 text-sm font-semibold">
                      POPULARNY
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-start">
                    <h3 className="font-heading text-xl font-semibold text-[#C9A24D]">
                      {room.name}
                    </h3>
                    <div className="text-right">
                      <p className="font-bold text-slate-900 text-lg">
                        {room.price} zł
                      </p>
                      <p className="text-slate-500 text-sm">za noc</p>
                    </div>
                  </div>

                  <p className="mt-3 text-slate-600 text-sm">
                    {room.description}
                  </p>

                  <div className="mt-4 flex items-center justify-between text-slate-600 text-sm">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        <span className="text-[#C9A24D]">👤</span>
                        {room.guests} os.
                      </span>
                      <span className="flex items-center gap-1">
                        <span className="text-[#C9A24D]">📏</span>
                        {room.size}
                      </span>
                    </div>
                  </div>

                  <div className="mt-4">
                    <div className="flex flex-wrap gap-2">
                      {room.amenities.slice(0, 3).map((amenity, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-slate-100 text-slate-700 text-xs rounded"
                        >
                          {amenity}
                        </span>
                      ))}
                      {room.amenities.length > 3 && (
                        <span className="px-2 py-1 bg-slate-100 text-slate-700 text-xs rounded">
                          +{room.amenities.length - 3} więcej
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Przycisk do szczegółów */}
                  <button
                    onClick={(e) => handleViewDetails(room, e)}
                    className="mt-4 w-full flex items-center justify-center gap-2 text-sm text-slate-600 hover:text-[#C9A24D] transition py-2 border-t border-slate-100"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Zobacz dokładniejszy opis
                  </button>

                  {/* Główny przycisk wyboru */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectRoom(room);
                    }}
                    className={`mt-4 w-full px-6 py-3 font-semibold transition border
                      ${isSelected 
                        ? "bg-[#C9A24D] border-[#C9A24D] text-white hover:bg-amber-700" 
                        : "border-[#C9A24D]/70 text-[#C9A24D] hover:bg-[#C9A24D] hover:text-white"
                      }
                    `}
                  >
                    {isSelected ? "PRZEJDŹ DO REZERWACJI" : "WYBIERZ POKÓJ"}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Informacje o rezerwacji */}
        <div className="mt-12 p-6 bg-white border border-slate-200 shadow-sm">
          <h3 className="text-lg font-semibold text-[#C9A24D] mb-4">
            INFORMACJE O REZERWACJI
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-slate-900 mb-2">Gwarancja najlepszej ceny</h4>
              <p className="text-slate-600 text-sm">
                Znalezliście ten sam pokój taniej? Poinformuj nas, a dopasujemy cenę.
              </p>
            </div>
            <div>
              <h4 className="font-medium text-slate-900 mb-2">Elastyczna polityka</h4>
              <p className="text-slate-600 text-sm">
                Bezpłatne anulowanie do 48h przed przyjazdem. Brak opłat za rezerwację.
              </p>
            </div>
          </div>
          
          {/* Uwaga o szczegółach */}
          <div className="mt-6 pt-4 border-t border-slate-200">
            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 text-[#C9A24D] mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <p className="text-slate-700 text-sm font-medium">
                  Potrzebujesz więcej informacji?
                </p>
                <p className="text-slate-600 text-sm mt-1">
                  Kliknij "Zobacz dokładniejszy opis" przy wybranym pokoju, aby przejść do strony 
                  ze szczegółowymi informacjami, pełną listą udogodnień i zdjęciami.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Wybrany pokój - podsumowanie */}
        {selectedRoom && (
          <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 p-4 shadow-lg z-10">
            <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div>
                  <p className="font-semibold text-slate-900">Wybrano: {selectedRoom.name}</p>
                  <p className="text-slate-600 text-sm">{selectedRoom.price} zł / noc • {selectedRoom.guests} os.</p>
                </div>
                <button
                  onClick={(e) => handleViewDetails(selectedRoom, e)}
                  className="text-sm text-[#C9A24D] hover:text-amber-700 font-medium flex items-center gap-1"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Zobacz szczegóły
                </button>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={() => setSelectedRoom(null)}
                  className="px-6 py-2 border border-slate-300 text-slate-700 hover:bg-slate-50 transition"
                >
                  Zmień wybór
                </button>
                <button
                  onClick={() => onSelectRoom(selectedRoom)}
                  className="px-6 py-2 bg-[#C9A24D] text-white hover:bg-amber-700 transition font-semibold"
                >
                  Przejdź do rezerwacji
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}