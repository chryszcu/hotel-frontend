// src/components/customer/MenuPages/Restaurant.jsx
import { FadeIn, SlideUp, SlideLeft, SlideRight } from '../../animations';

export default function Restaurant() {
  const menuSections = [
    {
      title: "PRZEKĄSKI I STARTERY",
      items: [
        { name: "Tatar z polskiej wołowiny", price: "48 zł", desc: "Z żółtkiem kaczki, szczypiorkiem, korniszonami" },
        { name: "Ślimaki w maśle z czosnkiem", price: "42 zł", desc: "Z pietruszką i bagietką" },
        { name: "Foie gras domowej roboty", price: "58 zł", desc: "Z konfiturą z czerwonej cebuli i tostem" }
      ]
    },
    {
      title: "DANIA GŁÓWNE",
      items: [
        { name: "Dorsz z Patagonii", price: "89 zł", desc: "Z purée z kalafiora, szspinakiem i sosem maślano-koperkowym" },
        { name: "Polędwica wołowa Black Angus", price: "128 zł", desc: "250g, z ziemniakami dauphinoise i sosem pieprzowym" },
        { name: "Kaczka z jabłkami", price: "98 zł", desc: "Confitura z udka, pierś z jabłkiem i sosem borówkowym" }
      ]
    },
    {
      title: "DESERY",
      items: [
        { name: "Crème brûlée z wanilią", price: "32 zł", desc: "Z laską wanilii z Madagaskaru" },
        { name: "Suflet czekoladowy", price: "38 zł", desc: "Z lodami waniliowymi i sosem malinowym" },
        { name: "Tarta cytrynowa", price: "34 zł", desc: "Z bezą i kruszonką migdałową" }
      ]
    }
  ];

  const restaurantImages = [
    {
      src: "/restauracja-sala.jpg",
      alt: "Główna sala restauracji",
      title: "Główna sala restauracji",
      description: "Elegancka przestrzeń z panoramicznymi oknami"
    },
    {
      src: "/restauracja-bar.jpg",
      alt: "Lounge bar",
      title: "Lounge bar",
      description: "Miejsce na przed- lub popołudniowy drink"
    },
    {
      src: "/restauracja-taras.jpg",
      alt: "Taras letni",
      title: "Taras letni",
      description: "Ogród zimowy z widokiem na park"
    },
    {
      src: "/restauracja-danie.jpg",
      alt: "Przykładowe danie",
      title: "Kuchnia fusion",
      description: "Połączenie tradycji z nowoczesnością"
    }
  ];

  return (
    <div className="min-h-screen bg-transparent text-slate-900 px-6 py-24">
      <div className="max-w-6xl mx-auto">
        
        {/* Nagłówek z animacją */}
        <SlideUp delay={0.3}>
          <div className="mb-12 text-center">
            <h1 className="font-heading text-4xl md:text-5xl font-bold">
              LA BELLE ÉPOQUE
            </h1>
            <SlideUp delay={0.4}>
              <div className="mt-5 flex justify-center">
                <span className="h-px w-24 bg-black/70" />
              </div>
            </SlideUp>
            <FadeIn delay={0.5}>
              <p className="mt-8 text-slate-600 text-lg leading-relaxed max-w-3xl mx-auto">
                Restauracja fine dining z gwiazdką Michelin, funkcjonująca niezależnie od hotelu. 
                Miejsce, gdzie tradycyjna kuchnia polska spotyka się z francuskim kunsztem.
              </p>
            </FadeIn>
          </div>
        </SlideUp>

        {/* Galeria zdjęć */}
        <SlideUp delay={0.6}>
          <div className="mb-16">
            <h2 className="font-heading text-2xl font-semibold text-center text-[#C9A24D] mb-8">
              NASZA PRZESTRZEŃ
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {restaurantImages.map((image, index) => (
                <SlideUp key={index} delay={index * 0.15}>
                  <div className="group relative overflow-hidden rounded-lg shadow-lg">
                    <div className="h-64 w-full bg-center bg-cover transition-transform duration-500 group-hover:scale-105"
                         style={{ backgroundImage: `url(${image.src})` }}>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                      <SlideUp delay={0.1}>
                        <h3 className="text-white font-medium text-lg">{image.title}</h3>
                      </SlideUp>
                      <FadeIn delay={0.2}>
                        <p className="text-white/80 text-sm mt-2">{image.description}</p>
                      </FadeIn>
                    </div>
                  </div>
                </SlideUp>
              ))}
            </div>
          </div>
        </SlideUp>

        {/* O restauracji - NOWY UKŁAD Z 2 KOLUMNAMI */}
        <div className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* LEWA KOLUMNA: Filozofia kuchni i Detale wnętrza (jedna pod drugą) */}
            <div className="lg:col-span-1 space-y-8">
              {/* Filozofia kuchni */}
              <SlideLeft delay={0.3}>
                <div className="bg-white p-8 border border-slate-200 shadow-sm h-full">
                  <h2 className="font-heading text-2xl font-semibold text-[#C9A24D] mb-6">
                    FILOZOFIA KUCHNI
                  </h2>
                  <FadeIn delay={0.1}>
                    <p className="text-slate-600 leading-relaxed mb-4">
                      Nasza kuchnia to połączenie najlepszych lokalnych produktów 
                      z technikami wywodzącymi się z francuskiej tradycji kulinarnej. 
                      Wierzymy w sezonowość i współpracę z lokalnymi dostawcami.
                    </p>
                  </FadeIn>
                  <SlideUp delay={0.2}>
                    <ul className="text-slate-600 space-y-2 mt-6">
                      {[
                        "Produkty od lokalnych dostawców (promień 50km)",
                        "Mięso z ekologicznych hodowli",
                        "Ryby ze zrównoważonych połowów",
                        "Warzywa i zioła z własnego ogrodu",
                        "Wina z małych, rodzinnych winnic"
                      ].map((item, index) => (
                        <FadeIn key={index} delay={0.05 * index}>
                          <li className="flex items-start">
                            <span className="text-[#C9A24D] mr-2 mt-1">✓</span>
                            {item}
                          </li>
                        </FadeIn>
                      ))}
                    </ul>
                  </SlideUp>
                </div>
              </SlideLeft>

              {/* Detale wnętrza */}
              <SlideLeft delay={0.4}>
                <div className="bg-white border border-slate-200 shadow-sm overflow-hidden h-full">
                  <div className="group relative h-48 w-full overflow-hidden">
                    <div className="h-full w-full bg-center bg-cover transition-transform duration-500 group-hover:scale-105"
                      style={{ backgroundImage: `url('/restauracja-detale.jpg')` }}>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                      <SlideUp delay={0.1}>
                        <h3 className="text-white font-medium text-lg">Wystrój i detale</h3>
                      </SlideUp>
                      <FadeIn delay={0.2}>
                        <p className="text-white/80 text-sm mt-2">Starannie dobrane elementy wystroju</p>
                      </FadeIn>
                    </div>
                  </div>
                  <div className="p-6">
                    <SlideUp delay={0.2}>
                      <h3 className="font-heading text-xl font-semibold text-[#C9A24D] mb-3">
                        DETALE WNĘTRZA
                      </h3>
                    </SlideUp>
                    <FadeIn delay={0.3}>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        Nasza przestrzeń zaprojektowana przez uznanego architekta wnętrz.
                        Antyczne meble, kryształowe żyrandole i ręcznie tkane dywany 
                        tworzą klimat dawnej elegancji.
                      </p>
                    </FadeIn>
                  </div>
                </div>
              </SlideLeft>
            </div>

            {/* PRAWA KOLUMNA: Szef kuchni (duże zdjęcie) */}
            <div className="lg:col-span-2">
              <SlideRight delay={0.3}>
                <div className="bg-white p-8 border border-slate-200 shadow-sm h-full">
                  <FadeIn delay={0.1}>
                    <div className="h-[500px] w-full bg-center bg-cover rounded-lg mb-6"
                         style={{ 
                           backgroundImage: `url('/restauracja-szef.jpg')`,
                           backgroundPosition: 'center 30%'
                         }}>
                    </div>
                  </FadeIn>
                  <SlideUp delay={0.2}>
                    <h3 className="font-heading text-2xl font-semibold text-[#C9A24D] mb-4">
                      SZEF KUCHNI
                    </h3>
                  </SlideUp>
                  <FadeIn delay={0.3}>
                    <div className="space-y-4">
                      <p className="text-slate-600 leading-relaxed">
                        <strong>Jan Kowalski</strong> – zdobywca gwiazdki Michelin, 
                        wcześniej szef kuchni w restauracjach w Paryżu i Nowym Jorku. 
                        Jego pasją jest łączenie polskich smaków z francuską elegancją.
                      </p>
                      <p className="text-slate-600 leading-relaxed">
                        Absolwent prestiżowej szkoły kulinarnej Le Cordon Bleu w Paryżu. 
                        Przez 5 lat pracował w 3-gwiazdkowej restauracji "L'Arpège", 
                        gdzie doskonalił techniki sous-vide i molekularne.
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                        <div>
                          <h4 className="font-medium text-slate-900 mb-2">Specjalizacje:</h4>
                          <ul className="text-slate-600 text-sm space-y-1">
                            <li>• Kuchnia fusion polsko-francuska</li>
                            <li>• Techniki sous-vide</li>
                            <li>• Mięsa i ryby z grilla węglowego</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium text-slate-900 mb-2">Osiągnięcia:</h4>
                          <ul className="text-slate-600 text-sm space-y-1">
                            <li>• Gwiazdka Michelin (2024)</li>
                            <li>• Chef of the Year 2023</li>
                            <li>• 2 miejsce Bocuse d'Or Polska</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </FadeIn>
                </div>
              </SlideRight>
            </div>
            
          </div>
        </div>

        {/* Menu */}
        <SlideUp delay={0.3}>
          <div className="mb-16">
            <h2 className="font-heading text-3xl font-semibold text-center text-[#C9A24D] mb-10">
              PRZYKŁADOWE MENU
            </h2>
            
            <div className="space-y-8">
              {menuSections.map((section, sectionIndex) => (
                <SlideUp key={sectionIndex} delay={sectionIndex * 0.2}>
                  <div className="bg-white p-8 border border-slate-200 shadow-sm">
                    <SlideLeft delay={0.1}>
                      <h3 className="font-heading text-2xl font-semibold text-slate-900 mb-6">
                        {section.title}
                      </h3>
                    </SlideLeft>
                    
                    <div className="space-y-6">
                      {section.items.map((item, itemIndex) => (
                        <FadeIn key={itemIndex} delay={itemIndex * 0.1}>
                          <div className="flex justify-between items-start border-b border-slate-100 pb-4">
                            <div className="flex-1">
                              <h4 className="font-medium text-slate-900">{item.name}</h4>
                              <p className="text-slate-600 text-sm mt-1">{item.desc}</p>
                            </div>
                            <span className="font-semibold text-[#C9A24D] ml-4">
                              {item.price}
                            </span>
                          </div>
                        </FadeIn>
                      ))}
                    </div>
                  </div>
                </SlideUp>
              ))}
            </div>
          </div>
        </SlideUp>

        {/* Informacje praktyczne */}
        <SlideUp delay={0.3}>
          <div className="bg-white p-8 border border-slate-200 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <SlideUp delay={0.3}>
                <div>
                  <h3 className="font-medium text-slate-900 mb-3">Kontakt z restauracją</h3>
                  <ul className="text-slate-600 space-y-2 text-sm">
                    <li>Tel: +48 987 654 321</li>
                    <li>Email: restaurant@labelleepoque.pl</li>
                  </ul>
                </div>
              </SlideUp>
            </div>

            {/* Nagrody */}
            <FadeIn delay={0.5}>
              <div className="mt-8 pt-8 border-t border-slate-200">
                <h3 className="font-medium text-slate-900 mb-4">Nagrody i wyróżnienia:</h3>
                <div className="flex flex-wrap gap-4">
                  {[
                    { emoji: "⭐", text: "Gwiazdka Michelin 2024" },
                    { emoji: "🏆", text: "50 Best Restaurants Poland" },
                    { emoji: "🍷", text: "Wine Spectator Award" },
                    { emoji: "🌿", text: "Green Restaurant 2023" }
                  ].map((award, index) => (
                    <FadeIn key={index} delay={index * 0.1}>
                      <div className="flex items-center gap-2 px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg">
                        <span className="text-xl">{award.emoji}</span>
                        <span className="text-sm text-slate-700">{award.text}</span>
                      </div>
                    </FadeIn>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </SlideUp>
      </div>
    </div>
  );
}