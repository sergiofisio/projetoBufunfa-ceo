import { Link, useNavigate } from "react-router-dom";
import DefaultHeader from "../../components/DefaultHeader/DeafultHeader";
import Button from "../../components/button/button";
import Input from "../../components/input/input";
import { useState } from "react";
import { toastfy } from "../../hooks/toasfy";
import axios from "axios";
import axiosPrivate from "../../connection";

const Signup = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cpfCnpj, setCpfCnpj] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();

    try {
      if (!name || !email || !cpfCnpj || !password || !confirmPassword) {
        throw new Error("Preencha todos os campos!");
      }

      const regexCpf = /^\d+.\d+.\d-\d$/;
      const cpfElement = document.getElementById("cpfCnpj") as HTMLInputElement;

      if (regexCpf.test(cpfCnpj)) {
        cpfElement.textContent = "Formato válido!";
      } else {
        cpfElement.textContent = "Formato inválido!";
      }

      if (password !== confirmPassword) {
        throw new Error("As senhas não coincidem!");
      }

      const signup = await axiosPrivate.post("/register/ceo", {
        name,
        email,
        cpf: cpfCnpj,
        password,
      });

      toastfy("success", "Conta criada!", "text-purple", 3000);

      setTimeout(() => {
        navigate("/");
      }, 4000);
    } catch (error: any) {
      if (error.response?.status === 400)
        return toastfy("error", error.response.data.error, "toast-error", 3000);

      toastfy("error", error.message, "text-red", 3000);
    }
  };
  return (
    <div className="w-full min-h-full  flex flex-col justify-evenly bg-purpleDark">
      <DefaultHeader />
      <div className="w-full flex flex-col">
        <form className="flex flex-col justify-around items-center gap-6 px-8">
          <div className="w-full flex flex-col  gap-8 max-h-[340px] overflow-auto">
            <Input
              set={setName}
              value={name}
              type="text"
              label={"Nome completo"}
              labelClassName={"text-white"}
            />
            <Input
              type="text"
              set={setEmail}
              value={email}
              label={"Email"}
              labelClassName={"text-white"}
            />
            <Input
              value={cpfCnpj}
              set={setCpfCnpj}
              mask="999.999.999-99"
              type="text"
              label={"CPF/CNPJ"}
              labelClassName={"text-white"}
              id={"cpfCnpj"}
            />
            <Input
              value={password}
              set={setPassword}
              type="password"
              label={"Senha"}
              labelClassName={"text-white"}
            />
            <Input
              value={confirmPassword}
              set={setConfirmPassword}
              type="password"
              label={"Confirmar senha"}
              labelClassName={"text-white"}
            />
          </div>
          <Button text={"Criar conta"} type={"submit"} color="gold" />
          <Link to={"/"} className="text-white text-xs underline">
            Já possuo uma conta
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Signup;
