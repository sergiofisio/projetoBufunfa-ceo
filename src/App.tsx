import { ToastContainer } from "react-toastify";
import Login from "./pages/Login";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";
import Home from "./pages/home";
import { useState } from "react";
import Signup from "./pages/Signup";

function App() {
  const [active, setActive] = useState("login");

  return (
    <div className="w-screen h-screen bg-transparent flex items-center justify-center">
      <div className="relative w-full h-full bg-purpleDark flex items-center justify-center">
        {active === "login" && <Login />}
        {active === "home" && <Home />}
        {active === "signup" && <Signup />}
      </div>
    </div>
  );
}

export default App;
