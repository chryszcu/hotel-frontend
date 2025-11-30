// src/pages/EmployeeApp.jsx
import { useState } from "react"
import { Example as RetractingSideBar } from "../components/employee/RetractingSideBar"
import AdminLogin from "../components/employee/Auth/AdminLogin";
 // bo AdminLogin.jsx jest w tym samym folderze pages

export default function EmployeeApp() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  // jeśli nie zalogowany → pokaż ekran logowania
  if (!isLoggedIn) {
    return <AdminLogin onLoginSuccess={() => setIsLoggedIn(true)} />
  }

  // jeśli zalogowany → pokaż panel admina
  return (
    <div className="min-h-screen">
      <RetractingSideBar />
    </div>
  )
}
