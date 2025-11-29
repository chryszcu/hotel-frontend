// src/pages/CustomerApp.jsx
import { useState } from 'react'
import HomePage from '../components/customer/HomePage'
import RoomList from '../components/customer/RoomList'
import BookingForm from '../components/customer/BookingForm'

export default function CustomerApp() {
  const [currentPage, setCurrentPage] = useState('home')
  const [selectedRoom, setSelectedRoom] = useState(null)

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onBookNow={() => setCurrentPage('rooms')} />
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
      default:
        return <HomePage />
    }
  }

  return (
    <div className="h-full w-full"> {/* Zmienione na h-full i w-full */}
      {renderPage()}
    </div>
  )
}