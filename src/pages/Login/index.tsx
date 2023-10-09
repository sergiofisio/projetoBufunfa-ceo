import DefaultHeader from "../../components/DefaultHeader/DeafultHeader";
import Button from "../../components/button/button";
import Input from "../../components/input/input";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className={`w-360 h-screen bg-purpleLight flex flex-col`}>
      <DefaultHeader />
      <div className={`w-[22.5rem] h-full rounded-t-[40px] bg-purple`}>
        <h1 className={`w-full text-center text-2xl text-white mt-8`}>
          Bem vindo de volta!
        </h1>
        <form className={`flex flex-col px-8 pt-7 gap-6`}>
          <Input label={`Email`} />
          <Input label={`Senha`} />
          <Link to={"/"} className={`text-white pl-5`}>
            Esqueci a minha senha
          </Link>
          <div className={`h-8 flex items-center`}>
            <input
              type="checkbox"
              className={`h-7 w-7 bg-purple appearance-none border-2 border-white`}
            />
            <p className={`text-white ml-2`}>Me manter conectado</p>
          </div>
          <Button type={`submit`} color="gold" text="Fazer Login" />
        </form>
      </div>
    </div>
  );
};

export default Login;
