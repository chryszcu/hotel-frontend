// src/pages/CustomerApp.jsx
import { useState, useEffect } from 'react'
import HomePage from '../components/customer/HomePage'
import RoomList from '../components/customer/RoomList'
import BookingForm from '../components/customer/BookingForm'
import NavMenu from '../components/customer/NavMenu'
import InfoHotel from '../components/customer/MenuPages/InfoHotel'
import Rooms from '../components/customer/MenuPages/Rooms'
import Contact from '../components/customer/MenuPages/Contact'
import Conferention from '../components/customer/MenuPages/Conferentions'
import SPA from '../components/customer/MenuPages/SPA'
import Footer from '../components/customer/Footer'

export default function CustomerApp() {
  const [currentPage, setCurrentPage] = useState('home')
  const [selectedRoom, setSelectedRoom] = useState(null)
  const [roomToExpand, setRoomToExpand] = useState(null)

  // Scroll to top przy każdej zmianie strony
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }, [currentPage])

  // Rozszerzona funkcja do nawigacji z obsługą roomId
  const handleNavigate = (page, roomId = null) => {
    if (roomId) {
      setRoomToExpand(roomId); // Zapamiętaj który pokój rozwijać
    }
    setCurrentPage(page);
  };

  // Funkcja do przejścia do strony Rooms z rozwiniętym pokojem
  const handleNavigateToRoomDetails = (roomId) => {
    setRoomToExpand(roomId);
    setCurrentPage('roomsPage');
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} /> // Przekazuj funkcję nawigacji

      case 'roomsPage':
        return <Rooms roomToExpand={roomToExpand} />

      case 'rooms':
        return (
          <RoomList 
            onSelectRoom={(room) => {
              setSelectedRoom(room)
              setCurrentPage('booking')
            }}
            onBack={() => setCurrentPage('home')}
            onNavigateToRoomDetails={handleNavigateToRoomDetails}
          />
        )

      case 'booking':
        return (
          <BookingForm 
            room={selectedRoom}
            onBack={() => setCurrentPage('rooms')}
            onSuccess={() => setCurrentPage('success')}
          />
        )
      case 'success':
        return (
          <div className="min-h-screen flex items-center justify-center bg-[#f8f4ec]
        bg-[linear-gradient(to_bottom,rgba(212,175,55,0.22)_1px,transparent_1px)]
        bg-size-[100%_8px]">
            <div className="text-center text-white">
              <h2 className="text-slate-900 text-3xl font-bold mb-4">Rezerwacja potwierdzona!</h2>
              <p className="text-slate-600 mb-8">Dziękujemy za rezerwację w naszym hotelu.</p>
              <button 
                onClick={() => setCurrentPage('home')}
                className="flex-1 border border-[#C9A24D] px-6 py-3
                           font-semibold text-[#C9A24D]
                           hover:bg-[#C9A24D] hover:text-white transition bg-white/90"
              >
                Powrót do strony głównej
              </button>
            </div>
          </div>
        )
        case 'info':
          return <InfoHotel />
        case 'SPA':
          return <SPA />
        case 'Confer':
          return <Conferention />
        case 'Cont':
          return <Contact />
      default:
        return <HomePage onNavigate={handleNavigate} />
    }
  }

  return (
    <>
      <NavMenu 
        onNavigate={(page) => handleNavigate(page)}
        onBookNow={() => setCurrentPage('rooms')}
      />
          
      <div
        className="
          min-h-screen
          pt-24
          text-slate-900
          bg-[#f8f4ec]
          bg-[linear-gradient(to_bottom,rgba(212,175,55,0.22)_1px,transparent_1px)]
          bg-size-[100%_8px]
        "
      >
        {renderPage()}
        <Footer 
          onNavigate={(page) => handleNavigate(page)}
          onBookNow={() => setCurrentPage('rooms')}
        />
      </div>
    </>
  )
}