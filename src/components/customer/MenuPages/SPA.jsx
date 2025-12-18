import { useState } from "react";

export default function SPA() {
  const [showForm, setShowForm] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    notes: "",
  });

  const services = [
    {
      id: 1,
      title: "MASAŻ KLASYCZNY CAŁOŚCIOWY",
      description:
        "Intensywny masaż niwelujący napięcia mięśniowe. Regeneruje, działa przeciwbólowo i odprężająco.",
      price: "250 zł / 50 min",
    },
    {
      id: 2,
      title: "MASAŻ RELAKSACYJNY",
      description:
        "Delikatny masaż odprężający, który pozwoli Ci się wyciszyć i zregenerować. Pomoże w tym sprzyjająca temu atmosfera — spokojna muzyka, świece, zapach olejków eterycznych.",
      price: "199 zł / 60 min",
    },
    {
      id: 3,
      title: "MASAŻ BASKIJSKI",
      description:
        "Płynny, harmonijny masaż wykorzystujący różnorodne techniki w tym ugniatanie, gładzenie, rozcieranie, akupresurę i elementy jogi, dla przywrócenia stanu równowagi ciała i ducha.",
      price: "320 zł / 60 min",
    },
    {
      id: 4,
      title: "MASAŻ CIEPŁĄ CZEKOLADĄ",
      description:
        "Masaż aromatyczną, ciepłą czekoladą w połączeniu z naturalnym olejem głęboko zrelaksuje i odpręży Twoje ciało.",
      price: "280 zł / 50 min",
    },
    {
      id: 5,
      title: "KOBIDO",
      description:
        "Japoński masaż twarzy, szyi i dekoltu stanowiący alternatywę medycyny estetycznej. Masaż tkanek głębokich wygładza zmarszczki i podnosi owal twarzy.",
      price: "280 zł / 60 min",
    },
    {
      id: 6,
      title: "BODY PEELING",
      description:
        "Peeling całego ciała na bazie naturalnych składników o właściwościach oczyszczających, wygładzających i nawilżających.",
      price: "170 zł / 25 min",
    },
  ];

  const handleServiceClick = (service) => {
    setSelectedService(service);
    setShowForm(true);

    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const formattedDate = tomorrow.toISOString().split("T")[0];

    setFormData((prev) => ({
      ...prev,
      service: service.title,
      date: formattedDate,
      time: "10:00",
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Rezerwacja SPA:", {
      ...formData,
      service: selectedService.title,
      price: selectedService.price,
    });

    alert(
      `Dziękujemy za rezerwację ${selectedService.title}!\nPotwierdzenie zostanie wysłane na adres: ${formData.email}`
    );

    setShowForm(false);
    setSelectedService(null);
    setFormData({
      name: "",
      email: "",
      phone: "",
      date: "",
      time: "",
      notes: "",
    });
  };

  const handleCloseForm = () => {
    setShowForm(false);
    setSelectedService(null);
  };

  return (
    <div className="min-h-screen bg-transparent text-slate-900 px-6 py-24">
      <div className="max-w-5xl mx-auto">
        {/* Nagłówek */}
        <div className="mb-10 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold">
            STREFA SPA
          </h1>
          <div className="mt-5 flex justify-center">
            <span className="h-px w-24 bg-black/70" />
          </div>
        </div>

        <p className="text-slate-600 text-lg leading-relaxed mb-12 max-w-3xl mx-auto text-center">
          Zapraszamy do wyjątkowej strefy relaksu, w której oferujemy szeroki wybór zabiegów,
          masaży oraz udogodnień. Nasze SPA to idealne miejsce na regenerację ciała i odprężenie
          umysłu.
        </p>

        {/* Formularz rezerwacji (overlay) */}
        {showForm && selectedService && (
          <div className="fixed inset-0 bg-black/70 z-50 overflow-y-auto">
            <div className="min-h-screen flex justify-center pt-24 pb-24 px-4">
              <div className="w-full max-w-md bg-white border border-slate-200 shadow-sm p-8 text-slate-900">
                <div className="flex justify-between items-center mb-6">
                <h2 className="font-heading text-2xl font-bold tracking-[0.12em] uppercase">
                  Rezerwacja SPA
                </h2>

                <button
                  onClick={handleCloseForm}
                  className="text-slate-700 hover:text-black text-3xl leading-none"
                  aria-label="Zamknij"
                >
                  ×
                </button>
              </div>

              <div className="mb-6 p-4 border border-slate-200 bg-white">
                <h3 className="font-heading text-lg font-semibold text-[#C9A24D] mb-2">
                  {selectedService.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-3">
                  {selectedService.description}
                </p>
                <p className="font-semibold text-slate-900">{selectedService.price}</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
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

                <div className="grid grid-cols-2 gap-4">
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
                    <label className="block text-sm font-semibold mb-2">Godzina *</label>
                    <select
                      name="time"
                      value={formData.time}
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
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Uwagi (opcjonalnie)
                  </label>
                  <textarea
                    name="notes"
                    value={formData.notes}
                    onChange={handleInputChange}
                    rows="3"
                    className="w-full bg-white border border-slate-300 px-4 py-3 focus:outline-none focus:border-[#C9A24D]"
                    placeholder="Np. preferencje dotyczące masażu, alergie, życzenia specjalne..."
                  />
                </div>

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
                    Zarezerwuj
                  </button>
                </div>

                <p className="text-xs text-slate-600 text-center mt-3">
                  * Pola wymagane. Potwierdzenie rezerwacji wyślemy na podany adres email.
                </p>
              </form>
            </div>
            </div>
          </div>
        )}

        {/* Lista usług */}
        <div className="font-heading grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              onClick={() => handleServiceClick(service)}
              className="
                bg-white border border-slate-200 shadow-sm
                p-6 cursor-pointer transition
                hover:shadow-md hover:border-amber-300
              "
            >
              <h3 className="text-xl font-semibold text-[#C9A24D] mb-3">
                {service.title}
              </h3>

              <p className="text-slate-600 text-sm leading-relaxed mb-5">
                {service.description}
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                <p className="font-semibold text-slate-900">{service.price}</p>
                <span className="
                text-sm font-semibold
                border border-[#C9A24D]/70
                px-4 py-1.5 
                ">
                  <span className= "text-[#C9A24D]"> Wybierz</span>
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
          <ul className="text-slate-600 space-y-2">
            <li className="flex items-start">
              <span className="text-[#C9A24D] mr-2">•</span>
              Rezerwacje przyjmujemy z co najmniej 24-godzinnym wyprzedzeniem
            </li>
            <li className="flex items-start">
              <span className="text-[#C9A24D] mr-2">•</span>
              Prosimy o przybycie 15 minut przed rozpoczęciem zabiegu
            </li>
            <li className="flex items-start">
              <span className="text-[#C9A24D] mr-2">•</span>
              Anulowanie rezerwacji możliwe do 12 godzin przed zabiegiem
            </li>
            <li className="flex items-start">
              <span className="text-[#C9A24D] mr-2">•</span>
              Godziny otwarcia SPA: 9:00 - 21:00 (ostatnia rezerwacja o 20:00)
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
