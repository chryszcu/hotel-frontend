import React, { useState } from "react";
import {
  FiBarChart,
  FiChevronDown,
  FiChevronsRight,
  FiDollarSign,
  FiHome,
  FiMonitor,
  FiShoppingCart,
  FiTag,
  FiUsers,
} from "react-icons/fi";
import { motion } from "framer-motion";
import { BiBed } from "react-icons/bi";

const LoginScreen = ({ onLoginSuccess }) => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (login === "admin" && password === "admin") {
      setError("");
      onLoginSuccess();
    } else {
      setError("Nieprawidłowy login lub hasło");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900">
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 20, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        className="w-full max-w-sm bg-slate-800/80 border border-slate-700 rounded-2xl p-6 shadow-xl"
      >
        <h1 className="text-xl font-semibold text-slate-100 mb-1">
          Panel administratora
        </h1>
        <p className="text-xs text-slate-400 mb-6">
          Zaloguj się, aby przejść do systemu.
        </p>

        <div className="mb-4">
          <label className="block text-xs text-slate-300 mb-1">
            Login
          </label>
          <input
            type="text"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
            className="w-full rounded-lg bg-slate-900 border border-slate-700 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder=""
          />
        </div>

        <div className="mb-4">
          <label className="block text-xs text-slate-300 mb-1">
            Hasło
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-lg bg-slate-900 border border-slate-700 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder=""
          />
        </div>

        {error && (
          <p className="mb-3 text-xs text-red-400">
            {error}
          </p>
        )}

        <button
          type="submit"
          className="w-full mt-2 px-4 py-2 rounded-lg bg-indigo-500 hover:bg-indigo-600 text-sm font-medium text-white transition"
        >
          Zaloguj się
        </button>

        <p className="mt-3 text-[10px] text-slate-500 text-center">
          Demo: użyj loginu <span className="font-mono">admin</span> i hasła{" "}
          <span className="font-mono">admin</span>.
        </p>
      </motion.form>
    </div>
  );
};

export const Example = () => {
  const [selected, setSelected] = useState("DashBoard");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (!isLoggedIn) {
    return <LoginScreen onLoginSuccess={() => setIsLoggedIn(true)} />;
  }

  return (
    <div className="flex bg-slate-900">
      <Sidebar selected={selected} setSelected={setSelected} />
      <ExampleContent selected={selected} setSelected={setSelected} />
    </div>
  );
};

const Sidebar = ({ selected, setSelected }) => {
  const [open, setOpen] = useState(true);
  return (
    <motion.nav
      layout
      className="sticky top-0 h-screen shrink-0 border-r border-gray-700 bg-slate-700 p-2"
      style={{
        width: open ? "225px" : "fit-content",
      }}
    >
      <div
        onClick={() => setSelected("DashBoard")}
        className="flex justify-center mb-4 cursor-pointer"
      >
        <img
          src="src/components/logo_skr.png"
          alt="logo"
          className="w-20 h-20 rounded-md"
        />
      </div>
      <TitleSection open={open} />

      <div className="space-y-1">
        <Option
          Icon={FiHome}
          title="DashBoard"
          selected={selected}
          setSelected={setSelected}
          open={open}
        />
        <Option
          Icon={FiDollarSign}
          title="Zarobki"
          selected={selected}
          setSelected={setSelected}
          open={open}
          notifs={3}
        />
        <Option
          Icon={FiMonitor}
          title="Rezerwacja"
          selected={selected}
          setSelected={setSelected}
          open={open}
        />
        <Option
          Icon={BiBed}
          title="Lista pokoi"
          selected={selected}
          setSelected={setSelected}
          open={open}
        />
        <Option
          Icon={FiTag}
          title="Tags"
          selected={selected}
          setSelected={setSelected}
          open={open}
        />
        <Option
          Icon={FiBarChart}
          title="Analiza"
          selected={selected}
          setSelected={setSelected}
          open={open}
        />
        <Option
          Icon={FiUsers}
          title="Członkowie"
          selected={selected}
          setSelected={setSelected}
          open={open}
        />
      </div>

      <ToggleClose open={open} setOpen={setOpen} />
    </motion.nav>
  );
};

