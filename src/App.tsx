import { useState } from "react";
import Employee from "./components/employee/employee";
import employee from "./assets/employee.svg";

function App() {
  const [showModal, setShowModal] = useState(true);
  return (
    <div className="w-screen h-screen bg-white flex items-center justify-center">
      <div className="relative min-w-[20.625rem] min-h-[43.625rem] bg-purple rounded-3xl flex items-center justify-center"></div>
    </div>
  );
}

export default App;
