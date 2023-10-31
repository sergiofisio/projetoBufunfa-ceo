import { useState } from "react";
import AxiosInstance from "../../connection";
import { getItem } from "../../utils/storage";
import plusIcon from "../../assets/icons/plus.svg";
import userImg from "../../assets/user.svg";
import Input from "../input/input";
import Button from "../button/button";
import { toastfy } from "../../hooks/toasfy";

export default function ModalEditUser({
  userInfo,
  setUser,
}: {
  userInfo: any;
  setUser: any;
}) {
  const [name, setName] = useState(userInfo.name);
  const [email, setEmail] = useState(userInfo.email);
  const [cpf, setCpf] = useState(userInfo.cpf);
  const [password, setPassword] = useState(userInfo.password || "");
  const [confPassword, setConfPassword] = useState("");
  const [photo, setPhoto] = useState(userInfo.photo);
  console.log({ userInfo });

  const handleChangeImg = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      return;
    } else {
      const file = e.target.files[0];
      const formData = new FormData();
      formData.append("image", file);
      const {
        data: {
          fileUpload: { Location },
        },
      } = await AxiosInstance.axiosPrivate.post(`/upload/ceo`, formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "multipart/form-data",
        },
      });
      setPhoto(Location);
    }
  };

  async function handleUpdateUser(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    e.stopPropagation();
    try {
      const data = {
        name,
        email,
        cpf,
        photo,
        password,
      };
      if (!password) {
        delete data.password;
      }

      const {
        data: { mensagem },
      } = await AxiosInstance.axiosPrivate.put("/updateUser/ceo", data, {
        headers: {
          Authorization: `Bearer ${await getItem("token")}`,
        },
      });
      toastfy("success", mensagem, "text-purple", 3000);
      setTimeout(() => {
        setUser("");
      }, 3000);
    } catch (error: any) {
      if (error.response.data.error)
        toastfy("error", error.response.data.error, "text-red", 3000);
    }
  }

  return (
    <div className="absolute top-0 left-0 w-full h-full bg-purpleDark flex flex-col items-center justify-center z-10">
      <header className="flex items-center justify-center w-full min-h-[20%] bg-purpleDark p-7 gap-6 relative">
        <img
          className="h-24 w-24 bg-white rounded-[100%] border-8 border-purpleDark"
          src={photo || userImg}
          alt={`logo ${name}`}
          onClick={() => {
            document.getElementById("logoInput")?.click();
          }}
        />
        <input
          type="file"
          accept="image/jpeg, image/png"
          id="logoInput"
          hidden
          onChange={(e) => handleChangeImg(e)}
        />
        <img
          className="absolute bottom-5 left-1/2"
          src={plusIcon}
          alt="editIcon"
        />
        <h2
          onClick={() => setUser("")}
          className="bg-gold rounded-[100%] absolute top-2 right-2 w-6 h-6 font-bold flex items-center justify-center text-subTitle2"
        >
          X
        </h2>
      </header>
      <div className="w-full h-full flex flex-col justify-evenly p-4">
        <div className="flex flex-col items-center justify-center gap-2">
          <Input
            label="Nome"
            labelClassName="text-white"
            placeholder="Nome"
            type="text"
            set={setName}
            value={name}
            required={true}
          />
          <Input
            label="Email"
            labelClassName="text-white"
            placeholder="Email"
            type="email"
            set={setEmail}
            value={email}
            required={true}
          />
          <Input
            label="CPF"
            labelClassName="text-white"
            placeholder="CPF"
            type="text"
            set={setCpf}
            value={cpf}
            required={true}
            mask="999.999.999-99"
          />
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
          <h2 className="text-white">Preencha, se deseja mudar a senha?</h2>
          <Input
            label="Senha"
            labelClassName="text-white"
            placeholder="Senha"
            type="password"
            set={setPassword}
            value={password}
          />
          <Input
            label="Confirmar senha"
            labelClassName="text-white"
            placeholder="Confirmar senha"
            type="password"
            set={setConfPassword}
            value={confPassword}
          />
        </div>
        <Button
          text="Salvar alterações"
          type="submit"
          color="gold"
          onClick={(e) => handleUpdateUser(e)}
        />
      </div>
    </div>
  );
}
