import { useState } from "react";
import AdminLogin from "../components/employee/Auth/AdminLogin"
import AdminPanel from "../components/employee/AdminPanel"; // albo zmień nazwę pliku na AdminPanel.jsx

export default function EmployeeApp() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (!isLoggedIn) {
    return <AdminLogin onLoginSuccess={() => setIsLoggedIn(true)} />;
  }

  return (
    <div className="min-h-screen">
      <AdminPanel />
    </div>
  );
}
