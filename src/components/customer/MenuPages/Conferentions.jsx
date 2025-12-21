// src/components/customer/MenuPages/Conferentions.jsx
import { useState } from "react";

export default function Conferention() {
  const [showForm, setShowForm] = useState(false);
  const [selectedConferenceRoom, setSelectedConferenceRoom] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    date: "",
    startTime: "09:00",
    endTime: "17:00",
    participants: 10,
    roomType: "Sala biznesowa",
    equipment: [],
    catering: "none",
    notes: "",
  });

  const conferenceRooms = [
    {
      id: "business",
      title: "SALA BIZNESOWA",
      description:
        "Przestrzeń idealna na spotkania biznesowe, szkolenia i prezentacje. Wyposażona w nowoczesny system multimedialny, komfortowe fotele i oświetlenie dostosowane do potrzeb spotkań.",
      price: "299 zł / godz.",
      capacity: "20–30 osób",
      size: "45 m²",
      equipment: ["Ekran projekcyjny", "System nagłośnienia", "Flipchart", "Wi-Fi", "Klimatyzacja"],
      image: "/sala1.jpg",
    },
    {
      id: "conference",
      title: "SALA KONFERENCYJNA",
      description:
        "Duża sala przystosowana do większych wydarzeń, konferencji i seminariów. Posiada scenę, profesjonalne nagłośnienie i możliwość ustawienia w różnych konfiguracjach.",
      price: "499 zł / godz.",
      capacity: "50–80 osób",
      size: "80 m²",
      equipment: ["Scena", "Profesjonalne nagłośnienie", "3 ekrany", "Mikrofony bezprzewodowe", "Rejestracja video"],
      image: "/sala2.jpg",
    },
    {
      id: "premium",
      title: "SALA PREMIUM",
      description:
        "Luksusowa przestrzeń z najwyższej klasy wyposażeniem, idealna na ważne spotkania, zarządy i prestiżowe eventy. System tłumaczeń symultanicznych, indywidualne oświetlenie.",
      price: "799 zł / godz.",
      capacity: "30–40 osób",
      size: "60 m²",
      equipment: ["System tłumaczeń", "Indywidualne monitory", "Kontrola oświetlenia", "VIP lounge", "Butler service"],
      image: "/sala3.jpg",
    },
  ];

  const equipmentOptions = [
    "Ekran projekcyjny",
    "System nagłośnienia",
    "Mikrofon bezprzewodowy",
    "Flipchart",
    "Tablica interaktywna",
    "System do głosowania",
    "Nagrywanie spotkania",
    "Tłumaczenie symultaniczne",
    "Drukarka",
    "Skaner"
  ];

  const handleConferenceRoomClick = (room) => {
    setSelectedConferenceRoom(room);
    setShowForm(true);

    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const formattedDate = tomorrow.toISOString().split("T")[0];

    // Ustaw domyślne wyposażenie na podstawie sali
    const defaultEquipment = room.equipment.slice(0, 3);

    setFormData((prev) => ({
      ...prev,
      roomType: room.title,
      date: formattedDate,
      startTime: "09:00",
      endTime: "17:00",
      participants: parseInt(room.capacity.split("–")[0]),
      equipment: defaultEquipment,
    }));
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (type === 'checkbox') {
      if (name === 'equipment') {
        setFormData((prev) => {
          const newEquipment = checked 
            ? [...prev.equipment, value]
            : prev.equipment.filter(item => item !== value);
          return { ...prev, equipment: newEquipment };
        });
      }
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSelectChange = (e) => {
    const { name, value, selectedOptions } = e.target;
    
    if (name === 'equipment' && e.target.multiple) {
      const selected = Array.from(selectedOptions).map(option => option.value);
      setFormData((prev) => ({ ...prev, equipment: selected }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Rezerwacja sali konferencyjnej:", {
      ...formData,
      room: selectedConferenceRoom.title,
      price: selectedConferenceRoom.price,
    });

    alert(
      `Dziękujemy za rezerwację ${selectedConferenceRoom.title}!\nPotwierdzenie rezerwacji i wycena zostaną wysłane na adres: ${formData.email}`
    );

    setShowForm(false);
    setSelectedConferenceRoom(null);
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      date: "",
      startTime: "09:00",
      endTime: "17:00",
      participants: 10,
      roomType: "Sala biznesowa",
      equipment: [],
      notes: "",
    });
  };

  const handleCloseForm = () => {
    setShowForm(false);
    setSelectedConferenceRoom(null);
  };

  const calculateDuration = () => {
    const [startHour, startMinute] = formData.startTime.split(":").map(Number);
    const [endHour, endMinute] = formData.endTime.split(":").map(Number);
    
    const start = startHour * 60 + startMinute;
    const end = endHour * 60 + endMinute;
    
    if (end <= start) return 0;
    return (end - start) / 60; // w godzinach
  };

  const calculateEstimatedCost = () => {
    if (!selectedConferenceRoom) return 0;
    
    const duration = calculateDuration();
    const pricePerHour = parseInt(selectedConferenceRoom.price.split(" ")[0]);
    //const baseCost = pricePerHour * duration;
    
    return pricePerHour * duration;
  };

  return (
    <div className="min-h-screen bg-transparent text-slate-900 px-6 py-24">
      <div className="max-w-5xl mx-auto">
        {/* Nagłówek */}
        <div className="mb-10 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold">
            KONFERENCJE I EVENTY
          </h1>
          <div className="mt-5 flex justify-center">
            <span className="h-px w-24 bg-black/70" />
          </div>
        </div>

        <p className="text-slate-600 text-lg leading-relaxed mb-12 max-w-3xl mx-auto text-center">
          Nasze centrum konferencyjne oferuje nowoczesne sale, pełne wyposażenie multimedialne
          oraz profesjonalną obsługę techniczną. To idealne miejsce na szkolenia, prezentacje,
          spotkania biznesowe oraz eventy firmowe.
        </p>

        {/* Formularz rezerwacji (overlay) */}
        {showForm && selectedConferenceRoom && (
          <div className="fixed inset-0 bg-black/70 z-50 overflow-y-auto">
            <div className="min-h-screen flex justify-center pt-24 pb-24 px-4">
              <div className="w-full max-w-2xl bg-white border border-slate-200 shadow-sm p-8 text-slate-900">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="font-heading text-2xl font-bold tracking-[0.12em] uppercase">
                    Rezerwacja sali konferencyjnej
                  </h2>
                  <button
                    onClick={handleCloseForm}
                    className="text-slate-700 hover:text-black text-3xl leading-none"
                    aria-label="Zamknij"
                  >
                    ×
                  </button>
                </div>

                <div className="mb-6 p-4 border border-slate-200 bg-slate-50 rounded-lg">
                  <h3 className="font-heading text-lg font-semibold text-[#C9A24D] mb-2">
                    {selectedConferenceRoom.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-3">
                    {selectedConferenceRoom.description}
                  </p>
                  <div className="flex flex-wrap gap-4 text-sm">
                    <span className="font-semibold text-slate-900">{selectedConferenceRoom.price}</span>
                    <span className="text-slate-600">• {selectedConferenceRoom.capacity}</span>
                    <span className="text-slate-600">• {selectedConferenceRoom.size}</span>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Dane kontaktowe */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold mb-2">
                        Imię i nazwisko *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-white border border-slate-300 px-4 py-3 focus:outline-none focus:border-[#C9A24D]"
                        placeholder="Wpisz imię i nazwisko"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2">
                        Firma (opcjonalnie)
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full bg-white border border-slate-300 px-4 py-3 focus:outline-none focus:border-[#C9A24D]"
                        placeholder="Nazwa firmy"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold mb-2">Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-white border border-slate-300 px-4 py-3 focus:outline-none focus:border-[#C9A24D]"
                        placeholder="twoj@email.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2">Telefon *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-white border border-slate-300 px-4 py-3 focus:outline-none focus:border-[#C9A24D]"
                        placeholder="+48 123 456 789"
                      />
                    </div>
                  </div>

                  {/* Szczegóły rezerwacji */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold mb-2">Data *</label>
                      <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleInputChange}
                        required
                        min={new Date().toISOString().split("T")[0]}
                        className="w-full bg-white border border-slate-300 px-4 py-3 focus:outline-none focus:border-[#C9A24D]"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2">
                        Liczba uczestników *
                      </label>
                      <input
                        type="number"
                        name="participants"
                        value={formData.participants}
                        onChange={handleInputChange}
                        required
                        min={1}
                        max={parseInt(selectedConferenceRoom.capacity.split("–")[1])}
                        className="w-full bg-white border border-slate-300 px-4 py-3 focus:outline-none focus:border-[#C9A24D]"
                      />
                      <p className="text-xs text-slate-500 mt-1">
                        Maksymalnie: {selectedConferenceRoom.capacity}
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold mb-2">Godzina rozpoczęcia *</label>
                      <select
                        name="startTime"
                        value={formData.startTime}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-white border border-slate-300 px-4 py-3 focus:outline-none focus:border-[#C9A24D]"
                      >
                        <option value="08:00">08:00</option>
                        <option value="09:00">09:00</option>
                        <option value="10:00">10:00</option>
                        <option value="11:00">11:00</option>
                        <option value="12:00">12:00</option>
                        <option value="13:00">13:00</option>
                        <option value="14:00">14:00</option>
                        <option value="15:00">15:00</option>
                        <option value="16:00">16:00</option>
                        <option value="17:00">17:00</option>
                        <option value="18:00">18:00</option>
                        <option value="19:00">19:00</option>
                        <option value="20:00">20:00</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2">Godzina zakończenia *</label>
                      <select
                        name="endTime"
                        value={formData.endTime}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-white border border-slate-300 px-4 py-3 focus:outline-none focus:border-[#C9A24D]"
                      >
                        <option value="09:00">09:00</option>
                        <option value="10:00">10:00</option>
                        <option value="11:00">11:00</option>
                        <option value="12:00">12:00</option>
                        <option value="13:00">13:00</option>
                        <option value="14:00">14:00</option>
                        <option value="15:00">15:00</option>
                        <option value="16:00">16:00</option>
                        <option value="17:00">17:00</option>
                        <option value="18:00">18:00</option>
                        <option value="19:00">19:00</option>
                        <option value="20:00">20:00</option>
                        <option value="21:00">21:00</option>
                      </select>
                    </div>
                  </div>

                  {/* Dodatkowe wyposażenie */}
                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Dodatkowe wyposażenie (opcjonalnie)
                    </label>
                    <select
                      name="equipment"
                      multiple
                      value={formData.equipment}
                      onChange={handleSelectChange}
                      className="w-full bg-white border border-slate-300 px-4 py-3 focus:outline-none focus:border-[#C9A24D] h-32"
                      size={5}
                    >
                      {equipmentOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                    <p className="text-xs text-slate-500 mt-1">
                      Przytrzymaj Ctrl (Cmd na Mac) aby wybrać wiele opcji
                    </p>
                  </div>

                  {/* Notatki */}
                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Dodatkowe uwagi (opcjonalnie)
                    </label>
                    <textarea
                      name="notes"
                      value={formData.notes}
                      onChange={handleInputChange}
                      rows="3"
                      className="w-full bg-white border border-slate-300 px-4 py-3 focus:outline-none focus:border-[#C9A24D]"
                      placeholder="Np. specjalne życzenia, plan wydarzenia..."
                    />
                  </div>

                  {/* Podsumowanie kosztów */}
                  <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg">
                    <h4 className="font-semibold text-slate-900 mb-2">Koszt:</h4>
                    <div className="space-y-1 text-sm">
                      <div className="flex justify-between">
                        <span>Sala: {selectedConferenceRoom.title}</span>
                        <span>{calculateDuration()}h × {selectedConferenceRoom.price}</span>
                      </div>
                      <div className="border-t border-slate-300 pt-2 mt-2">
                        <div className="flex justify-between font-semibold">
                          <span>Łącznie:</span>
                          <span className="text-[#C9A24D]">{calculateEstimatedCost()} zł</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Przyciski */}
                  <div className="flex gap-3 pt-4">
                    <button
                      type="button"
                      onClick={handleCloseForm}
                      className="flex-1 border border-black/70 px-4 py-3 font-semibold hover:bg-black hover:text-white transition"
                    >
                      Anuluj
                    </button>
                    <button
                      type="submit"
                      className="flex-1 border border-[#C9A24D] px-4 py-3 font-semibold text-[#C9A24D] hover:bg-[#C9A24D] hover:text-white transition"
                    >
                      Wyślij zapytanie
                    </button>
                  </div>

                  <p className="text-xs text-slate-600 text-center mt-3">
                    * Pola wymagane. Potwierdzenie rezerwacji i wycena zostaną wysłane na podany adres email w ciągu 24h.
                  </p>
                </form>
              </div>
            </div>
          </div>
        )}

        {/* Lista sal konferencyjnych */}
        <div className="font-heading grid grid-cols-1 md:grid-cols-3 gap-8">
          {conferenceRooms.map((room) => (
            <div
              key={room.id}
              onClick={() => handleConferenceRoomClick(room)}
              className="
                bg-white border border-slate-200 shadow-sm
                p-6 cursor-pointer transition
                hover:shadow-md hover:border-amber-300
              "
            >
              <h3 className="text-xl font-semibold text-[#C9A24D] mb-3">
                {room.title}
              </h3>

              <p className="text-slate-600 text-sm leading-relaxed mb-5">
                {room.description}
              </p>

              <div className="mb-4">
                <h4 className="font-medium text-slate-900 mb-2">Wyposażenie:</h4>
                <div className="flex flex-wrap gap-2">
                  {room.equipment.map((item, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-slate-100 text-slate-700 text-xs rounded"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                <div>
                  <p className="font-semibold text-slate-900">{room.price}</p>
                  <p className="text-slate-500 text-sm">{room.capacity} • {room.size}</p>
                </div>
                <span className="text-sm font-semibold border border-[#C9A24D]/70 px-4 py-1.5">
                  <span className="text-[#C9A24D]">Wybierz</span>
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Informacja dodatkowa */}
        <div className="mt-12 p-6 bg-white border border-slate-200 shadow-sm">
          <h3 className="text-xl font-semibold text-[#C9A24D] mb-4">
            INFORMACJE ORGANIZACYJNE
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-medium text-slate-900 mb-3">Rezerwacja:</h4>
              <ul className="text-slate-600 space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="text-[#C9A24D] mr-2">•</span>
                  Minimalny czas wynajmu: 1 godzina
                </li>
                <li className="flex items-start">
                  <span className="text-[#C9A24D] mr-2">•</span>
                  Rezerwacje przyjmujemy z co najmniej 48-godzinnym wyprzedzeniem
                </li>
                <li className="flex items-start">
                  <span className="text-[#C9A24D] mr-2">•</span>
                  Anulowanie rezerwacji możliwe do 2 dni przed wydarzeniem
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-6 pt-6 border-t border-slate-200">
            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 text-[#C9A24D] mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <div>
                <p className="text-slate-700 text-sm font-medium">
                  Potrzebujesz indywidualnej wyceny lub masz pytania?
                </p>
                <p className="text-slate-600 text-sm mt-1">
                  Skontaktuj się z naszym Działem Konferencji: <span className="font-semibold">+48 123 456 789</span> lub <span className="font-semibold">konferencje@hotelspa.pl</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}