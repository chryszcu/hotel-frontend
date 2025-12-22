// src/components/customer/HomePage.jsx
export default function HomePage() {
  const rooms = [
    {
      title: "POKÓJ CLASSIC",
      image: "/pokoj1.jpg",
    },
    {
      title: "POKÓJ DELUXE",
      image: "/pokoj2.jpg",
    },
    {
      title: "APARTAMENT PAŁACOWY",
      image: "/pokoj3.jpg",
    },
    {
      title: "APARTAMENT DELUXE",
      image: "/pokoj4.jpg",
    },
  ];

  const goToRooms = () => {
    const section = document.getElementById("nasze-pokoje");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="w-full">

      {/* HERO Z OBRAZEM */}
      <section
        className="relative min-h-screen flex items-end justify-center"
        style={{
          backgroundImage: "url('/recepcja.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#f7f5ef]/10" />

        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h1 className="font-heading text-5xl md:text-7xl font-bold tracking-[0.18em] mb-6 text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.35)]">
            ZNOWU NIE
            <br />
            DZIAŁA
          </h1>

          <div className="flex justify-center mb-8">
            <span className="h-px w-24 bg-[#1c2430]/60" />
          </div>

          <p className="text-base md:text-lg text-white max-w-2xl mx-auto mb-14 leading-relaxed drop-shadow-[0_2px_6px_rgba(0,0,0,0.35)]">
            Odkryj niezapomniane chwile w naszym ekskluzywnym hotelu.
            Klasyczna elegancja, luksusowe wnętrza i najwyższy komfort.
          </p>

          {/* Strzałka */}
          <div className="flex justify-center">
            <svg
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              className="text-white animate-bounce"
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

      {/* POKOJE I APARTAMENTY */}
      <section className="py-24">
        <div className="max-w-screen-2xl mx-auto px-6">

          <h2 className="text-center font-heading text-3xl md:text-4xl tracking-[0.25em] mb-16 text-[#7a6a3a]">
            POKOJE I APARTAMENTY
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {rooms.map((room, index) => (
              <button
                key={index}
                onClick={goToRooms}
                className="group relative overflow-hidden border border-black/20"
              >
                <img
                  src={room.image}
                  alt={room.title}
                  className="w-full h-[360px] object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="font-heading text-white tracking-widest text-sm md:text-base px-6 py-3 border border-white/70">
                    {room.title}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
