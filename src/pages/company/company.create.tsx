import { useState } from "react";
import camera from "../../assets/icons/camera.svg";
import Input from "./../../components/input/input";
import Button from "../../components/button/button";

export default function CompanyCreate() {
  const [step, setStep] = useState(1);
  const [name, setName] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [slogan, setSlogan] = useState("");
  const [description, setDescription] = useState("");
  const [logo, setLogo] = useState("");
  const [background, setBackground] = useState("");

  const handleClickBack = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (step === 1) {
      return window.history.back();
    }
    setStep(step - 1);
  };

  const handleChangeImg = (
    e: React.ChangeEvent<HTMLInputElement>,
    img: string
  ) => {
    const file = e.target.files?.[0];
    const imageUrl = file ? URL.createObjectURL(file) : "";
    if (img === "background") return setBackground(imageUrl);

    setLogo(imageUrl);
  };
  return (
    <div className="flex flex-col w-full min-h-full bg-white">
      <div className="flex items-center w-full h-32 rounded-b-3xl bg-purple px-4">
        <h2 onClick={(e) => handleClickBack(e)} className="text-7xl text-white">
          {"<"}
        </h2>
        <h2 className="text-title text-white w-full text-center">
          Nova empresa
        </h2>
      </div>
      <div className="flex flex-col items-center justify-center p-4 w-full h-[calc(100vh-8rem)] gap-5">
        <h2 className="text-subTitle2">Informações da empresa</h2>
        <div className="w-full relative">
          <label
            htmlFor="background"
            className={`w-full h-36 flex flex-col items-center justify-center rounded-3xl bg-purple cursor-pointer`}
          >
            <input
              id="background"
              name="background"
              onChange={(e) => handleChangeImg(e, "background")}
              type="file"
              accept="image/jpeg, image/png"
              className="hidden"
            />
            <img
              className={`${background ? "w-full h-full rounded-3xl" : ""}`}
              src={background ? background : camera}
              alt=""
            />
            {!background && <h2 className="text-gold">Adicionar Imagem</h2>}
          </label>
          <label
            htmlFor="logo"
            className="absolute -bottom-5 left-8 bg-purple border-gold border-solid border-2 rounded-[100%] w-20 h-20 flex items-center justify-center cursor-pointer z-10"
          >
            <input
              id="logo"
              name="logo"
              onChange={(e) => handleChangeImg(e, "logo")}
              type="file"
              accept="image/jpeg, image/png"
              className="hidden"
            />
            <img
              className={`${logo ? "w-full h-full rounded-3xl" : ""}`}
              src={logo ? logo : camera}
              alt=""
            />
          </label>
        </div>
        <form
          className="flex flex-col items-center justify-between w-full h-full py-4 gap-6"
          action="submit"
        >
          <div className="w-full flex flex-col gap-4">
            <Input
              label="Nome da empresa"
              type="text"
              set={setName}
              value={name}
              required={true}
            />
            <Input
              label="CNPJ da empresa"
              type="text"
              set={setCnpj}
              value={cnpj}
              required={false}
            />
            <Input
              label="Slogan da empresa"
              type="text"
              set={setSlogan}
              value={slogan}
              required={false}
            />
            <Input
              label="Descrição da empresa"
              type="textarea"
              set={setDescription}
              value={description}
            />
          </div>
          <div className="w-full">
            <Button text="Continuar" type="submit" color="purple" />
          </div>
        </form>
      </div>
    </div>
  );
}
