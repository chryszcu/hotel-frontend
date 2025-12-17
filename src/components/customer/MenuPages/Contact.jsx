export default function Contact() {
  return (
    <div className="min-h-screen bg-transparent text-slate-900 px-6 py-24">
      <div className="max-w-4xl mx-auto">

        {/* Nagłówek */}
        <div className="mb-10 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold">
            KONTAKT
          </h1>
          <div className="mt-5 flex justify-center">
            <span className="h-px w-24 bg-black/70" />
          </div>
        </div>

        <p className="text-slate-600 text-lg leading-relaxed mb-12 text-center max-w-3xl mx-auto">
          Skontaktuj się z nami w sprawie rezerwacji, konferencji, usług SPA lub innych pytań.
          Nasz personel jest dostępny codziennie i z chęcią pomoże w każdej sytuacji.
        </p>

        {/* Dane kontaktowe */}
        <div className="space-y-6 mb-16">

          <div className="bg-white p-6 border border-slate-200 shadow-sm">
            <h3 className="font-heading text-xl font-semibold mb-2 text-[#C9A24D]">
              ADRES
            </h3>
            <p className="text-slate-600">
              Hotel SPA Luxury<br />
              ul. Przykładowa 12<br />
              00-123 Warszawa
            </p>
          </div>

          <div className="bg-white p-6 border border-slate-200 shadow-sm">
            <h3 className="font-heading text-xl font-semibold mb-2 text-[#C9A24D]">
              TELEFON
            </h3>
            <p className="text-slate-600">
              +48 123 456 789
            </p>
          </div>

          <div className="bg-white p-6 border border-slate-200 shadow-sm">
            <h3 className="font-heading text-xl font-semibold mb-2 text-[#C9A24D]">
              EMAIL
            </h3>
            <p className="text-slate-600">
              kontakt@hotelspa.pl
            </p>
          </div>

        </div>

        {/* Formularz */}
        <div className="max-w-2xl mx-auto">
          <h2 className="font-heading text-3xl font-bold mb-8 text-center">
            FORMULARZ KONTAKTOWY
          </h2>

          <form className="grid gap-6">

            <input
              type="text"
              placeholder="Twoje imię"
              className="
                w-full
                bg-white
                border border-slate-300
                px-4 py-3
                text-slate-900
                focus:outline-none
                focus:border-[#C9A24D]
              "
            />

            <input
              type="email"
              placeholder="Adres email"
              className="
                w-full
                bg-white
                border border-slate-300
                px-4 py-3
                text-slate-900
                focus:outline-none
                focus:border-[#C9A24D]
              "
            />

            <textarea
              placeholder="Wiadomość"
              rows="5"
              className="
                w-full
                bg-white
                border border-slate-300
                px-4 py-3
                text-slate-900
                focus:outline-none
                focus:border-[#C9A24D]
              "
            />

            <button
              type="submit"
              className="
                mt-4
                border border-[#C9A24D]/70
                px-8 py-3
                font-semibold
                text-slate-900
                hover:bg-black
                hover:text-white
                transition
              "
            >
              <span className="text-[#C9A24D]">WYŚLIJ WIADOMOŚĆ</span>
            </button>

          </form>
        </div>

      </div>
    </div>
  );
}