const Option = ({ Icon, title, selected, setSelected, open, notifs }) => {
  return (
    <motion.button
      layout
      onClick={() => setSelected(title)}
      className={`relative flex h-10 w-full items-center rounded-md transition-colors ${selected === title ? "bg-indigo-100 text-indigo-800" : "text-slate-500 hover:bg-slate-100"}`}
    >
      <motion.div
        layout
        className="grid h-full w-20 place-content-center text-lg"
      >
        <Icon />
      </motion.div>
      {open && (
        <motion.span
          layout
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.125 }}
          className="text-xs font-medium"
        >
          {title}
        </motion.span>
      )}

      {notifs && open && (
        <motion.span
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          style={{ y: "-50%" }}
          transition={{ delay: 0.5 }}
          className="absolute right-2 top-1/2 size-4 rounded bg-indigo-500 text-xs text-white"
        >
          {notifs}
        </motion.span>
      )}
    </motion.button>
  );
};

const TitleSection = ({ open }) => {
  return (
    <div className="mb-3 border-b border-slate-300 pb-3">
      <div className="flex cursor-pointer items-center justify-between rounded-md transition-colors hover:bg-slate-100">
        <div className="flex items-center gap-2">
          <Logo />
          {open && (
            <motion.div
              layout
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.125 }}
            >
              <span className="block text-xs font-semibold text-slate-400">Chryszczu</span>
              <span className="block text-xs text-slate-500">Admin</span>
            </motion.div>
          )}
        </div>
        {open && <FiChevronDown className="mr-2" />}
      </div>
    </div>
  );
};

const Logo = () => {
  return (
    <motion.div
      layout
      className="grid size-20 shrink-0 place-content-center rounded-md bg-indigo-600"
    >
      <img
        src="src/components/koala_826954.png"
        alt="Logo"
        className="w-8 h-8"
      />
    </motion.div>
  );
};


const ToggleClose = ({ open, setOpen }) => {
  return (
    <motion.button
      layout
      onClick={() => setOpen((pv) => !pv)}
      className="absolute bottom-0 left-0 right-0 border-t border-slate-300 transition-colors hover:bg-slate-100 text-slate-900"
    >
      <div className="flex items-center p-2">
        <motion.div
          layout
          className="grid size-10 place-content-center text-lg "
        >
          <FiChevronsRight
            className={`transition-transform ${open && "rotate-180"}`}
          />
        </motion.div>
        {open && (
          <motion.span
            layout
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.125 }}
            className="text-xs font-medium text-slate-900"
          >
            Ukryj
          </motion.span>
        )}
      </div>
    </motion.button>
  );
};

