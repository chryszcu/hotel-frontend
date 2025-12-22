// src/components/customer/MenuPages/Contact.jsx
import { FadeIn, SlideUp, SlideLeft, SlideRight } from '../../animations';

export default function Contact() {
  return (
    <div className="min-h-screen bg-transparent text-slate-900 px-6 py-24">
      <div className="max-w-4xl mx-auto">

        {/* Nagłówek z animacją */}
        <SlideUp delay={0.3} className="w-full">
          <div className="mb-10 text-center">
            <h1 className="font-heading text-4xl md:text-5xl font-bold">
              KONTAKT
            </h1>
            <SlideUp delay={0.4} className="w-full flex justify-center">
              <div className="mt-5 flex justify-center">
                <span className="h-px w-24 bg-black/70" />
              </div>
            </SlideUp>
          </div>
        </SlideUp>

        <FadeIn delay={0.5} className="w-full">
          <p className="text-slate-600 text-lg leading-relaxed mb-12 text-center max-w-3xl mx-auto">
            Skontaktuj się z nami w sprawie rezerwacji, konferencji, usług SPA lub innych pytań.
            Nasz personel jest dostępny codziennie i z chęcią pomoże w każdej sytuacji.
          </p>
        </FadeIn>

        {/* Dane kontaktowe z efektem cascade */}
        <div className="space-y-6 mb-16">
          <SlideLeft delay={0.6}>
            <div className="bg-white p-6 border border-slate-200 shadow-sm">
              <h3 className="font-heading text-xl font-semibold mb-2 text-[#C9A24D]">
                ADRES
              </h3>
              <FadeIn delay={0.1}>
                <p className="text-slate-600">
                  Hotel SPA "Znowu Nie Działa"<br />
                  ul. Mazurska 15<br />
                  11-500 Giżycko
                </p>
              </FadeIn>
            </div>
          </SlideLeft>

          <SlideUp delay={0.7}>
            <div className="bg-white p-6 border border-slate-200 shadow-sm">
              <h3 className="font-heading text-xl font-semibold mb-2 text-[#C9A24D]">
                TELEFON
              </h3>
              <FadeIn delay={0.1}>
                <p className="text-slate-600">
                  +48 123 456 789
                </p>
              </FadeIn>
              <FadeIn delay={0.2}>
                <p className="text-slate-500 text-sm mt-2">
                  Recepcja czynna: 7:00 - 23:00
                </p>
              </FadeIn>
            </div>
          </SlideUp>

          <SlideRight delay={0.8}>
            <div className="bg-white p-6 border border-slate-200 shadow-sm">
              <h3 className="font-heading text-xl font-semibold mb-2 text-[#C9A24D]">
                EMAIL
              </h3>
              <FadeIn delay={0.1}>
                <p className="text-slate-600">
                  kontakt@hotelspa.pl
                </p>
              </FadeIn>
              <FadeIn delay={0.2}>
                <p className="text-slate-500 text-sm mt-2">
                  Odpowiadamy w ciągu 24h
                </p>
              </FadeIn>
            </div>
          </SlideRight>
        </div>

        {/* Formularz */}
        <SlideUp delay={0.9} className="w-full">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-heading text-3xl font-bold mb-8 text-center">
              FORMULARZ KONTAKTOWY
            </h2>

            <form className="grid gap-6">
              <SlideLeft delay={0.1}>
                <input
                  type="text"
                  placeholder="Twoje imię i nazwisko *"
                  required
                  className="
                    w-full
                    bg-white
                    border border-slate-300
                    px-4 py-3
                    text-slate-900
                    focus:outline-none
                    focus:border-[#C9A24D]
                    transition-colors
                  "
                />
              </SlideLeft>

              <SlideRight delay={0.2}>
                <input
                  type="email"
                  placeholder="Adres email *"
                  required
                  className="
                    w-full
                    bg-white
                    border border-slate-300
                    px-4 py-3
                    text-slate-900
                    focus:outline-none
                    focus:border-[#C9A24D]
                    transition-colors
                  "
                />
              </SlideRight>

              <SlideLeft delay={0.3}>
                <input
                  type="text"
                  placeholder="Temat wiadomości"
                  className="
                    w-full
                    bg-white
                    border border-slate-300
                    px-4 py-3
                    text-slate-900
                    focus:outline-none
                    focus:border-[#C9A24D]
                    transition-colors
                  "
                />
              </SlideLeft>

              <SlideRight delay={0.4}>
                <textarea
                  placeholder="Treść wiadomości *"
                  rows="5"
                  required
                  className="
                    w-full
                    bg-white
                    border border-slate-300
                    px-4 py-3
                    text-slate-900
                    focus:outline-none
                    focus:border-[#C9A24D]
                    transition-colors
                  "
                />
              </SlideRight>

              <FadeIn delay={0.5}>
                <div className="flex justify-center mt-4">
                  <button
                    type="submit"
                    className="
                      bg-white
                      border border-[#C9A24D]
                      px-10 py-4
                      font-semibold
                      text-[#C9A24D]
                      hover:bg-[#C9A24D]
                      hover:text-white
                      transition-all
                      duration-300
                      w-full md:w-auto
                      flex justify-center
                      items-center
                      gap-3
                      group
                    "
                  >
                    WYŚLIJ WIADOMOŚĆ
                  </button>
                </div>
              </FadeIn>

              <FadeIn delay={0.6}>
                <p className="text-slate-500 text-sm text-center mt-4">
                  Pola oznaczone * są wymagane. Odpowiemy najszybciej jak to możliwe.
                </p>
              </FadeIn>
            </form>
          </div>
        </SlideUp>
      </div>
    </div>
  );
}