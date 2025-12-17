// src/components/customer/HomePage.jsx
export default function HomePage() {
  return (
    <section className="min-h-screen pt-24 w-full flex items-center justify-center bg-transparent">
      <div className="text-center px-6 max-w-4xl mx-auto">

        {/* Nagłówek */}
        <h1 className="font-heading text-5xl md:text-7xl font-bold tracking-[0.18em] mb-6">
          LUKSUSOWY HOTEL
        </h1>

        {/* Linia */}
        <div className="flex justify-center mb-8">
          <span className="h-px w-32 bg-black/70" />
        </div>

        {/* Opis */}
        <p className="text-lg md:text-xl text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed">
          Odkryj niezapomniane chwile w naszym ekskluzywnym hotelu.
          Doskonała lokalizacja, luksusowe pokoje i najwyższy standard komfortu.
        </p>

        {/* Strzałka wizualna */}
        <div className="flex justify-center">
          <svg
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            className="text-black/70"
            aria-hidden="true"
          >
            <path
              d="M6 9l6 6 6-6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

      </div>
    </section>
  );
}
