import { useEffect, useState } from "react";
import AxiosInstance from "../../connection";
import Company from "./../../components/company/company";
import plus from "../../assets/icons/plus.svg";
import { useNavigate } from "react-router-dom";
import { clear, setItem } from "../../utils/storage";
import logout from "../../assets/icons/logout.svg";
import { toastfy } from "../../hooks/toasfy";
import { PulseLoader } from "react-spinners";
import edit from "../../assets/icons/edit.svg";
import ModalEditUser from "../../components/modal/modal.edit.user";

export default function Home({ init }: { init: boolean }) {
  const navigate = useNavigate();
  const [companiesList, setCompaniesList] = useState([]);
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    cpf: "",
    password: "" || null,
    photo: "",
  });
  const [modalEdit, setModalEdit] = useState(false);

  async function getUserInfo() {
    const {
      data: {
        ceo: { cpf, email, name, photo, companies },
      },
    } = await AxiosInstance.axiosPrivate.get("/userInfo/ceo", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    setUserInfo({ name, email, cpf, photo, password: null });
    if (photo) setItem("photo", photo);
    setCompaniesList(companies);
  }

  async function handleLogout(e: any) {
    e.preventDefault();
    e.stopPropagation();
    await clear();
    toastfy("success", "Até logo!", "toast-success", 3000);
    setTimeout(() => {
      return navigate("/");
    }, 3000);
  }

  useEffect(() => {
    if (init) getUserInfo();
  }, [init, modalEdit]);

  return (
    <div className="w-full min-h-[90%] bg-gradient-to-t from-purpleDark from-1% via-white via-10% to-white to-90% flex flex-col items-center">
      <div className="flex items-center justify-center w-full h-32 rounded-b-3xl bg-purpleDark relative">
        <h2 className="text-title text-white">
          Olá,
          <span className="text-gold">
            {` ${localStorage.getItem("name")?.split(" ")[0] || ""}`}
          </span>
          !
        </h2>
        <div className="absolute top-2 flex justify-between items-center w-full px-2">
          <div
            onClick={() => setModalEdit(true)}
            className="flex flex-col items-center gap-1"
          >
            <img className="w-5 h-5" src={edit} alt="" />
            <h2 className="text-white">Editar</h2>
          </div>
          <div
            className="flex flex-col items-center gap-1"
            onClick={handleLogout}
          >
            <img className="w-5 h-5" src={logout} alt="" />
            <h2 className="text-white">Sair</h2>
          </div>
        </div>
      </div>
      {!init || companiesList.length <= 0 ? (
        <div className="w-full min-h-full flex flex-col items-center justify-center">
          <PulseLoader color="#240046" />
          <h2 className="text-purpleDark text-subTitle">Carregando</h2>
        </div>
      ) : (
        <div className="w-full bg-white pt-7 h-full">
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
      )}
      {modalEdit && (
        <ModalEditUser userInfo={userInfo} setUser={setModalEdit} />
      )}
    </div>
  );
}
