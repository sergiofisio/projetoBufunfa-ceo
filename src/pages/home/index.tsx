import { useEffect, useState } from "react";
import AxiosInstance from "../../connection";
import Company from "./../../components/company/company";
import plus from "../../assets/icons/plus.svg";
import { useNavigate } from "react-router-dom";
import { setItem } from "../../utils/storage";

export default function Home() {
  const navigate = useNavigate();
  const [companiesList, setCompaniesList] = useState([]);

  async function getUserInfo() {
    const {
      data: {
        ceo: { companies },
      },
    } = await AxiosInstance.axiosPrivate.get("/userInfo/ceo", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

    setCompaniesList(companies);
  }

  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <div className="w-full h-[90%] bg-gradient-to-t from-purpleDark from-1% via-white via-10% to-white to-90%">
      <div className="flex items-center justify-center w-full h-32 rounded-b-3xl bg-purpleDark ">
        <h2 className="text-title text-white">
          Olá,
          <span className="text-gold">
            {` ${localStorage.getItem("name")?.split(" ")[0] || ""}`}
          </span>
          !
        </h2>
      </div>
      <div className="w-full bg-white pt-7">
        <h1 className="w-full text-2xl text-center">Selecione uma empresa</h1>
        <div className="flex flex-wrap justify-around py-4 gap-2 overflow-y-scroll scrollbar-thin scrollbar-thumb-purpleDark w-full max-h-[calc(100vh-12rem)]">
          {companiesList.length
            ? companiesList.map(({ company }: any, key) => {
                return (
                  <div
                    className="w-40 h-40 cursor-pointer rounded-3xl "
                    key={key}
                    onClick={() => {
                      navigate("/info");
                      setItem("company", company.id);
                    }}
                  >
                    <Company company={company} classNameH2={true} />
                  </div>
                );
              })
            : ""}
          <div
            onClick={() => {
              navigate("/newCompany");
            }}
            className="w-40 h-40 flex flex-wrap rounded-3xl cursor-pointer"
          >
            <Company
              classname="bg-purpleDark p-5"
              img={plus}
              name="Criar empresa"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
