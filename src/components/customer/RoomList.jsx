import { useState } from 'react'

const rooms = [
  {
    id: 1,
    name: "Pokój Standard",
    price: 299,
    size: "25 m²",
    guests: 2,
    image: "src/assets/images/room1.jpg",
    amenities: ["WiFi", "TV", "Klimatyzacja"]
  },
  {
    id: 2,
    name: "Pokój Deluxe",
    price: 499,
    size: "35 m²",
    guests: 2,
    image: "src/assets/images/room2.jpg",
    amenities: ["WiFi", "TV", "Klimatyzacja", "Balkon"]
  },
  {
    id: 3,
    name: "Apartament Premium",
    price: 799,
    size: "50 m²",
    guests: 4,
    image: "src/assets/images/room3.jpg",
    amenities: ["WiFi", "TV", "Klimatyzacja", "Balkon", "Jacuzzi"]
  }
]

export default function RoomList({ onSelectRoom, onBack }) {
  const [selectedRoom, setSelectedRoom] = useState(null)

  return (
    <section className="min-h-screen bg-slate-900 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <button 
          onClick={onBack}
          className="flex items-center text-slate-400 hover:text-white mb-8"
        >
          ← Powrót
        </button>
        
        <h2 className="text-3xl font-bold mb-8">Wybierz pokój</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map(room => (
            <div 
              key={room.id}
              className={`bg-slate-800 rounded-xl overflow-hidden border-2 cursor-pointer transition-all ${
                selectedRoom?.id === room.id ? 'border-indigo-500' : 'border-slate-700'
              }`}
              onClick={() => setSelectedRoom(room)}
            >
              <div className="h-48 bg-slate-700 flex items-center justify-center">
                <span className="text-slate-400">Zdjęcie pokoju</span>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{room.name}</h3>
                <p className="text-2xl font-bold text-indigo-400 mb-4">{room.price} zł/noc</p>
                
                <div className="text-slate-400 text-sm mb-4">
                  <p>• Powierzchnia: {room.size}</p>
                  <p>• Goście: {room.guests}</p>
                  <p>• {room.amenities.join(', ')}</p>
                </div>
                
                <button 
                  onClick={(e) => {
                    e.stopPropagation()
                    onSelectRoom(room)
                  }}
                  className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700"
                >
                  Wybierz
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}