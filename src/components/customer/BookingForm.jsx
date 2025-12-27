import { useState } from "react";
import { FadeIn, SlideUp, SlideLeft } from "../animations";

export default function BookingForm({ room, onBack, onSuccess }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    checkIn: "",
    checkOut: "",
    guests: 1,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Rezerwacja:", { room, formData });
    onSuccess();
  };

  return (
    <section className="min-h-screen bg-transparent px-6 py-24 text-slate-900">
      <div className="max-w-3xl mx-auto">
        {/* Back */}
        <SlideLeft delay={0.1}>
          <button
            onClick={onBack}
            className="font-heading text-sm tracking-[0.18em] uppercase
                       border border-black/70 px-4 py-2
                       hover:bg-black hover:text-white transition"
          >
            ← Powrót
          </button>
        </SlideLeft>

        {/* Header */}
        <SlideUp delay={0.2} className="w-full">
          <div className="mt-10 mb-10 text-center">
            <h1 className="font-heading text-4xl md:text-5xl font-bold">
              REZERWACJA
            </h1>

            <SlideUp delay={0.3} className="w-full flex justify-center">
              <div className="mt-5 flex justify-center">
                <span className="h-px w-24 bg-black/70" />
              </div>
            </SlideUp>

            <FadeIn delay={0.4} className="w-full">
              <p className="mt-6 text-slate-600 text-lg">
                {room?.name} · {room?.price} zł / noc
              </p>
            </FadeIn>
          </div>
        </SlideUp>

        {/* Form Card */}
        <SlideUp delay={0.25} className="w-full">
          <div className="bg-white border border-slate-200 shadow-sm p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <SlideUp delay={0.1}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Imię
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full border border-slate-300 px-4 py-3
                                 focus:outline-none focus:border-[#C9A24D]"
                      value={formData.firstName}
                      onChange={(e) =>
                        setFormData({ ...formData, firstName: e.target.value })
                      }
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Nazwisko
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full border border-slate-300 px-4 py-3
                                 focus:outline-none focus:border-[#C9A24D]"
                      value={formData.lastName}
                      onChange={(e) =>
                        setFormData({ ...formData, lastName: e.target.value })
                      }
                    />
                  </div>
                </div>
              </SlideUp>

              {/* Contact */}
              <SlideUp delay={0.16}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full border border-slate-300 px-4 py-3
                                 focus:outline-none focus:border-[#C9A24D]"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Telefon
                    </label>
                    <input
                      type="tel"
                      required
                      className="w-full border border-slate-300 px-4 py-3
                                 focus:outline-none focus:border-[#C9A24D]"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                    />
                  </div>
                </div>
              </SlideUp>

              {/* Dates */}
              <SlideUp delay={0.22}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Data zameldowania
                    </label>
                    <input
                      type="date"
                      required
                      className="w-full border border-slate-300 px-4 py-3
                                 focus:outline-none focus:border-[#C9A24D]"
                      value={formData.checkIn}
                      onChange={(e) =>
                        setFormData({ ...formData, checkIn: e.target.value })
                      }
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Data wymeldowania
                    </label>
                    <input
                      type="date"
                      required
                      className="w-full border border-slate-300 px-4 py-3
                                 focus:outline-none focus:border-[#C9A24D]"
                      value={formData.checkOut}
                      onChange={(e) =>
                        setFormData({ ...formData, checkOut: e.target.value })
                      }
                    />
                  </div>
                </div>
              </SlideUp>

              {/* Guests */}
              <SlideUp delay={0.28}>
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Liczba gości
                  </label>
                  <select
                    className="w-full border border-slate-300 px-4 py-3
                               focus:outline-none focus:border-[#C9A24D]"
                    value={formData.guests}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        guests: parseInt(e.target.value),
                      })
                    }
                  >
                    {[1, 2, 3, 4].map((num) => (
                      <option key={num} value={num}>
                        {num}
                      </option>
                    ))}
                  </select>
                </div>
              </SlideUp>

              {/* Actions */}
              <SlideUp delay={0.34}>
                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                  <button
                    type="button"
                    onClick={onBack}
                    className="flex-1 border border-black/70 px-6 py-3
                               font-semibold hover:bg-black hover:text-white transition"
                  >
                    Anuluj
                  </button>

                  <button
                    type="submit"
                    className="flex-1 border border-[#C9A24D] px-6 py-3
                               font-semibold text-[#C9A24D]
                               hover:bg-[#C9A24D] hover:text-white transition"
                  >
                    Potwierdź rezerwację
                  </button>
                </div>
              </SlideUp>
            </form>
          </div>
        </SlideUp>
      </div>
    </section>
  );
}
