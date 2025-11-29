import { useState, useEffect } from 'react'
import CustomerApp from './pages/CustomerApp'
import EmployeeApp from './pages/EmployeeApp'
import './App.css'

function App() {
  const [userType, setUserType] = useState('customer')

  // Sprawdzaj URL przy załadowaniu
  useEffect(() => {
    const path = window.location.pathname
    if (path.includes('/employee')) {
      setUserType('employee')
    }
  }, [])

  return (
    <div className="min-h-screen">
      {userType === 'customer' ? <CustomerApp /> : <EmployeeApp />}
    </div>
  )
}

export default App