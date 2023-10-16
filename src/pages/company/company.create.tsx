import { useState } from "react";
import camera from "../../assets/icons/camera.svg";
import Input from "./../../components/input/input";
import Button from "../../components/button/button";
import { toastfy } from "../../hooks/toasfy";
import { NumberFormatValues, NumericFormat } from "react-number-format";
import plus from "../../assets/icons/plus.svg";
import minus from "../../assets/icons/minus.svg";
import axiosPrivate from "../../connection";

export default function CompanyCreate() {
  const [step, setStep] = useState(1);
  const [name, setName] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [slogan, setSlogan] = useState("");
  const [description, setDescription] = useState("");
  const [logo, setLogo] = useState("");
  const [salary, setSalary] = useState("0");
  const [background, setBackground] = useState("");

  const handleClickBack = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (step === 1) {
      setStep(step - 1);
      return window.history.back();
    }
    setStep(step - 1);
  };

  const handleChangeStep = async (e: React.MouseEvent, step: Number) => {
    e.preventDefault();
    e.stopPropagation();

    try {
      if (step === 1) {
        if (!name || !cnpj) {
          throw new Error("Os campos nome e cnpj são obrigatórios");
        }

        return setStep(2);
      }

      const salaryFormatted: any = Number(salary).toFixed(2);
      const salaryCents = salaryFormatted * 100;

      const response = await axiosPrivate.post(
        "/createCompany/ceo",
        {
          name,
          cnpj,
          slogan,
          description,
          logo,
          salary: salaryCents,
          background,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setStep(Number(step) - 1);

      toastfy("success", response.data.mensagem, "text-purple", 3000);
      setTimeout(() => {
        window.history.back();
      }, 3000);
    } catch (error: any) {
      setStep(Number(step) - 1);

      if (error.response?.data?.error) {
        toastfy("error", error.response.data.error, "text-red", 3000);
        setTimeout(() => {
          window.history.back();
        }, 3000);
        return;
      }

      toastfy("error", error.message, "text-red", 3000);
      setTimeout(() => {
        window.history.back();
      }, 3000);
    }
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
      <div className="flex items-center w-full h-32 rounded-b-3xl bg-purpleDark px-4">
        <h2 onClick={(e) => handleClickBack(e)} className="text-7xl text-white">
          {"<"}
        </h2>
        <h2 className="text-title text-white w-full text-center">
          Nova empresa
        </h2>
      </div>
      <div className="flex flex-col items-center justify-center p-4 w-full h-[calc(100vh-8rem)] gap-5">
        <h2 className="text-subTitle2">
          {step === 1 ? "Informações da empresa" : "Ajustando o salário"}
        </h2>
        <div className="flex items-center justify-center w-full relative">
          {step === 1 ? (
            <>
              <label
                htmlFor="background"
                className={`w-full h-36 flex flex-col items-center justify-center rounded-3xl bg-purpleDark cursor-pointer`}
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
                className="absolute -bottom-5 left-8 bg-purpleDark border-gold border-solid border-2 rounded-[100%] w-20 h-20 flex items-center justify-center cursor-pointer z-10"
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
            </>
          ) : (
            <>
              <div className="flex flex-col items-center">
                <NumericFormat
                  className="outline-none text-center text-4xl text-gold bg-white max-w-full border-white"
                  value={salary}
                  thousandSeparator="."
                  decimalSeparator=","
                  decimalScale={2}
                  fixedDecimalScale
                  allowNegative={false}
                  onValueChange={(values: NumberFormatValues) =>
                    setSalary(values.floatValue?.toString() || "")
                  }
                  placeholder="$0,00"
                  defaultValue="0,00"
                />
              </div>
            </>
          )}
        </div>
        <form className="flex flex-col items-center justify-between w-full h-full py-4 gap-6">
          <div className="w-full h-full flex flex-col justify-center gap-4">
            {step === 1 ? (
              <>
                <Input
                  label="Nome da empresa"
                  labelClassName="text-black"
                  type="text"
                  set={setName}
                  value={name}
                  required={true}
                />
                <Input
                  label="CNPJ da empresa"
                  labelClassName="text-black"
                  type="text"
                  set={setCnpj}
                  value={cnpj}
                  required={false}
                />
                <Input
                  label="Slogan da empresa"
                  labelClassName="text-black"
                  type="text"
                  set={setSlogan}
                  value={slogan}
                  required={false}
                />
                <Input
                  label="Descrição da empresa"
                  labelClassName="text-black"
                  type="textarea"
                  set={setDescription}
                  value={description}
                />
              </>
            ) : (
              <>
                <div className="flex flex-col item-center justify-around h-full">
                  <div className="flex items-center justify-around">
                    <div
                      onClick={() => {
                        setSalary((Number(salary) - 10).toString());
                      }}
                      className="flex flex-col items-center justify-center"
                    >
                      <img
                        className="flex w-14 h-14 bg-purpleDark  rounded-[100%] p-2"
                        src={minus}
                        alt="icon plus"
                      />
                      -10
                    </div>
                    <div
                      onClick={() => {
                        setSalary((Number(salary) + 10).toString());
                      }}
                      className="flex flex-col items-center justify-center"
                    >
                      <img
                        className="w-14 h-14 bg-purpleDark flex p-2 rounded-[100%]"
                        src={plus}
                        alt="icon plus"
                      />
                      +10
                    </div>
                  </div>
                  <div className="flex flex-col bg-purpleDark text-white rounded-3xl p-3 gap-4">
                    <h1 className="text-subTitle text-center">Observação</h1>
                    <p className="text-textBody">
                      O salário inserido será enviado para todos os funcionários
                      da empresa que cumprirem com as tarefas corretamente, ao
                      fim de cada mês.
                    </p>
                    <p className="text-textBody">
                      Ele poderá ser alterado posteriormente.
                    </p>
                  </div>
                </div>
              </>
            )}
          </div>
          <div className="w-full">
            <Button
              onClick={(e) => handleChangeStep(e, step)}
              text="Continuar"
              type={step === 1 ? "button" : "submit"}
              color="purple"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
