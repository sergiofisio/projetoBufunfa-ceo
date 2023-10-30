import { useEffect, useState } from "react";
import AxiosInstance from "../../connection";
import { getItem } from "../../utils/storage";
import { PulseLoader } from "react-spinners";
import userImg from "../../assets/user.svg";
import coin from "../../assets/icons/coin.svg";

export default function ModalAccept({
  notify,
  setShowModal,
}: {
  notify: any;
  setShowModal: any;
}) {
  const [infoNotify, setInfoNotify] = useState<any>(null);
  const [employeeInfo, setEmployeeInfo] = useState<any>(null);
  const [salary, setSalary] = useState(0);

  async function getInfo() {
    console.log(notify);

    try {
      const {
        data: { info },
      } = await AxiosInstance.axiosPrivate.get(
        `/functionInfo/ceo/${notify.table}/${notify.tableId}`,
        {
          headers: {
            Authorization: `Bearer ${await getItem("token")}`,
          },
        }
      );

      const {
        data: { employeeInfo },
      } = await AxiosInstance.axiosPrivate.get(
        `/employeeInfo/ceo/${notify.employeeId}`,
        {
          headers: {
            Authorization: `Bearer ${await getItem("token")}`,
          },
        }
      );

      setInfoNotify(info);
      setEmployeeInfo(employeeInfo);
    } catch (error: any) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (employeeInfo) {
      employeeInfo.company.find((e: any) => {
        if (e.companyId === notify.companyId) {
          console.log(e);

          setSalary(e.salary);
        }
      });
    }
    if (!infoNotify) {
      getInfo();
    }
  }, [infoNotify]);
  return (
    <div className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.5)] flex items-center justify-center">
      <div className="bg-purpleDark w-11/12 h-5/6 rounded-2xl relative flex flex-col justify-evenly px-6">
        <h2
          onClick={() => setShowModal(false)}
          className="bg-gold rounded-[100%] absolute top-4 right-4 w-4 h-4 font-bold flex items-center justify-center"
        >
          x
        </h2>
        {!infoNotify ? (
          <>
            <div>
              <PulseLoader color="white" />
              <h2 className="text-white text-subTitle">Carregando</h2>
            </div>
          </>
        ) : (
          <div className="h-full w-full flex flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-center w-full h-full gap-6">
              <div className="flex flex-col items-center justify-center">
                <img
                  className="w-20 h-20 rounded-[100%] bg-white border-2 border-solid border-goldDark"
                  src={employeeInfo.photo || userImg}
                  alt=""
                />
                <h2 className="text-white text-subTitle">
                  {employeeInfo.name}
                </h2>
              </div>
              <div className="flex items-center justify-center gap-2">
                <img src={coin} alt="" />{" "}
                <h2 className="text-gold text-subTitle2">
                  {(Number(salary) / 100).toLocaleString("pt-BR", {
                    style: "decimal",
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </h2>
              </div>
              <div className="w-full h-64 bg-white rounded-3xl"></div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
