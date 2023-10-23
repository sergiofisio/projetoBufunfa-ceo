import DefaultHeader from "../../components/DefaultHeader/DeafultHeader";
import arrowBack from "../../assets/icons/arrowBack.svg";
import Input from "../../components/input/input";
import { useState } from "react";
import Button from "../../components/button/button";
import axiosInstance from "../../connection";
import { toastfy } from "../../hooks/toasfy";

const RecoveryPassword = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();

    try {
      if (!email) throw new Error("Informe seu e-mail!");

      await axiosInstance.axiosPrivate.post("/recovery", { email });

      toastfy("success", "Código enviado com sucesso", "text-purple", 3000);
    } catch (error: any) {
      if (error.response?.status === 400)
        return toastfy("error", error.response.data.message, "text-red", 3000);

      toastfy("error", error.message, "text-red", 3000);
    }
  };

  return (
    <div className="w-full min-h-full  flex flex-col items-center justify-evenly bg-purpleDark">
      <DefaultHeader />
      <div className="flex relative justify-center">
        <img
          className="cursor-pointer"
          src={arrowBack}
          alt="Botão para voltar a página anterior"
        />
        <h1 className="text-white text-2xl pl-3">Recuperação de senha</h1>
      </div>
      <p className="text-white text-xl w-4/5">
        Ah não! Você perdeu sua senha? Fique tranquilo, nós vamos te ajudar!
        <br /> <br /> <br /> Por favor informe seu e-mail cadastrado para que
        possamos enviar um link para você modificar sua senha.
      </p>
      <form className="flex flex-col gap-20" onSubmit={handleSubmit}>
        <Input
          label="Email"
          type="email"
          set={setEmail}
          value={email}
          required={true}
          labelClassName="text-white"
        />
        <Button text="Enviar código" color="gold" type="submit" />
      </form>
    </div>
  );
};
export default RecoveryPassword;
