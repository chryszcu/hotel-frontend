import { useState } from "react";

const rooms = [
  {
    id: 1,
    name: "POKÓJ STANDARD",
    price: 299,
    size: "25 m²",
    guests: 2,
    image: "/pokoj1.jpg",
    amenities: ["WiFi", "TV", "Klimatyzacja"],
  },
  {
    id: 2,
    name: "POKÓJ DELUXE",
    price: 499,
    size: "35 m²",
    guests: 2,
    image: "/pokoj2.jpg",
    amenities: ["WiFi", "TV", "Klimatyzacja", "Balkon"],
  },
  {
    id: 3,
    name: "APARTAMENT PREMIUM",
    price: 799,
    size: "50 m²",
    guests: 4,
    image: "/pokoj3.jpg",
    amenities: ["WiFi", "TV", "Klimatyzacja", "Balkon", "Jacuzzi"],
  },
];

export default function RoomList({ onSelectRoom, onBack }) {
  const [selectedRoom, setSelectedRoom] = useState(null);

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
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room) => {
            const isSelected = selectedRoom?.id === room.id;

            return (
              <div
                key={room.id}
                onClick={() => setSelectedRoom(room)}
                className={`bg-white border shadow-sm cursor-pointer transition hover:shadow-md
                  ${isSelected ? "border-[#C9A24D]" : "border-slate-200"}
                `}
              >
                {/* Image */}
                <div
                  className="h-56 w-full bg-center bg-cover"
                  style={{ backgroundImage: `url(${room.image})` }}
                />

                <div className="p-6">
                  <h3 className="font-heading text-xl font-semibold text-[#C9A24D]">
                    {room.name}
                  </h3>

                  <div className="mt-4 flex items-center justify-between border-t border-slate-200 pt-4">
                    <p className="font-semibold text-slate-900">
                      {room.price} zł / noc
                    </p>
                    <span className="text-slate-600 text-sm">
                      {room.size} • {room.guests} os.
                    </span>
                  </div>

                  <p className="mt-4 text-slate-600 text-sm leading-relaxed">
                    {room.amenities.join(" • ")}
                  </p>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectRoom(room);
                    }}
                    className={`mt-6 w-full px-6 py-3 font-semibold transition
                      border border-[#C9A24D]/70 text-slate-900 hover:bg-black hover:text-white
                    `}
                  >
                    <span className= "text-[#C9A24D]"> WYBIERZ</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
