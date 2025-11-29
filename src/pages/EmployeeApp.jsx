// src/pages/EmployeeApp.jsx
import { Example as RetractingSideBar } from "../components/employee/RetractingSideBar"

export default function EmployeeApp() {
  return (
    <div className="min-h-screen"> {/* Dodane h-screen i w-screen */}
      <RetractingSideBar />
    </div>
  )
}