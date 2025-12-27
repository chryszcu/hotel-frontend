// src/components/customer/MenuPages/Conferentions.jsx
import { useState } from "react";
import { FadeIn, SlideUp, SlideLeft, SlideRight } from "../../animations";

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
        "Przestrzeń idealna na spotkania biznesowe, szkolenia i prezentacje. Wyposażona w nowoczesny system multimedialny, komfortowe fotele i oświetlenie dostosowane do potrzeb spotkań. Doskonałe warunki do pracy zespołowej i indywidualnych konsultacji.",
      price: "299 zł / godz.",
      capacity: "20–30 osób",
      size: "45 m²",
      equipment: [
        "Ekran projekcyjny",
        "System nagłośnienia",
        "Flipchart",
        "Wi-Fi",
        "Klimatyzacja",
        "Stanowiska dla moderatorów",
      ],
      image: "/sala1.jpg",
    },
    {
      id: "conference",
      title: "SALA KONFERENCYJNA",
      description:
        "Duża sala przystosowana do większych wydarzeń, konferencji i seminariów. Posiada scenę, profesjonalne nagłośnienie i możliwość ustawienia w różnych konfiguracjach. Idealna na kongresy, targi i wydarzenia branżowe.",
      price: "499 zł / godz.",
      capacity: "50–80 osób",
      size: "80 m²",
      equipment: [
        "Scena",
        "Profesjonalne nagłośnienie",
        "3 ekrany",
        "Mikrofony bezprzewodowe",
        "Rejestracja video",
        "Streaming na żywo",
      ],
      image: "/sala2.jpg",
    },
    {
      id: "premium",
      title: "SALA PREMIUM",
      description:
        "Luksusowa przestrzeń z najwyższej klasy wyposażeniem, idealna na ważne spotkania, zarządy i prestiżowe eventy. System tłumaczeń symultanicznych, indywidualne oświetlenie. Gwarancja najwyższego standardu obsługi i dyskrecji.",
      price: "799 zł / godz.",
      capacity: "30–40 osób",
      size: "60 m²",
      equipment: [
        "System tłumaczeń",
        "Indywidualne monitory",
        "Kontrola oświetlenia",
        "VIP lounge",
        "Butler service",
        "System głosowania",
      ],
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
    "Skaner",
  ];

  const handleConferenceRoomClick = (room) => {
    setSelectedConferenceRoom(room);
    setShowForm(true);

    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const formattedDate = tomorrow.toISOString().split("T")[0];

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

    if (type === "checkbox") {
      if (name === "equipment") {
        setFormData((prev) => {
          const newEquipment = checked
            ? [...prev.equipment, value]
            : prev.equipment.filter((item) => item !== value);
          return { ...prev, equipment: newEquipment };
        });
      }
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSelectChange = (e) => {
    const { name, value, selectedOptions } = e.target;

    if (name === "equipment" && e.target.multiple) {
      const selected = Array.from(selectedOptions).map((option) => option.value);
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
    return (end - start) / 60;
  };

  const calculateEstimatedCost = () => {
    if (!selectedConferenceRoom) return 0;

    const duration = calculateDuration();
    const pricePerHour = parseInt(selectedConferenceRoom.price.split(" ")[0]);
    return pricePerHour * duration;
  };

  return (
    <div className="min-h-screen bg-transparent text-slate-900 px-6 py-24">
      <div className="max-w-6xl mx-auto">
        {/* Nagłówek (animowany jak w Rooms) */}
        <SlideUp delay={0.25} className="w-full">
          <div className="mb-12 text-center">
            <h1 className="font-heading text-4xl md:text-5xl font-bold">
              KONFERENCJE I EVENTY
            </h1>

            <SlideUp delay={0.35} className="w-full flex justify-center">
              <div className="mt-5 flex justify-center">
                <span className="h-px w-24 bg-black/70" />
              </div>
            </SlideUp>

            <FadeIn delay={0.45} className="w-full">
              <p className="mt-8 text-slate-600 text-lg leading-relaxed max-w-3xl mx-auto">
                Nasze centrum konferencyjne oferuje nowoczesne sale, pełne
                wyposażenie multimedialne oraz profesjonalną obsługę techniczną.
                To idealne miejsce na szkolenia, prezentacje, spotkania biznesowe
                oraz eventy firmowe.
              </p>
            </FadeIn>
          </div>
        </SlideUp>

        {/* Formularz rezerwacji (overlay) – fade tło + slide kontent */}
        {showForm && selectedConferenceRoom && (
          <>
            {/* tło bez animacji (żeby nie migało) */}
            <div className="fixed inset-0 bg-black/70 z-50" />

            {/* kontent modalny animowany */}
            <div className="fixed inset-0 z-50 overflow-y-auto">
              <div className="min-h-screen flex justify-center pt-24 pb-24 px-4">
                <SlideUp delay={0.05} className="w-full max-w-2xl">
                  <div className="w-full bg-white border border-slate-200 shadow-sm p-8 text-slate-900">
                    <div className="flex justify-between items-center mb-6">
                      <SlideLeft delay={0.08}>
                        <h2 className="font-heading text-2xl font-bold tracking-[0.12em] uppercase">
                          Rezerwacja sali konferencyjnej
                        </h2>
                      </SlideLeft>

                      <FadeIn delay={0.12}>
                        <button
                          onClick={handleCloseForm}
                          className="text-slate-700 hover:text-black text-3xl leading-none"
                          aria-label="Zamknij"
                        >
                          ×
                        </button>
                      </FadeIn>
                    </div>

                    <FadeIn delay={0.12}>
                      <div className="mb-6 p-4 border border-slate-200 bg-slate-50 rounded-lg">
                        <h3 className="font-heading text-lg font-semibold text-[#C9A24D] mb-2">
                          {selectedConferenceRoom.title}
                        </h3>
                        <p className="text-slate-600 text-sm leading-relaxed mb-3">
                          {selectedConferenceRoom.description}
                        </p>
                        <div className="flex flex-wrap gap-4 text-sm">
                          <span className="font-semibold text-slate-900">
                            {selectedConferenceRoom.price}
                          </span>
                          <span className="text-slate-600">
                            • {selectedConferenceRoom.capacity}
                          </span>
                          <span className="text-slate-600">
                            • {selectedConferenceRoom.size}
                          </span>
                        </div>
                      </div>
                    </FadeIn>

                    <form onSubmit={handleSubmit} className="space-y-5">
                      {/* Dane kontaktowe */}
                      <SlideUp delay={0.15}>
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
                      </SlideUp>

                      <SlideUp delay={0.2}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                          <div>
                            <label className="block text-sm font-semibold mb-2">
                              Email *
                            </label>
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
                            <label className="block text-sm font-semibold mb-2">
                              Telefon *
                            </label>
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
                      </SlideUp>

                      {/* Szczegóły rezerwacji */}
                      <SlideUp delay={0.25}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                          <div>
                            <label className="block text-sm font-semibold mb-2">
                              Data *
                            </label>
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
                              max={parseInt(
                                selectedConferenceRoom.capacity.split("–")[1]
                              )}
                              className="w-full bg-white border border-slate-300 px-4 py-3 focus:outline-none focus:border-[#C9A24D]"
                            />
                            <p className="text-xs text-slate-500 mt-1">
                              Maksymalnie: {selectedConferenceRoom.capacity}
                            </p>
                          </div>
                        </div>
                      </SlideUp>

                      <SlideUp delay={0.3}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                          <div>
                            <label className="block text-sm font-semibold mb-2">
                              Godzina rozpoczęcia *
                            </label>
                            <select
                              name="startTime"
                              value={formData.startTime}
                              onChange={handleInputChange}
                              required
                              className="w-full bg-white border border-slate-300 px-4 py-3 focus:outline-none focus:border-[#C9A24D]"
                            >
                              {[
                                "08:00",
                                "09:00",
                                "10:00",
                                "11:00",
                                "12:00",
                                "13:00",
                                "14:00",
                                "15:00",
                                "16:00",
                                "17:00",
                                "18:00",
                                "19:00",
                                "20:00",
                              ].map((t) => (
                                <option key={t} value={t}>
                                  {t}
                                </option>
                              ))}
                            </select>
                          </div>

                          <div>
                            <label className="block text-sm font-semibold mb-2">
                              Godzina zakończenia *
                            </label>
                            <select
                              name="endTime"
                              value={formData.endTime}
                              onChange={handleInputChange}
                              required
                              className="w-full bg-white border border-slate-300 px-4 py-3 focus:outline-none focus:border-[#C9A24D]"
                            >
                              {[
                                "09:00",
                                "10:00",
                                "11:00",
                                "12:00",
                                "13:00",
                                "14:00",
                                "15:00",
                                "16:00",
                                "17:00",
                                "18:00",
                                "19:00",
                                "20:00",
                                "21:00",
                              ].map((t) => (
                                <option key={t} value={t}>
                                  {t}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>
                      </SlideUp>

                      {/* Dodatkowe wyposażenie */}
                      <SlideUp delay={0.35}>
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
                      </SlideUp>

                      {/* Notatki */}
                      <SlideUp delay={0.4}>
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
                      </SlideUp>

                      {/* Podsumowanie kosztów */}
                      <FadeIn delay={0.2}>
                        <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg">
                          <h4 className="font-semibold text-slate-900 mb-2">
                            Koszt:
                          </h4>
                          <div className="space-y-1 text-sm">
                            <div className="flex justify-between">
                              <span>Sala: {selectedConferenceRoom.title}</span>
                              <span>
                                {calculateDuration()}h ×{" "}
                                {selectedConferenceRoom.price}
                              </span>
                            </div>
                            <div className="border-t border-slate-300 pt-2 mt-2">
                              <div className="flex justify-between font-semibold">
                                <span>Łącznie:</span>
                                <span className="text-[#C9A24D]">
                                  {calculateEstimatedCost()} zł
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </FadeIn>

                      {/* Przyciski */}
                      <SlideUp delay={0.45}>
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
                          * Pola wymagane. Potwierdzenie rezerwacji i wycena
                          zostaną wysłane na podany adres email w ciągu 24h.
                        </p>
                      </SlideUp>
                    </form>
                  </div>
                </SlideUp>
              </div>
            </div>
          </>
        )}

        {/* Lista sal – animacje na sekcjach, bez animowania overlayów */}
        <div className="space-y-16">
          {conferenceRooms.map((room, index) => {
            const isEven = index % 2 === 0;
            const CardAnim = isEven ? SlideLeft : SlideRight;

            return (
              <SlideUp key={room.id} delay={0.15 + index * 0.12} className="w-full">
                <div className="bg-white border border-slate-200 shadow-sm overflow-hidden">
                  <div className="flex flex-col lg:flex-row">
                    {/* Zdjęcie */}
                    <CardAnim delay={0.05} className="lg:w-1/2 h-80 lg:h-auto">
                      <div className="h-full w-full overflow-hidden">
                        <div
                          className="h-full w-full bg-center bg-cover hover:scale-[1.02] transition-transform duration-500"
                          style={{ backgroundImage: `url(${room.image})` }}
                        />
                      </div>
                    </CardAnim>

                    {/* Opis */}
                    <CardAnim delay={0.1} className="lg:w-1/2 p-8 lg:p-10">
                      <div className="h-full flex flex-col">
                        <div>
                          <SlideUp delay={0.08}>
                            <h3 className="font-heading text-2xl lg:text-3xl font-semibold text-[#C9A24D] mb-4">
                              {room.title}
                            </h3>
                          </SlideUp>

                          <FadeIn delay={0.12}>
                            <p className="text-slate-600 leading-relaxed mb-6">
                              {room.description}
                            </p>
                          </FadeIn>

                          {/* Specyfikacje */}
                          <SlideUp delay={0.15}>
                            <div className="mb-6 grid grid-cols-2 gap-4">
                              <div className="flex items-center gap-2">
                                <svg
                                  className="w-5 h-5 text-[#C9A24D]"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-10A2.5 2.5 0 0021 3.5V3a2 2 0 00-2-2h-4a2 2 0 00-2 2v.5a2.5 2.5 0 002.5 2.5z"
                                  />
                                </svg>
                                <div>
                                  <p className="font-medium text-slate-900">
                                    Pojemność
                                  </p>
                                  <p className="text-slate-600 text-sm">
                                    {room.capacity}
                                  </p>
                                </div>
                              </div>

                              <div className="flex items-center gap-2">
                                <svg
                                  className="w-5 h-5 text-[#C9A24D]"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                                  />
                                </svg>
                                <div>
                                  <p className="font-medium text-slate-900">
                                    Powierzchnia
                                  </p>
                                  <p className="text-slate-600 text-sm">
                                    {room.size}
                                  </p>
                                </div>
                              </div>

                              <div className="flex items-center gap-2">
                                <svg
                                  className="w-5 h-5 text-[#C9A24D]"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                  />
                                </svg>
                                <div>
                                  <p className="font-medium text-slate-900">
                                    Cena
                                  </p>
                                  <p className="text-slate-600 text-sm font-semibold">
                                    {room.price}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </SlideUp>

                          {/* Wyposażenie */}
                          <SlideUp delay={0.2}>
                            <div className="mb-6">
                              <h4 className="font-medium text-slate-900 mb-3">
                                Standardowe wyposażenie:
                              </h4>
                              <div className="flex flex-wrap gap-2">
                                {room.equipment.map((item, i) => (
                                  <FadeIn key={i} delay={0.04 * i}>
                                    <span className="px-3 py-1.5 bg-slate-100 text-slate-700 text-sm rounded-lg border border-slate-200">
                                      {item}
                                    </span>
                                  </FadeIn>
                                ))}
                              </div>
                            </div>
                          </SlideUp>
                        </div>

                        {/* Przycisk */}
                        <SlideUp delay={0.25}>
                          <div className="mt-auto pt-6 border-t border-slate-200">
                            <button
                              onClick={() => handleConferenceRoomClick(room)}
                              className="w-full lg:w-auto border border-[#C9A24D] px-8 py-4 font-heading text-sm tracking-[0.18em] uppercase text-[#C9A24D] hover:bg-[#C9A24D] hover:text-white transition flex items-center justify-center gap-3"
                            >
                              <svg
                                className="w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                />
                              </svg>
                              ZAREZERWUJ SALĘ
                            </button>
                          </div>
                        </SlideUp>
                      </div>
                    </CardAnim>
                  </div>
                </div>
              </SlideUp>
            );
          })}
        </div>

        {/* Informacja dodatkowa */}
        <SlideUp delay={0.35} className="w-full">
          <div className="mt-16 p-8 bg-white border border-slate-200 shadow-sm">
            <SlideLeft delay={0.05}>
              <h3 className="text-2xl font-semibold text-[#C9A24D] mb-6">
                INFORMACJE ORGANIZACYJNE
              </h3>
            </SlideLeft>

            <FadeIn delay={0.1}>
              <div className="grid grid-cols-1 lg:grid-cols-1 gap-8">
                <div>
                  <h4 className="font-medium text-slate-900 mb-3">
                    Rezerwacja:
                  </h4>
                  <ul className="text-slate-600 space-y-3">
                    {[
                      "Minimalny czas wynajmu: 1 godzina",
                      "Rezerwacje przyjmujemy z co najmniej 48-godzinnym wyprzedzeniem",
                      "Anulowanie rezerwacji możliwe do 2 dni przed wydarzeniem",
                    ].map((t, i) => (
                      <SlideUp key={i} delay={0.08 * i}>
                        <li className="flex items-start">
                          <span className="text-[#C9A24D] mr-2 mt-1">•</span>
                          <span>
                            {t.split(":")[0]}:{" "}
                            <strong>{t.split(":")[1]}</strong>
                          </span>
                        </li>
                      </SlideUp>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeIn>

            <SlideUp delay={0.2}>
              <div className="mt-8 pt-8 border-t border-slate-200">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                  <div className="flex items-center gap-4">
                    <svg
                      className="w-10 h-10 text-[#C9A24D]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    <div>
                      <p className="text-slate-700 font-medium">
                        Potrzebujesz indywidualnej wyceny?
                      </p>
                      <p className="text-slate-600 text-sm mt-1">
                        Skontaktuj się z naszym Działem Konferencji
                      </p>
                    </div>
                  </div>
                  <div className="md:ml-auto">
                    <p className="text-slate-900 font-semibold">
                      +48 765 432 109
                    </p>
                    <p className="text-slate-600 text-sm">
                      konferencje@hotelspa.pl
                    </p>
                  </div>
                </div>
              </div>
            </SlideUp>
          </div>
        </SlideUp>
      </div>
    </div>
  );
}
