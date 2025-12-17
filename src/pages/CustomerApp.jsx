// src/pages/CustomerApp.jsx
import { useState } from 'react'
import HomePage from '../components/customer/HomePage'
import RoomList from '../components/customer/RoomList'
import BookingForm from '../components/customer/BookingForm'
import NavMenu from '../components/customer/NavMenu'
import InfoHotel from '../components/customer/MenuPages/InfoHotel'
import Rooms from '../components/customer/MenuPages/Rooms'
import Contact from '../components/customer/MenuPages/Contact'
import Conferention from '../components/customer/MenuPages/Conferentions'
import SPA from '../components/customer/MenuPages/SPA'


export default function CustomerApp() {
  const [currentPage, setCurrentPage] = useState('home')
  const [selectedRoom, setSelectedRoom] = useState(null)

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />

      case 'roomsPage':
        return <Rooms />

      case 'rooms':
        return (
          <RoomList 
            onSelectRoom={(room) => {
              setSelectedRoom(room)
              setCurrentPage('booking')
            }}
            onBack={() => setCurrentPage('home')}
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
          <div className="min-h-screen flex items-center justify-center bg-slate-900">
            <div className="text-center text-white">
              <h2 className="text-3xl font-bold mb-4">Rezerwacja potwierdzona!</h2>
              <p className="text-slate-300 mb-8">Dziękujemy za rezerwację w naszym hotelu.</p>
              <button 
                onClick={() => setCurrentPage('home')}
                className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700"
              >
                Powrót do strony głównej
              </button>
            </div>
          </div>
        )
        case 'info':
          return (
          <InfoHotel />
          )

          case 'SPA':
          return (
          <SPA />
          )
          
          case 'Confer':
          return (
          <Conferention />
          )
          case 'Cont':
          return (
          <Contact />
          )

      default:
        return <HomePage />
    }
  }

  return (
    <>
      {/* NAVBAR NAJPIERW - poza div z paddingiem */}
      <NavMenu 
        onNavigate={(page) => setCurrentPage(page)}
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
    </div>




    </>
  )
}