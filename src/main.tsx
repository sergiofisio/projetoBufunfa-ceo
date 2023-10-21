import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import MainRoutes from "./routes.tsx";
import { ToastContainer } from "react-toastify";
// import { InfinitySpin } from "react-loader-spinner";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <div className="w-screen h-screen bg-purpleDark">
      <BrowserRouter>
        {/* <InfinitySpin width="300" color="#00BFFF" /> */}
        <MainRoutes />
      </BrowserRouter>
      <ToastContainer />
    </div>
  </>
);
