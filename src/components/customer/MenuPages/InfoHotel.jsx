// src/components/customer/MenuPages/InfoHotel.jsx
export default function InfoHotel() {
  return (
    <div className="min-h-screen bg-transparent text-slate-900 px-6 py-24">
      <div className="max-w-6xl mx-auto">

        {/* Nagłówek */}
        <div className="mb-12 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold">
            O NASZYM HOTELU
          </h1>
          <div className="mt-5 flex justify-center">
            <span className="h-px w-24 bg-black/70" />
          </div>
          <p className="mt-8 text-slate-600 text-lg leading-relaxed max-w-3xl mx-auto">
            Odkryj historię, filozofię i wyjątkową atmosferę Hotelu SPA "Znowu Nie Działa" – 
            miejsca, gdzie tradycja spotyka się z nowoczesnym luksusem.
          </p>
        </div>

        {/* Historia hotelu */}
        <div className="mb-16">
          <div className="bg-white border border-slate-200 shadow-sm p-8">
            <div className="flex flex-col lg:flex-row items-start gap-8">
              <div className="lg:w-1/3">
                <div className="h-64 lg:h-80 w-full bg-center bg-cover rounded-lg shadow-lg mb-6"
                     style={{ backgroundImage: `url('/hotel-history.jpg')` }}>
                  {/* Zdjęcie 1: Historyczne zdjęcie hotelu/pałacu */}
                </div>
                <p className="text-slate-500 text-sm text-center">
                  Pałac w 1920 roku – początek naszej historii
                </p>
              </div>
              
              <div className="lg:w-2/3">
                <h2 className="font-heading text-3xl font-semibold text-[#C9A24D] mb-6">
                  NASZA HISTORIA
                </h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-slate-900 text-lg mb-2">Początki (1920-1945)</h3>
                    <p className="text-slate-600 leading-relaxed">
                      Historia naszego hotelu sięga 1920 roku, kiedy to wybitny architekt 
                      Stanisław Nowak wzniósł tu elegancki pałac myśliwski dla arystokratycznej 
                      rodziny Potockich. Miejsce szybko zyskało sławę jako ośrodek wypoczynkowy 
                      dla elity artystycznej i politycznej międzywojennej Polski.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-slate-900 text-lg mb-2">Okres przemian (1945-2000)</h3>
                    <p className="text-slate-600 leading-relaxed">
                      Po II wojnie światowej pałac pełnił funkcję domu wypoczynkowego, 
                      a później sanatorium. W latach 90. rodzina Potockich odzyskała 
                      posiadłość i rozpoczęła żmudny proces renowacji, przywracając 
                      budynkowi dawny blask przy jednoczesnym dostosowaniu go do 
                      współczesnych standardów.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-slate-900 text-lg mb-2">Nowa era (od 2000)</h3>
                    <p className="text-slate-600 leading-relaxed">
                      W 2005 roku podjęliśmy decyzję o przekształceniu posiadłości 
                      w ekskluzywny hotel SPA. Po 3 latach intensywnych prac 
                      renowacyjnych i rozbudowy, w 2008 roku otworzyliśmy drzwi 
                      dla pierwszych gości. Od tego czasu nieustannie rozwijamy 
                      naszą ofertę, dodając nowe usługi i udogodnienia.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Filozofia i misja */}
        <div className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white border border-slate-200 shadow-sm p-8">
              <h2 className="font-heading text-2xl font-semibold text-[#C9A24D] mb-6">
                NASZA FILOZOFIA
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Wierzymy, że prawdziwy luksus to nie tylko piękne wnętrza i 
                najwyższej jakości usługi, ale przede wszystkim autentyczność, 
                dbałość o szczegóły i stworzenie przestrzeni, w której goście 
                czują się wyjątkowo i bezpiecznie.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Nasza filozofia opiera się na trzech filarach: 
                <span className="font-semibold text-slate-900"> tradycji</span> – szacunku dla historii miejsca, 
                <span className="font-semibold text-slate-900"> innowacji</span> – ciągłym doskonaleniu usług oraz 
                <span className="font-semibold text-slate-900"> zrównoważonym rozwoju</span> – trosce o środowisko naturalne.
              </p>
            </div>
            
            <div className="bg-white border border-slate-200 shadow-sm p-8">
              <div className="h-64 w-full bg-center bg-cover rounded-lg mb-6"
                   style={{ backgroundImage: `url('/hotel-philosophy.jpg')` }}>
                {/* Zdjęcie 2: Wnętrze hotelu lub ogród */}
              </div>
              <h3 className="font-heading text-xl font-semibold text-[#C9A24D] mb-3">
                ZRÓWNOWAŻONY ROZWÓJ
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Jesteśmy certyfikowanym Green Hotelem. Stosujemy ekologiczne 
                rozwiązania, korzystamy z energii odnawialnej, promujemy 
                lokalnych dostawców i dbamy o zachowanie bioróżnorodności 
                w naszym parku.
              </p>
            </div>
          </div>
        </div>

        {/* Kompleksowa oferta */}
        <div className="mb-16">
          <h2 className="font-heading text-3xl font-semibold text-center text-[#C9A24D] mb-10">
            NASZA KOMPLEKSOWA OFERTA
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-40 w-full bg-center bg-cover rounded-lg mb-4"
                   style={{ backgroundImage: `url('/rooms-overview.jpg')` }}>
                {/* Zdjęcie 3: Pokój hotelowy */}
              </div>
              <h3 className="font-heading text-xl font-semibold mb-2 text-[#C9A24D]">
                POKOJE I APARTAMENTY
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                4 kategorie pokoi: od przytulnych Classic po luksusowe apartamenty 
                pałacowe. Wszystkie z najwyższej klasy wyposażeniem, klimatyzacją 
                i widokiem na park lub jezioro.
              </p>
              <ul className="text-slate-600 text-sm space-y-1">
                <li className="flex items-center">
                  <span className="text-[#C9A24D] mr-2">•</span>
                  Pokoje Classic i Deluxe
                </li>
                <li className="flex items-center">
                  <span className="text-[#C9A24D] mr-2">•</span>
                  Apartamenty pałacowe
                </li>
                <li className="flex items-center">
                  <span className="text-[#C9A24D] mr-2">•</span>
                  Apartamenty Premium
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-40 w-full bg-center bg-cover rounded-lg mb-4"
                   style={{ backgroundImage: `url('/spa-overview.jpg')` }}>
                {/* Zdjęcie 4: Strefa SPA */}
              </div>
              <h3 className="font-heading text-xl font-semibold mb-2 text-[#C9A24D]">
                STREFA SPA
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Kompleksowa strefa relaksu z szeroką gamą zabiegów kosmetycznych i masaży.
              </p>
              <ul className="text-slate-600 text-sm space-y-1">
                <li className="flex items-center">
                  <span className="text-[#C9A24D] mr-2">•</span>
                  6 rodzajów usług
                </li>
                <li className="flex items-center">
                  <span className="text-[#C9A24D] mr-2">•</span>
                  Zabiegi pielęgnacyjne
                </li>
                <li className="flex items-center">
                  <span className="text-[#C9A24D] mr-2">•</span>
                  Wyjątkowa atmosfera
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-40 w-full bg-center bg-cover rounded-lg mb-4"
                   style={{ backgroundImage: `url('/conference-overview.jpg')` }}>
                {/* Zdjęcie 5: Sala konferencyjna */}
              </div>
              <h3 className="font-heading text-xl font-semibold mb-2 text-[#C9A24D]">
                CENTRUM KONFERENCYJNE
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                3 profesjonalnie wyposażone sale konferencyjne o różnej 
                pojemności, idealne na spotkania biznesowe, szkolenia 
                i eventy.
              </p>
              <ul className="text-slate-600 text-sm space-y-1">
                <li className="flex items-center">
                  <span className="text-[#C9A24D] mr-2">•</span>
                  Sala biznesowa (30 os.)
                </li>
                <li className="flex items-center">
                  <span className="text-[#C9A24D] mr-2">•</span>
                  Sala konferencyjna (80 os.)
                </li>
                <li className="flex items-center">
                  <span className="text-[#C9A24D] mr-2">•</span>
                  Sala premium (40 os.)
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Lokalizacja i otoczenie */}
        <div className="mb-16">
          <div className="bg-white border border-slate-200 shadow-sm p-8">
            <h2 className="font-heading text-2xl font-semibold text-[#C9A24D] mb-6">
              LOKALIZACJA I OTOCZENIE
            </h2>
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="lg:w-2/3">
                <p className="text-slate-600 leading-relaxed mb-4">
                  Nasz hotel położony jest w sercu Mazur, na skraju Parku Krajobrazowego 
                  Puszczy Boreckiej, zaledwie 200 metrów od brzegu jeziora Tajty. 
                  To idealne miejsce zarówno dla tych, którzy pragną aktywnego wypoczynku, 
                  jak i dla szukających spokoju i kontaktu z naturą.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                  <div className="flex items-center gap-3">
                    <svg className="w-6 h-6 text-[#C9A24D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <p className="font-medium text-slate-900">200 m do jeziora</p>
                      <p className="text-slate-600 text-sm">Przystań i plaża hotelowa</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <svg className="w-6 h-6 text-[#C9A24D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <div>
                      <p className="font-medium text-slate-900">Park hotelowy</p>
                      <p className="text-slate-600 text-sm">10 hektarów zieleni</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <svg className="w-6 h-6 text-[#C9A24D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <p className="font-medium text-slate-900">30 km do miasta</p>
                      <p className="text-slate-600 text-sm">Giżycko z lotniskiem</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <svg className="w-6 h-6 text-[#C9A24D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <div>
                      <p className="font-medium text-slate-900">Szlak turystyczny</p>
                      <p className="text-slate-600 text-sm">40 km tras rowerowych</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="lg:w-1/3">
                <div className="h-64 w-full bg-center bg-cover rounded-lg shadow-lg"
                     style={{ backgroundImage: `url('/hotel-location.jpg')` }}>
                  {/* Zdjęcie 7: Widok na jezioro/hotel z lotu ptaka */}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Certyfikaty i nagrody */}
        <div className="bg-white border border-slate-200 shadow-sm p-8">
          <h2 className="font-heading text-2xl font-semibold text-center text-[#C9A24D] mb-8">
            CERTYFIKATY I NAGRODY
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-amber-50 border-2 border-amber-200 mx-auto mb-3 flex items-center justify-center">
                <span className="text-2xl">🏆</span>
              </div>
              <p className="font-medium text-slate-900">TripAdvisor</p>
              <p className="text-slate-600 text-sm">Travelers' Choice 2025</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-emerald-50 border-2 border-emerald-200 mx-auto mb-3 flex items-center justify-center">
                <span className="text-2xl">🌿</span>
              </div>
              <p className="font-medium text-slate-900">Green Hotel</p>
              <p className="text-slate-600 text-sm">Certyfikat ekologiczny</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-sky-50 border-2 border-sky-200 mx-auto mb-3 flex items-center justify-center">
                <span className="text-2xl">⭐</span>
              </div>
              <p className="font-medium text-slate-900">4 gwiazdki</p>
              <p className="text-slate-600 text-sm">Kategoria Superior</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-purple-50 border-2 border-purple-200 mx-auto mb-3 flex items-center justify-center">
                <span className="text-2xl">👑</span>
              </div>
              <p className="font-medium text-slate-900">Luxury Travel</p>
              <p className="text-slate-600 text-sm">Guide Award 2024</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}