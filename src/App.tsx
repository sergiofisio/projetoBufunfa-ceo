import { MenuBar } from "./components/MenuBar";
import { MenuTop } from "./components/MenuTop";
import Button from "./components/button/button";

function App() {

  function handlerTeste() {
    console.log("Oi");
  }

  return (
    <div className="w-screen h-screen bg-white flex items-center justify-center">
      <MenuTop label="Salário" />
      {/* <div className="relative min-w-[20.625rem] min-h-[43.625rem] bg-purple rounded-3xl flex items-center justify-center"></div> */}
      <Button onClick={handlerTeste} text={"click"} color={"gold"} />
      <MenuBar />
    </div>
  );
}

export default App;
