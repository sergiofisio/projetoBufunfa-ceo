import { ToastContainer } from "react-toastify";
import Login from "./pages/Login";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";
import Home from "./pages/home";

function App() {

  return (
    <div className="w-screen h-screen bg-transparent flex items-center justify-center">
      <div className="relative w-full h-full bg-purpleDark flex items-center justify-center">
        {active === "login" && <Login />}
        {active === "home" && <Home />}
        <ToastContainer
          position="bottom-center"
          bodyClassName="rounded-3xl"
          className={
            "!absolute !bottom-0 flex justify-center items-center w-full px-2 rounded-3xl"
          }
        />
      </div>
    </div>
  );
}

export default App;
