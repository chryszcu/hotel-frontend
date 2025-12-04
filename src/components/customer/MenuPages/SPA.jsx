import { useState } from 'react';

export default function SPA() {
  const [showForm, setShowForm] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    notes: '',
  });

  const services = [
    {
      id: 1,
      title: "Masaż klasyczny całościowy",
      description: "Intensywny masaż niwelujący napięcia mięśniowe. Regeneruje, działa przeciwbólowo i odprężająco.",
      price: "250 zł / 50 min",
    },
    {
      id: 2,
      title: "Masaż relaksacyjny",
      description: "Delikatny masaż odprężający, który pozwoli Ci się wyciszyć i zregenerować. Pomoże w tym sprzyjająca temu atmosfera — spokojna muzyka, świece, zapach olejków eterycznych.",
      price: "199 zł / 60 min",
    },
    {
      id: 3,
      title: "Masaż balijski",
      description: "Płynny, harmonijny masaż wykorzystujący różnorodne techniki w tym ugniatanie, gładzenie, rozcieranie, akupresurę i elementy jogi, dla przywrócenia stanu równowagi ciała i ducha.",
      price: "320 zł / 60 min",
    },
    {
      id: 4,
      title: "Masaż ciepłą czekoladą",
      description: "Masaż aromatyczną, ciepłą czekoladą w połączeniu z naturalnym olejem głęboko zrelaksuje i odpręży Twoje ciało.",
      price: "280 zł / 50 min",
    },
    {
      id: 5,
      title: "Kobido",
      description: "Japoński masaż twarzy, szyi i dekoltu stanowiący alternatywę medycyny estetycznej. Masaż tkanek głębokich wygładza zmarszczki i podnosi owal twarzy.",
      price: "280 zł / 60 min",
    },
    {
      id: 6,
      title: "Body peeling",
      description: "Peeling całego ciała na bazie naturalnych składników o właściwościach oczyszczających, wygładzających i nawilżających.",
      price: "170 zł / 25 min",
    },
  ];

  const handleServiceClick = (service) => {
    setSelectedService(service);
    setShowForm(true);
    // Ustaw domyślną datę na jutro
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const formattedDate = tomorrow.toISOString().split('T')[0];
    
    setFormData(prev => ({
      ...prev,
      service: service.title,
      date: formattedDate,
      time: '10:00',
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Tutaj można dodać logikę wysyłania do backendu
    console.log('Rezerwacja SPA:', {
      ...formData,
      service: selectedService.title,
      price: selectedService.price,
    });
    
    alert(`Dziękujemy za rezerwację ${selectedService.title}!\nPotwierdzenie zostanie wysłane na adres: ${formData.email}`);
    
    // Reset formularza
    setShowForm(false);
    setSelectedService(null);
    setFormData({
      name: '',
      email: '',
      phone: '',
      date: '',
      time: '',
      notes: '',
    });
  };

  const handleCloseForm = () => {
    setShowForm(false);
    setSelectedService(null);
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 px-6 py-24">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-purple-400">
          Strefa SPA
        </h1>

        <p className="text-slate-300 text-lg leading-relaxed mb-10">
          Zapraszamy do wyjątkowej strefy relaksu, w której oferujemy szeroki wybór zabiegów,
          masaży oraz udogodnień. Nasze SPA to idealne miejsce na regenerację ciała i odprężenie umysłu.
        </p>

        {/* Formularz rezerwacji (overlay) */}
        {showForm && selectedService && (
          <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
            <div className="bg-slate-800 border border-slate-700 rounded-2xl p-8 w-full max-w-md">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-indigo-400">
                  Rezerwacja SPA
                </h2>
                <button
                  onClick={handleCloseForm}
                  className="text-slate-400 hover:text-white text-2xl"
                >
                  ×
                </button>
              </div>

              <div className="mb-6 p-4 bg-slate-900/50 rounded-lg">
                <h3 className="font-semibold text-lg mb-2">{selectedService.title}</h3>
                <p className="text-slate-400 text-sm mb-2">{selectedService.description}</p>
                <p className="text-emerald-400 font-bold">{selectedService.price}</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm mb-1">Imię i nazwisko *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 focus:outline-none focus:border-indigo-500"
                    placeholder="Wpisz imię i nazwisko"
                  />
                </div>

                <div>
                  <label className="block text-sm mb-1">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 focus:outline-none focus:border-indigo-500"
                    placeholder="twój@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm mb-1">Telefon *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 focus:outline-none focus:border-indigo-500"
                    placeholder="+48 123 456 789"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm mb-1">Data *</label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      required
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 focus:outline-none focus:border-indigo-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm mb-1">Godzina *</label>
                    <select
                      name="time"
                      value={formData.time}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 focus:outline-none focus:border-indigo-500"
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
                      <option value="18:00">19:00</option>
                      <option value="18:00">20:00</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm mb-1">Uwagi (opcjonalnie)</label>
                  <textarea
                    name="notes"
                    value={formData.notes}
                    onChange={handleInputChange}
                    rows="3"
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 focus:outline-none focus:border-indigo-500"
                    placeholder="Np. preferencje dotyczące masażu, alergie, życzenia specjalne..."
                  />
                </div>

                <div className="flex gap-3 pt-4">
                  <button
                    type="button"
                    onClick={handleCloseForm}
                    className="flex-1 px-4 py-3 border border-slate-600 text-slate-300 rounded-lg hover:bg-slate-700 transition"
                  >
                    Anuluj
                  </button>
                  <button
                    type="submit"
                    className="flex-1 px-4 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-semibold transition"
                  >
                    Zarezerwuj teraz
                  </button>
                </div>

                <p className="text-xs text-slate-500 text-center mt-4">
                  * Pola wymagane. Potwierdzenie rezerwacji wyślemy na podany adres email.
                </p>
              </form>
            </div>
          </div>
        )}

        {/* Lista usług */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              onClick={() => handleServiceClick(service)}
              className="bg-slate-800 rounded-xl border border-slate-700 p-6 shadow-lg hover:border-indigo-500 hover:bg-slate-800/80 cursor-pointer transition-all duration-300 group"
            >
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-2xl font-semibold text-indigo-400 group-hover:text-indigo-300">
                  {service.title}
                </h3>
              </div>
              <p className="text-slate-400 text-sm mb-4">
                {service.description}
              </p>
              <div className="flex justify-between items-center pt-4 border-t border-slate-700">
                <p className="text-slate-300 font-semibold">{service.price}</p>
                <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm rounded-lg transition">
                  Wybierz
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Informacja dodatkowa */}
        <div className="mt-12 p-6 bg-slate-800/50 border border-slate-700 rounded-xl">
          <h3 className="text-xl font-semibold text-purple-400 mb-4">Informacje organizacyjne</h3>
          <ul className="text-slate-400 space-y-2">
            <li className="flex items-start">
              <span className="text-indigo-400 mr-2">•</span>
              Rezerwacje przyjmujemy z co najmniej 24-godzinnym wyprzedzeniem
            </li>
            <li className="flex items-start">
              <span className="text-indigo-400 mr-2">•</span>
              Prosimy o przybycie 15 minut przed rozpoczęciem zabiegu
            </li>
            <li className="flex items-start">
              <span className="text-indigo-400 mr-2">•</span>
              Anulowanie rezerwacji możliwe do 12 godzin przed zabiegiem
            </li>
            <li className="flex items-start">
              <span className="text-indigo-400 mr-2">•</span>
              Godziny otwarcia SPA: 9:00 - 21:00 (ostatnia rezerwacja o 20:00)
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}