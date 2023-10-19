import AxiosInstance from "../../connection";
import arrowBack from "../../assets/icons/arrowBack.svg";
import { useEffect, useState } from "react";
import building from "../../assets/building.svg";
import { getItem } from "../../utils/storage";
import plusIcon from "../../assets/icons/plus.svg";
import editBackground from "../../assets/icons/editBackground.svg";
import Input from "../input/input";
import Button from "../button/button";

export default function CompanyEdit() {
  const [name, setName] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [slogan, setSlogan] = useState("");
  const [description, setDescription] = useState("");
  const [logo, setLogo] = useState("");
  const [salary, setSalary] = useState("0");
  const [background, setBackground] = useState("");

  const getCompanyInfo = async () => {
    const {
      data: { company },
    } = await AxiosInstance.axiosPrivate.get(
      `/companyInfo/ceo/${getItem("company", true)}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    setName(company.name);
    setCnpj(company.cnpj);
    setSlogan(company.slogan);
    setDescription(company.description);
    setLogo(company.logo);
    setSalary(company.salary);
    setBackground(company.background);
  };

  async function updateCompanyInfo() {
    try {
      const response = await AxiosInstance.axiosPrivate.put(
        `/updateCompany/ceo/${getItem("company", true)}`,
        {
          name,
          cnpj,
          slogan,
          description,
          logo,
          salary,
          background,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      console.log(response);
    } catch (error: any) {
      console.log(error);
    }
  }

  const handleChangeImg = async (
    e: React.ChangeEvent<HTMLInputElement>,
    img: string
  ) => {
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
      if (img === "background") return setBackground(Location);
      setLogo(Location);
    }
  };

  useEffect(() => {
    getCompanyInfo();
  }, []);
  return (
    <div className="w-screen h-screen flex flex-col  items-center">
      <header className="bg-purpleDark w-full h-1/5 flex items-center rounded-b-3xl text-white p-4 gap-3">
        <img
          src={arrowBack}
          alt=""
          onClick={() => {
            window.history.back();
          }}
        />
        <h2 className="text-title">Editar empresa</h2>
      </header>
      <h2 className="w-full text-subTitle2 text-center">
        Informações da empresa
      </h2>
      <div className="w-full h-4/5 flex flex-col p-4">
        <div className="w-full h-[30%] relative">
          <div className="w-full h-full bg-purpleDark rounded-3xl flex items-center justify-center">
            <img
              className="w-full h-full rounded-3xl flex items-center justify-center"
              src={background || building}
              alt={`background ${name}`}
              onClick={() => {
                document.getElementById("backgroundInput")?.click();
              }}
            />
          </div>
          <input
            type="file"
            accept="image/jpeg, image/png"
            id="backgroundInput"
            hidden
            onChange={(e) => handleChangeImg(e, "background")}
          />
          <img
            className="absolute -bottom-5 left-5 h-24 w-24  bg-white rounded-[100%] border-8 border-purpleDark"
            src={logo || building}
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
            onChange={(e) => handleChangeImg(e, "logo")}
          />
          <img
            className="absolute -bottom-5 left-20"
            src={plusIcon}
            alt="editIcon"
          />
          <img
            className="absolute top-5 right-5"
            src={editBackground}
            alt="editIcon"
          />
        </div>
        <div className="w-full h-full flex flex-col justify-around">
          <Input
            label="Nome da empresa"
            labelClassName=""
            type="text"
            set={setName}
            value={name}
          />
          <Input
            label="Slogan da empresa"
            labelClassName=""
            type="text"
            set={setSlogan}
            value={slogan}
          />
          <Input
            label="Descrição da empresa"
            labelClassName=""
            type="textarea"
            set={setDescription}
            value={description}
          />
          <Button
            onClick={updateCompanyInfo}
            text="Salvar alterações"
            type="submit"
            color="purple"
          />
        </div>
      </div>
    </div>
  );
}
