import { Route, Routes } from "react-router-dom";
import App from "./App";
import Home from "./pages/home";
import CompanyCreate from "./components/company/company.create";
import Login from "./pages/Login";
import Company from "./pages/company/company";
import Signup from "./pages/Signup";
import RecoveryPassword from "./pages/RecoveryPassword";
import ChangePassword from "./pages/ChangePassword";
import CompanyEdit from "./components/company/company.edit";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/newCompany" element={<CompanyCreate />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/info" element={<Company />} />
      <Route path="/recoveryPassword" element={<RecoveryPassword />} />
      <Route path="/changePassword" element={<ChangePassword />} />
      <Route path="/editCompany" element={<CompanyEdit />} />
    </Routes>
  );
};

export default MainRoutes;
