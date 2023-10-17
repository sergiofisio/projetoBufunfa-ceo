import { Route, Routes } from "react-router-dom";
import App from "./App";
import Home from "./pages/home";
import CompanyCreate from "./pages/company/company.create";
import CompanyInfo from "./pages/company/company.info";
import { useState } from "react";
import Login from "./pages/Login";

const MainRoutes = () => {
  const [company, setCompany] = useState("");

  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home setCompany={setCompany} />} />
      <Route path="/newCompany" element={<CompanyCreate />} />
      <Route path="/info" element={<CompanyInfo company={company} />} />
    </Routes>
  );
};

export default MainRoutes;
