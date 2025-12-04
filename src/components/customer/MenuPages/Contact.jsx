

export default function Contact() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 px-6 py-24">
      <div className="max-w-4xl mx-auto">

        <h1 className="text-4xl font-bold mb-8 text-pink-400">
          Kontakt
        </h1>

        <p className="text-slate-300 text-lg leading-relaxed mb-10">
          Skontaktuj się z nami w sprawie rezerwacji, konferencji, usług SPA lub innych pytań. 
          Nasz personel jest dostępny codziennie i z chęcią pomoże w każdej sytuacji.
        </p>

        <div className="space-y-6">

          <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 shadow">
            <h3 className="text-xl font-semibold mb-2 text-indigo-400">📍 Adres</h3>
            <p className="text-slate-300">
              Hotel SPA Luxury<br />
              ul. Przykładowa 12<br />
              00-123 Warszawa
            </p>
          </div>

          <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 shadow">
            <h3 className="text-xl font-semibold mb-2 text-indigo-400">📞 Telefon</h3>
            <p className="text-slate-300">
              +48 123 456 789
            </p>
          </div>

          <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 shadow">
            <h3 className="text-xl font-semibold mb-2 text-indigo-400">📧 Email</h3>
            <p className="text-slate-300">
              kontakt@hotelspa.pl
            </p>
          </div>

        </div>

        <h2 className="text-3xl font-bold mt-14 mb-6 text-pink-300">
          Formularz kontaktowy
        </h2>

        <form className="grid gap-6">

          <input
            type="text"
            placeholder="Twoje imię"
            className="w-full bg-slate-800 border border-slate-700 px-4 py-3 rounded-lg text-slate-200 focus:outline-none focus:ring-2 focus:ring-pink-400"
          />

          <input
            type="email"
            placeholder="Adres email"
            className="w-full bg-slate-800 border border-slate-700 px-4 py-3 rounded-lg text-slate-200 focus:outline-none focus:ring-2 focus:ring-pink-400"
          />

          <textarea
            placeholder="Wiadomość"
            rows="5"
            className="w-full bg-slate-800 border border-slate-700 px-4 py-3 rounded-lg text-slate-200 focus:outline-none focus:ring-2 focus:ring-pink-400"
          ></textarea>

          <button
            type="submit"
            className="bg-pink-500 hover:bg-pink-600 transition text-white font-semibold px-6 py-3 rounded-lg"
          >
            Wyślij wiadomość
          </button>

        </form>

      </div>
    </div>
  );
}