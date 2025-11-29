import { useState } from 'react'

export default function BookingForm({ room, onBack, onSuccess }) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    guests: 1
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Tutaj logika wysyłania rezerwacji
    console.log('Rezerwacja:', { room, formData })
    onSuccess()
  }

  return (
    <section className="min-h-screen bg-slate-900 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <button 
          onClick={onBack}
          className="flex items-center text-slate-400 hover:text-white mb-8"
        >
          ← Powrót do wyboru pokoju
        </button>

        <div className="bg-slate-800 rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-2">Rezerwacja: {room?.name}</h2>
          <p className="text-slate-400 mb-6">Cena: {room?.price} zł/noc</p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-slate-300 mb-2">Imię</label>
                <input
                  type="text"
                  required
                  className="w-full p-3 rounded-lg bg-slate-700 border border-slate-600 text-white"
                  value={formData.firstName}
                  onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                />
              </div>
              
              <div>
                <label className="block text-slate-300 mb-2">Nazwisko</label>
                <input
                  type="text"
                  required
                  className="w-full p-3 rounded-lg bg-slate-700 border border-slate-600 text-white"
                  value={formData.lastName}
                  onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-slate-300 mb-2">Email</label>
                <input
                  type="email"
                  required
                  className="w-full p-3 rounded-lg bg-slate-700 border border-slate-600 text-white"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
              
              <div>
                <label className="block text-slate-300 mb-2">Telefon</label>
                <input
                  type="tel"
                  required
                  className="w-full p-3 rounded-lg bg-slate-700 border border-slate-600 text-white"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-slate-300 mb-2">Data zameldowania</label>
                <input
                  type="date"
                  required
                  className="w-full p-3 rounded-lg bg-slate-700 border border-slate-600 text-white"
                  value={formData.checkIn}
                  onChange={(e) => setFormData({...formData, checkIn: e.target.value})}
                />
              </div>
              
              <div>
                <label className="block text-slate-300 mb-2">Data wymeldowania</label>
                <input
                  type="date"
                  required
                  className="w-full p-3 rounded-lg bg-slate-700 border border-slate-600 text-white"
                  value={formData.checkOut}
                  onChange={(e) => setFormData({...formData, checkOut: e.target.value})}
                />
              </div>
            </div>

            <div>
              <label className="block text-slate-300 mb-2">Liczba gości</label>
              <select
                className="w-full p-3 rounded-lg bg-slate-700 border border-slate-600 text-white"
                value={formData.guests}
                onChange={(e) => setFormData({...formData, guests: parseInt(e.target.value)})}
              >
                {[1, 2, 3, 4].map(num => (
                  <option key={num} value={num}>{num}</option>
                ))}
              </select>
            </div>

            <div className="flex gap-4 pt-4">
              <button
                type="button"
                onClick={onBack}
                className="flex-1 bg-slate-700 text-white py-3 rounded-lg hover:bg-slate-600"
              >
                Anuluj
              </button>
              <button
                type="submit"
                className="flex-1 bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700"
              >
                Potwierdź rezerwację
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}