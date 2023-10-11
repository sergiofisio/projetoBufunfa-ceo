import { Route, Routes } from "react-router-dom";
import App from "./App";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
    </Routes>
  );
};

export default MainRoutes;
