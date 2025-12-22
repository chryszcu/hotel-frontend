// src/components/customer/MenuPages/InfoHotel.jsx
import { FadeIn, SlideUp, SlideLeft, SlideRight } from '../../animations';

export default function InfoHotel() {
  return (
    <div className="min-h-screen bg-transparent text-slate-900 px-6 py-24">
      <div className="max-w-6xl mx-auto">

        {/* Nagłówek z animacją */}
        <SlideUp delay={0.3}>
          <div className="mb-12 text-center">
            <h1 className="font-heading text-4xl md:text-5xl font-bold">
              O NASZYM HOTELU
            </h1>
            <SlideUp delay={0.4}>
              <div className="mt-5 flex justify-center">
                <span className="h-px w-24 bg-black/70" />
              </div>
            </SlideUp>
            <FadeIn delay={0.5}>
              <p className="mt-8 text-slate-600 text-lg leading-relaxed max-w-3xl mx-auto">
                Odkryj historię, filozofię i wyjątkową atmosferę Hotelu SPA "Znowu Nie Działa" – 
                miejsca, gdzie tradycja spotyka się z nowoczesnym luksusem.
              </p>
            </FadeIn>
          </div>
        </SlideUp>

        {/* Historia hotelu */}
        <div className="mb-16">
          <SlideUp delay={0.6}>
            <div className="bg-white border border-slate-200 shadow-sm p-8">
              <div className="flex flex-col lg:flex-row items-start gap-8">
                <div className="lg:w-1/3">
                  <FadeIn delay={0.1}>
                    <div className="h-64 lg:h-80 w-full bg-center bg-cover rounded-lg shadow-lg mb-6"
                         style={{ backgroundImage: `url('/hotel-history.jpg')` }}>
                      {/* Zdjęcie 1: Historyczne zdjęcie hotelu/pałacu */}
                    </div>
                  </FadeIn>
                  <SlideUp delay={0.2}>
                    <p className="text-slate-500 text-sm text-center">
                      Pałac w 1920 roku – początek naszej historii
                    </p>
                  </SlideUp>
                </div>
                
                <div className="lg:w-2/3">
                  <SlideLeft delay={0.3}>
                    <h2 className="font-heading text-3xl font-semibold text-[#C9A24D] mb-6">
                      NASZA HISTORIA
                    </h2>
                  </SlideLeft>
                  
                  <div className="space-y-6">
                    <SlideUp delay={0.4}>
                      <div>
                        <h3 className="font-semibold text-slate-900 text-lg mb-2">Początki (1920-1945)</h3>
                        <p className="text-slate-600 leading-relaxed">
                          Historia naszego hotelu sięga 1920 roku, kiedy to wybitny architekt 
                          Stanisław Nowak wzniósł tu elegancki pałac myśliwski dla arystokratycznej 
                          rodziny Potockich. Miejsce szybko zyskało sławę jako ośrodek wypoczynkowy 
                          dla elity artystycznej i politycznej międzywojennej Polski.
                        </p>
                      </div>
                    </SlideUp>
                    
                    <SlideUp delay={0.5}>
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
                    </SlideUp>
                    
                    <SlideUp delay={0.6}>
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
                    </SlideUp>
                  </div>
                </div>
              </div>
            </div>
          </SlideUp>
        </div>

        {/* Filozofia i misja */}
        <div className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <SlideLeft delay={0.3}>
              <div className="bg-white border border-slate-200 shadow-sm p-8">
                <h2 className="font-heading text-2xl font-semibold text-[#C9A24D] mb-6">
                  NASZA FILOZOFIA
                </h2>
                <FadeIn delay={0.1}>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    Wierzymy, że prawdziwy luksus to nie tylko piękne wnętrza i 
                    najwyższej jakości usługi, ale przede wszystkim autentyczność, 
                    dbałość o szczegóły i stworzenie przestrzeni, w której goście 
                    czują się wyjątkowo i bezpiecznie.
                  </p>
                </FadeIn>
                <SlideUp delay={0.2}>
                  <p className="text-slate-600 leading-relaxed">
                    Nasza filozofia opiera się na trzech filarach: 
                    <span className="font-semibold text-slate-900"> tradycji</span> – szacunku dla historii miejsca, 
                    <span className="font-semibold text-slate-900"> innowacji</span> – ciągłym doskonaleniu usług oraz 
                    <span className="font-semibold text-slate-900"> zrównoważonym rozwoju</span> – trosce o środowisko naturalne.
                  </p>
                </SlideUp>
              </div>
            </SlideLeft>
            
            <SlideRight delay={0.3}>
              <div className="bg-white border border-slate-200 shadow-sm p-8">
                <FadeIn delay={0.1}>
                  <div className="h-64 w-full bg-center bg-cover rounded-lg mb-6"
                       style={{ backgroundImage: `url('/hotel-philosophy.jpg')` }}>
                    {/* Zdjęcie 2: Wnętrze hotelu lub ogród */}
                  </div>
                </FadeIn>
                <SlideUp delay={0.2}>
                  <h3 className="font-heading text-xl font-semibold text-[#C9A24D] mb-3">
                    ZRÓWNOWAŻONY ROZWÓJ
                  </h3>
                </SlideUp>
                <FadeIn delay={0.3}>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Jesteśmy certyfikowanym Green Hotelem. Stosujemy ekologiczne 
                    rozwiązania, korzystamy z energii odnawialnej, promujemy 
                    lokalnych dostawców i dbamy o zachowanie bioróżnorodności 
                    w naszym parku.
                  </p>
                </FadeIn>
              </div>
            </SlideRight>
          </div>
        </div>

        {/* Kompleksowa oferta */}
        <SlideUp delay={0.3}>
          <div className="mb-16">
            <h2 className="font-heading text-3xl font-semibold text-center text-[#C9A24D] mb-10">
              NASZA KOMPLEKSOWA OFERTA
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "POKOJE I APARTAMENTY",
                  description: "4 kategorie pokoi: od przytulnych Classic po luksusowe apartamenty pałacowe. Wszystkie z najwyższej klasy wyposażeniem, klimatyzacją i widokiem na park lub jezioro.",
                  image: "/rooms-overview.jpg",
                  items: [
                    "Pokoje Classic i Deluxe",
                    "Apartamenty pałacowe",
                    "Apartamenty Premium"
                  ]
                },
                {
                  title: "STREFA SPA",
                  description: "Kompleksowa strefa relaksu z szeroką gamą zabiegów kosmetycznych i masaży.",
                  image: "/spa-overview.jpg",
                  items: [
                    "6 rodzajów usług",
                    "Zabiegi pielęgnacyjne",
                    "Wyjątkowa atmosfera"
                  ]
                },
                {
                  title: "CENTRUM KONFERENCYJNE",
                  description: "3 profesjonalnie wyposażone sale konferencyjne o różnej pojemności, idealne na spotkania biznesowe, szkolenia i eventy.",
                  image: "/conference-overview.jpg",
                  items: [
                    "Sala biznesowa (30 os.)",
                    "Sala konferencyjna (80 os.)",
                    "Sala premium (40 os.)"
                  ]
                }
              ].map((section, index) => (
                <SlideUp key={index} delay={index * 0.2}>
                  <div className="bg-white p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                    <FadeIn delay={0.1}>
                      <div className="h-40 w-full bg-center bg-cover rounded-lg mb-4"
                           style={{ backgroundImage: `url('${section.image}')` }}>
                        {/* Zdjęcie */}
                      </div>
                    </FadeIn>
                    <SlideLeft delay={0.2}>
                      <h3 className="font-heading text-xl font-semibold mb-2 text-[#C9A24D]">
                        {section.title}
                      </h3>
                    </SlideLeft>
                    <FadeIn delay={0.3}>
                      <p className="text-slate-600 text-sm leading-relaxed mb-4">
                        {section.description}
                      </p>
                    </FadeIn>
                    <ul className="text-slate-600 text-sm space-y-1">
                      {section.items.map((item, i) => (
                        <SlideUp key={i} delay={0.05 * i}>
                          <li className="flex items-center">
                            <span className="text-[#C9A24D] mr-2">•</span>
                            {item}
                          </li>
                        </SlideUp>
                      ))}
                    </ul>
                  </div>
                </SlideUp>
              ))}
            </div>
          </div>
        </SlideUp>

        {/* Lokalizacja i otoczenie */}
        <SlideUp delay={0.3}>
          <div className="mb-16">
            <div className="bg-white border border-slate-200 shadow-sm p-8">
              <SlideLeft delay={0.1}>
                <h2 className="font-heading text-2xl font-semibold text-[#C9A24D] mb-6">
                  LOKALIZACJA I OTOCZENIE
                </h2>
              </SlideLeft>
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="lg:w-2/3">
                  <FadeIn delay={0.2}>
                    <p className="text-slate-600 leading-relaxed mb-4">
                      Nasz hotel położony jest w sercu Mazur, na skraju Parku Krajobrazowego 
                      Puszczy Boreckiej, zaledwie 200 metrów od brzegu jeziora Tajty. 
                      To idealne miejsce zarówno dla tych, którzy pragną aktywnego wypoczynku, 
                      jak i dla szukających spokoju i kontaktu z naturą.
                    </p>
                  </FadeIn>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    {[
                      {
                        icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z",
                        title: "200 m do jeziora",
                        subtitle: "Przystań i plaża hotelowa"
                      },
                      {
                        icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
                        title: "Park hotelowy",
                        subtitle: "10 hektarów zieleni"
                      },
                      {
                        icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
                        title: "30 km do miasta",
                        subtitle: "Giżycko z lotniskiem"
                      },
                      {
                        icon: "M13 10V3L4 14h7v7l9-11h-7z",
                        title: "Szlak turystyczny",
                        subtitle: "40 km tras rowerowych"
                      }
                    ].map((feature, index) => (
                      <SlideUp key={index} delay={0.1 * index}>
                        <div className="flex items-center gap-3">
                          <svg className="w-6 h-6 text-[#C9A24D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={feature.icon} />
                          </svg>
                          <div>
                            <p className="font-medium text-slate-900">{feature.title}</p>
                            <p className="text-slate-600 text-sm">{feature.subtitle}</p>
                          </div>
                        </div>
                      </SlideUp>
                    ))}
                  </div>
                </div>
                
                <div className="lg:w-1/3">
                  <FadeIn delay={0.3}>
                    <div className="h-64 w-full bg-center bg-cover rounded-lg shadow-lg"
                         style={{ backgroundImage: `url('/hotel-location.jpg')` }}>
                      {/* Zdjęcie 7: Widok na jezioro/hotel z lotu ptaka */}
                    </div>
                  </FadeIn>
                </div>
              </div>
            </div>
          </div>
        </SlideUp>

        {/* Certyfikaty i nagrody */}
        <FadeIn delay={1.0}>
          <div className="bg-white border border-slate-200 shadow-sm p-8">
            <SlideUp delay={0.1}>
              <h2 className="font-heading text-2xl font-semibold text-center text-[#C9A24D] mb-8">
                CERTYFIKATY I NAGRODY
              </h2>
            </SlideUp>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                {
                  emoji: "🏆",
                  color: "bg-amber-50 border-amber-200",
                  title: "TripAdvisor",
                  subtitle: "Travelers' Choice 2025"
                },
                {
                  emoji: "🌿",
                  color: "bg-emerald-50 border-emerald-200",
                  title: "Green Hotel",
                  subtitle: "Certyfikat ekologiczny"
                },
                {
                  emoji: "⭐",
                  color: "bg-sky-50 border-sky-200",
                  title: "4 gwiazdki",
                  subtitle: "Kategoria Superior"
                },
                {
                  emoji: "👑",
                  color: "bg-purple-50 border-purple-200",
                  title: "Luxury Travel",
                  subtitle: "Guide Award 2024"
                }
              ].map((certificate, index) => (
                <FadeIn key={index} delay={0.1 * index}>
                  <div className="text-center">
                    <div className={`w-20 h-20 rounded-full ${certificate.color} border-2 mx-auto mb-3 flex items-center justify-center`}>
                      <span className="text-2xl">{certificate.emoji}</span>
                    </div>
                    <SlideUp delay={0.2}>
                      <p className="font-medium text-slate-900">{certificate.title}</p>
                    </SlideUp>
                    <FadeIn delay={0.3}>
                      <p className="text-slate-600 text-sm">{certificate.subtitle}</p>
                    </FadeIn>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}