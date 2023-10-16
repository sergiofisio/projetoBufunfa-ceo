import { useState } from "react";
import DefaultHeader from "../../components/DefaultHeader/DeafultHeader";
import Button from "../../components/button/button";
import Input from "../../components/input/input";
import { Link, useNavigate } from "react-router-dom";
import { toastfy } from "../../hooks/toasfy";
import axiosPrivate from "../../connection";
import { setItem } from "../../utils/storage";

const Login = () => {
  const navigagte = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [stayConnected, setStayConnected] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    e.stopPropagation();

    try {
      if (!email || !password) {
        throw new Error("Preencha todos os campos!");
      }
      const login = await axiosPrivate.post("/login/ceo", {
        email,
        password,
      });

      toastfy("Bem vindo!", "toast-error", 3000);
      setTimeout(() => {
        navigagte("/home");
      }, 4000);

      console.log(login);

      if (stayConnected) {
        setItem("name", login.data.user.name, true);
        return setItem("token", login.data.token, true);
      }

      setItem("name", login.data.name);
      setItem("token", login.data.token);
    } catch (error: any) {
      if (error.response?.status === 403)
        return toastfy(error.response.data.error, "toast-error", 3000);

      toastfy(error.message, "toast-error", 3000);
    }
  }

  return (
    <div className={`w-full min-h-full  flex flex-col justify-evenly`}>
      <DefaultHeader />
      <div className={`w-full flex flex-col`}>
        <form
          onSubmit={handleSubmit}
          className={`flex flex-col justify-around items-center gap-6 px-8`}
        >
          <div className="w-full flex flex-col items-center justify-center gap-4">
            <Input label="Email" type="text" set={setEmail} value={email} />
            <Input
              label="Senha"
              type="password"
              set={setPassword}
              value={password}
            />
            <Link to={"/"} className={`text-white text-xs underline`}>
              Esqueci a minha senha
            </Link>
          </div>
          <div
            onClick={(e) => setStayConnected(!stayConnected)}
            className={`w-full flex items-center cursor-pointer`}
          >
            <input
              type="checkbox"
              className={`h-7 w-7 border-2 border-white rounded-3xl cursor-pointer`}
              onChange={(e) => setStayConnected(e.target.checked)}
              checked={stayConnected}
            />
            <label className={`text-white ml-2`}>Me manter conectado</label>
          </div>
          <div className={`w-full flex flex-col gap-5  justify-center`}>
            <Button type={`submit`} color="gold" text="Fazer Login" />
            <Link
              className={`w-full flex text-center justify-center text-white`}
              to={"/"}
            >
              Criar conta
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
