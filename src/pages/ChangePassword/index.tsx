import { useState } from "react";
import DefaultHeader from "../../components/DefaultHeader/DeafultHeader";
import Input from "../../components/input/input";
import Button from "../../components/button/button";

const ChangePassword = () => {
  const [novaSenha, setNovaSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();

    try {
      if (!novaSenha || !confirmarSenha) {
        throw new Error("Preencha todos os campos");
      }

      if (novaSenha !== confirmarSenha) {
        throw new Error("As senhas não coincidem");
      }
    } catch (error) {}
  };

  return (
    <div className="w-full min-h-full  flex flex-col items-center justify-evenly bg-purpleDark">
      <DefaultHeader />
      <form className="px-8 relative flex flex-col gap-6">
        <h1 className="text-white text-2xl">Recuperação de senha</h1>
        <p className="text-white text-xl w-4/5">
          Agora é só alterar sua senha e recuperar sua conta!
        </p>
        <div className="flex flex-col gap-3">
          <Input
            label="Nova senha"
            type="password"
            labelClassName="text-white"
            set={setNovaSenha}
            value={novaSenha}
            required={true}
          />
          <Input
            label="Confirmar senha"
            type="password"
            labelClassName="text-white"
            set={setConfirmarSenha}
            value={confirmarSenha}
            required={true}
          />
        </div>
        <div className="flex flex-col mt-10 s gap-3 relative bottom-[-2rem]">
          <Button type="submit" color="gold" text="Alterar senha" />
          <Button type="button" color="purple" text="Cancelar" />
        </div>
      </form>
    </div>
  );
};

export default ChangePassword;
