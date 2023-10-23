import { Route, Routes } from "react-router-dom";
import App from "./App";
import Home from "./pages/home";
import CompanyCreate from "./pages/company/company.create";
import { useState } from "react";
import Login from "./pages/Login";
import Company from "./pages/company/company";
import Signup from "./pages/Signup";
import RecoveryPassword from "./pages/RecoveryPassword";

const MainRoutes = () => {
  const [company, setCompany] = useState("");

  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home setCompany={setCompany} />} />
      <Route path="/newCompany" element={<CompanyCreate />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/info" element={<Company company={company} />} />
      <Route path="/recoveryPassword" element={<RecoveryPassword />} />
    </Routes>
  );
};

export default MainRoutes;