const ExampleContent = ({ selected, setSelected }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [memberType, setMemberType] = useState("Gość");

   const [reservationForm, setReservationForm] = useState({
    name: "",
    email: "",
    phone: "",
    arrivalDate: "",
    departureDate: "",
    people: 1,
    roomType: "Standard",
    paymentMethod: "Karta płatnicza",
  });

  const handleReservationChange = (e) => {
    const { name, value } = e.target;
    setReservationForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleReservationSubmit = (e) => {
    e.preventDefault();
    // Tu w przyszłości możesz wysłać dane do backendu.
    console.log("FormularzRezerwacji:", reservationForm);
    alert("Rezerwacja została zapisana.");
  };

  return (
    <div className="h-screen w-full p-8 text-slate-100">
      {selected === "DashBoard" && (
        <section>
          <h1 className="text-3xl font-bold mb-6">DashBoard</h1>

          {/* GRID Z KAFELKAMI */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-12 mb-8">
            {/* Kafelek 1 */}
            <div 
            onClick={() => setSelected("Lista pokoi")}
            className="bg-slate-800 rounded-xl p-16 shadow-lg border border-slate-700 cursor-pointer hover:bg-slate-700 transition"
            >
              <p className="text-l text-slate-400 cente">Obłożenie pokoi</p>
              <p className="mt-2 text-4xl font-bold text-indigo-400">82%</p>
              <p className="mt-1 text-xs text-emerald-400">+5% vs wczoraj</p>
            </div>

            {/* Kafelek 2 */}
            <div
              onClick={() => setSelected("Zarobki")}
              className="bg-slate-800 rounded-xl p-16 shadow-lg border border-slate-700 cursor-pointer hover:bg-slate-700 transition"
            >
              <p className="text-l text-slate-400">Dzisiejszy przychód</p>
              <p className="mt-2 text-4xl font-bold text-emerald-400">12 350 zł</p>
              <p className="mt-1 text-xs text-slate-400">z rezerwacji online i na recepcji</p>
            </div>

            {/* Kafelek 3 */}
            <div 
            onClick={() => setSelected("Członkowie")}
            className="bg-slate-800 rounded-xl p-16 shadow-lg border border-slate-700 cursor-pointer hover:bg-slate-700 transition">
              <p className="text-l text-slate-400">Goście w hotelu</p>
              <p className="mt-2 text-4xl font-bold text-sky-400">74</p>
              <p className="mt-1 text-xs text-slate-400">z 90 dostępnych miejsc</p>
            </div>

            {/* Kafelek 4 */}
            <div className="bg-slate-800 rounded-xl p-16 shadow-lg border border-slate-700">
              <p className="text-l text-slate-400">Dzisiejsze check-iny</p>
              <p className="mt-2 text-4xl font-bold text-amber-400">9</p>
              <p className="mt-1 text-xs text-slate-400">3 jeszcze oczekuje</p>
            </div>
          </div>

          {/* Dalsza część dashboardu – np. tabelki / wykresy */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-12">
            <div className="xl:col-span-2 bg-slate-800 rounded-xl p-16 border border-slate-700">
              <h2 className="text-2xl font-semibold mb-2">Dzisiejsze operacje</h2>
              <p className="text-l text-slate-400">
                Tu możesz później dodać listę dzisiejszych przyjazdów i wyjazdów.
              </p>
            </div>
            <div className="bg-slate-800 rounded-xl p-16 border border-slate-700">
              <h2 className="text-2xl font-semibold mb-2">Alerty</h2>
              <ul className="text-l text-slate-300 list-disc list-inside space-y-1">
                <li>2 pokoje oznaczone jako "do sprzątania"</li>
                <li>1 pokój zgłoszony jako "usterka"</li>
              </ul>
            </div>
          </div>
        </section>
      )}

      {selected === "Zarobki" && (
        <div>
          <h1 className="text-2xl font-bold mb-4">Zarobki</h1>
          <p>Tu będą wykresy, tabela przychodów, podsumowanie miesiąca.</p>
        </div>
      )}

      {selected === "Rezerwacja" && (
        <section>
          <h1 className="text-3xl font-bold mb-2">Nowa rezerwacja</h1>

          <form
            onSubmit={handleReservationSubmit}
            className="grid grid-cols-1 lg:grid-cols-2 gap-6 bg-slate-800/70 rounded-2xl border border-slate-700 p-8"
          >
            {/* DANE KLIENTA */}
            <div className="space-y-4">
              <h2 className="text-lg font-semibold text-slate-100 mb-1">Dane klienta</h2>

              <div>
                <label className="block text-xs text-slate-300 mb-1">
                  Imię i nazwisko
                </label>
                <input
                  type="text"
                  name="name"
                  value={reservationForm.name}
                  onChange={handleReservationChange}
                  className="w-full rounded-lg bg-slate-900 border border-slate-700 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Jan Kowalski"
                  required
                />
              </div>

              <div>
                <label className="block text-xs text-slate-300 mb-1">
                  E-mail
                </label>
                <input
                  type="email"
                  name="email"
                  value={reservationForm.email}
                  onChange={handleReservationChange}
                  className="w-full rounded-lg bg-slate-900 border border-slate-700 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="jan.kowalski@example.com"
                  required
                />
              </div>

              <div>
                <label className="block text-xs text-slate-300 mb-1">
                  Telefon
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={reservationForm.phone}
                  onChange={handleReservationChange}
                  className="w-full rounded-lg bg-slate-900 border border-slate-700 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="+48 123 456 789"
                />
              </div>
            </div>

            {/* DANE REZERWACJI */}
            <div className="space-y-4">
              <h2 className="text-lg font-semibold text-slate-100 mb-1">Szczegóły rezerwacji</h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-slate-300 mb-1">
                    Data przyjazdu
                  </label>
                  <input
                    type="date"
                    name="arrivalDate"
                    value={reservationForm.arrivalDate}
                    onChange={handleReservationChange}
                    className="w-full rounded-lg bg-slate-900 border border-slate-700 px-3 py-2 text-sm text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs text-slate-300 mb-1">
                    Data wyjazdu
                  </label>
                  <input
                    type="date"
                    name="departureDate"
                    value={reservationForm.departureDate}
                    onChange={handleReservationChange}
                    className="w-full rounded-lg bg-slate-900 border border-slate-700 px-3 py-2 text-sm text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs text-slate-300 mb-1">
                  Liczba osób
                </label>
                <input
                  type="number"
                  min={1}
                  max={10}
                  name="people"
                  value={reservationForm.people}
                  onChange={handleReservationChange}
                  className="w-full rounded-lg bg-slate-900 border border-slate-700 px-3 py-2 text-sm text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label className="block text-xs text-slate-300 mb-1">
                  Typ pokoju
                </label>
                <select
                  name="roomType"
                  value={reservationForm.roomType}
                  onChange={handleReservationChange}
                  className="w-full rounded-lg bg-slate-900 border border-slate-700 px-3 py-2 text-sm text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <option>Standard</option>
                  <option>Deluxe</option>
                  <option>Suite</option>
                  <option>Rodzinny</option>
                </select>
              </div>

              <div>
                <label className="block text-xs text-slate-300 mb-1">
                  Sposób płatności
                </label>
                <select
                  name="paymentMethod"
                  value={reservationForm.paymentMethod}
                  onChange={handleReservationChange}
                  className="w-full rounded-lg bg-slate-900 border border-slate-700 px-3 py-2 text-sm text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <option>Karta płatnicza</option>
                  <option>Gotówka na miejscu</option>
                  <option>Przelew</option>
                  <option>BLIK</option>
                </select>
              </div>

              <div className="pt-2 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() =>
                    setReservationForm({
                      name: "",
                      email: "",
                      phone: "",
                      arrivalDate: "",
                      departureDate: "",
                      people: 1,
                      roomType: "Standard",
                      paymentMethod: "Karta płatnicza",
                    })
                  }
                  className="px-4 py-2 rounded-lg bg-slate-700 hover:bg-slate-600 text-sm"
                >
                  Wyczyść
                </button>

                <button
                  type="submit"
                  className="px-4 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-sm font-medium text-white"
                >
                  Zapisz rezerwację
                </button>
              </div>
            </div>
          </form>
        </section>
      )}


      {selected === "Lista pokoi" && (
        <section>
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold">Lista i status pokoi</h1>
              <p className="text-sm text-slate-400">
                Lista użytkowników, klientów i gości korzystających z systemu.
              </p>
            </div>
          </div>

          {/* Pasek wyszukiwania / filtrów */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
            <div className="relative w-full md:w-1/3">
              <input
                type="text"
                placeholder="Szukaj pokoju"
                className="w-full rounded-lg bg-slate-800 border border-slate-700 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div className="flex gap-2 text-sm">
              <button className="px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-slate-200 hover:bg-slate-700 transition">
                Wszystkie
              </button>
              <button className="px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-slate-200 hover:bg-slate-700 transition">
                Wolne
              </button>
              <button className="px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-slate-200 hover:bg-slate-700 transition">
                Zajęte
              </button>
              <button className="px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-slate-200 hover:bg-slate-700 transition">
                Oczekujące
              </button>
            </div>
          </div>

          {/* Tabela członków */}
          <div className="overflow-hidden rounded-xl border border-slate-700 bg-slate-800/60">
            <table className="min-w-full text-sm">
              <thead className="bg-slate-800">
                <tr className="text-left text-slate-300">
                  <th className="px-4 py-3">Nr pokoju</th>
                  <th className="px-4 py-3">Nazwa</th>
                  <th className="px-4 py-3">Iloosobowy</th>
                  <th className="px-4 py-3">Typ</th>
                  <th className="px-4 py-3">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-slate-700/60 hover:bg-slate-800/70 transition">
                  <td className="px-4 py-3 text-slate-100">5</td>
                  <td className="px-4 py-3 text-slate-300">Pokój dwuosobowy classic</td>
                  <td className="px-4 py-3 text-slate-100">2</td>
                  <td className="px-4 py-3 text-slate-300">Standard</td>
                  <td className="px-4 py-3">
                    <span className="inline-flex items-center rounded-full bg-emerald-500/15 px-2.5 py-0.5 text-xs font-medium text-emerald-400">
                      Wolny
                    </span>
                  </td>
                </tr>

                <tr className="border-t border-slate-700/60 hover:bg-slate-800/70 transition">
                  <td className="px-4 py-3 text-slate-100">6</td>
                  <td className="px-4 py-3 text-slate-300">Pokój czteroosobowy deluxe</td>
                  <td className="px-4 py-3 text-slate-100">4</td>
                  <td className="px-4 py-3 text-slate-300">Deluxe</td>
                  <td className="px-4 py-3">
                    <span className="inline-flex items-center rounded-full bg-amber-500/15 px-2.5 py-0.5 text-xs font-medium text-amber-400">
                      Sprzątanie 
                    </span>
                  </td>
                </tr>

                <tr className="border-t border-slate-700/60 hover:bg-slate-800/70 transition">
                  <td className="px-4 py-3 text-slate-100">7</td>
                  <td className="px-4 py-3 text-slate-300">Apartament pałacowy czteroosobowy</td>
                  <td className="px-4 py-3 text-slate-100">4</td>
                  <td className="px-4 py-3 text-slate-300">Apartament</td>
                  <td className="px-4 py-3">
                    <span className="inline-flex items-center rounded-full bg-sky-500/15 px-2.5 py-0.5 text-xs font-medium text-sky-400">
                      Oczekujący
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      )}

      {selected === "Tags" && (
        <div>
          <h1 className="text-2xl font-bold mb-4">Tags</h1>
          <p>Tu statystyki ruchu na stronie hotelu.</p>
        </div>
      )}

      {selected === "Analiza" && (
        <div>
          <h1 className="text-2xl font-bold mb-4">Analiza</h1>
          <p>Tu statystyki ruchu na stronie hotelu.</p>
        </div>
      )}

      {selected === "Członkowie" && (
        <section>
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold">Członkowie</h1>
              <p className="text-sm text-slate-400">
                Lista użytkowników, klientów i gości korzystających z systemu.
              </p>
            </div>

            <button
              onClick={() => setIsModalOpen(true)}
              className="px-4 py-2 rounded-lg bg-indigo-500 hover:bg-indigo-600 text-sm font-medium text-white transition"
            >
              + Dodaj członka
            </button>
          </div>

          {/* Pasek wyszukiwania / filtrów */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
            <div className="relative w-full md:w-1/3">
              <input
                type="text"
                placeholder="Szukaj po imieniu, nazwisku lub e-mailu..."
                className="w-full rounded-lg bg-slate-800 border border-slate-700 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div className="flex gap-2 text-sm">
              <button className="px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-slate-200 hover:bg-slate-700 transition">
                Wszyscy
              </button>
              <button className="px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-slate-200 hover:bg-slate-700 transition">
                Goście
              </button>
              <button className="px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-slate-200 hover:bg-slate-700 transition">
                Pracownicy
              </button>
              <button className="px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-slate-200 hover:bg-slate-700 transition">
                Admini
              </button>
            </div>
          </div>

          {/* Tabela członków */}
          <div className="overflow-hidden rounded-xl border border-slate-700 bg-slate-800/60">
            <table className="min-w-full text-sm">
              <thead className="bg-slate-800">
                <tr className="text-left text-slate-300">
                  <th className="px-4 py-3">Imię i nazwisko</th>
                  <th className="px-4 py-3">E-mail</th>
                  <th className="px-4 py-3">Typ</th>
                  <th className="px-4 py-3">Status</th>
                  <th className="px-4 py-3">Ostatni pobyt</th>
                  <th className="px-4 py-3 text-right">Rezerwacje</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-slate-700/60 hover:bg-slate-800/70 transition">
                  <td className="px-4 py-3 text-slate-100">Dawid Dąbrowski</td>
                  <td className="px-4 py-3 text-slate-300">dawid.dabrowski@example.com</td>
                  <td className="px-4 py-3 text-slate-300">Gość</td>
                  <td className="px-4 py-3">
                    <span className="inline-flex items-center rounded-full bg-emerald-500/15 px-2.5 py-0.5 text-xs font-medium text-emerald-400">
                      Aktywny
                    </span>
                  </td>
                  <td className="px-4 py-3 text-slate-300">12.10.2025 – 15.10.2025</td>
                  <td className="px-4 py-3 text-right text-slate-100">5</td>
                </tr>

                <tr className="border-t border-slate-700/60 hover:bg-slate-800/70 transition">
                  <td className="px-4 py-3 text-slate-100">Agata Bronk</td>
                  <td className="px-4 py-3 text-slate-300">agata.bronk@example.com</td>
                  <td className="px-4 py-3 text-slate-300">Gość</td>
                  <td className="px-4 py-3">
                    <span className="inline-flex items-center rounded-full bg-amber-500/15 px-2.5 py-0.5 text-xs font-medium text-amber-400">
                      Oczekuje
                    </span>
                  </td>
                  <td className="px-4 py-3 text-slate-300">Zaplanowany: 24.11.2025</td>
                  <td className="px-4 py-3 text-right text-slate-100">2</td>
                </tr>

                <tr className="border-t border-slate-700/60 hover:bg-slate-800/70 transition">
                  <td className="px-4 py-3 text-slate-100">Jakub Chryszczanowicz</td>
                  <td className="px-4 py-3 text-slate-300">admin@example.com</td>
                  <td className="px-4 py-3 text-slate-300">Admin</td>
                  <td className="px-4 py-3">
                    <span className="inline-flex items-center rounded-full bg-sky-500/15 px-2.5 py-0.5 text-xs font-medium text-sky-400">
                      Wewnętrzny
                    </span>
                  </td>
                  <td className="px-4 py-3 text-slate-300">–</td>
                  <td className="px-4 py-3 text-right text-slate-100">—</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      )}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="bg-slate-800 p-6 rounded-xl w-full max-w-md shadow-xl"
          >
            <h2 className="text-xl font-semibold mb-4">Dodaj członka</h2>

            <input
              type="text"
              placeholder="Imię i nazwisko"
              className="w-full p-3 rounded bg-slate-700 placeholder-slate-400 text-white mb-3"
            />

            <input
              type="email"
              placeholder="E-mail"
              className="w-full p-3 rounded bg-slate-700 placeholder-slate-400 text-white mb-3"
            />

            {/* Typ członka */}
            <div className="mb-4">
              <label className="block text-sm mb-1 text-slate-300">
                Typ członka
              </label>
              <select
                value={memberType}
                onChange={(e) => setMemberType(e.target.value)}
                className="w-full p-3 rounded bg-slate-700 text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option>Gość</option>
                <option>Pracownik</option>
                <option>Admin</option>
              </select>
            </div>

            <div className="flex justify-end gap-3 mt-4">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 rounded-lg bg-slate-600 hover:bg-slate-500 transition"
              >
                Anuluj
              </button>

              <button
                className="px-4 py-2 rounded-lg bg-indigo-500 hover:bg-indigo-600 transition"
              >
                Zapisz
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};
