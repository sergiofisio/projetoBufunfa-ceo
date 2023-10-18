import { Route, Routes } from "react-router-dom";
import App from "./App";
import Login from "./pages/Login";
import Home from "./pages/home";
import { useState } from "react";
import CompanyCreate from "./pages/company/company.create";
import Signup from "./pages/Signup";

const MainRoutes = () => {
  const [active, setActive] = useState("login");
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/home" element={<Home />} />
      <Route path="/newCompany" element={<CompanyCreate />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
};

export default MainRoutes;
