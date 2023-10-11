import { ToastContainer } from "react-toastify";
import Login from "./pages/Login";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";

function App() {
  return (
    <div className="w-screen h-screen bg-white flex items-center justify-center">
      <div className="relative w-[20.625rem] h-[43.625rem] bg-purpleDark rounded-3xl flex items-center justify-center">
        <Login />
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
