import DefaultHeader from "../../components/DefaultHeader/DeafultHeader";
import Button from "../../components/button/button";
import Input from "../../components/input/input";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className={`w-screen h-screen bg-purple flex flex-col`}>
      <DefaultHeader />
      <div className={`w-full h-full`}>
        <form className={`flex flex-col h-full px-8 pt-7 gap-6`}>
          <Input label={`Email`} />
          <Input label={`Senha`} />
          <Link to={"/"} className={`text-white pl-5`}>
            Esqueci a minha senha
          </Link>
          <div className={`h-8 flex items-center`}>
            <input
              type="checkbox"
              className={`h-7 w-7 accent-purple  border-2 border-white`}
            />
            <p className={`text-white ml-2`}>Me manter conectado</p>
          </div>
          <div className={`flex flex-col gap-5 h-full justify-center`}>
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
