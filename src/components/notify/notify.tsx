import { useEffect, useState } from "react";
import userImg from "../../assets/user.svg";

export default function Notify({
  employees,
  notify,
}: {
  employees: any;
  notify: any;
}) {
  const [employeeInfo, setEmployeeInfo] = useState<any>([]);

  useEffect(() => {
    const { employee } = employees.find(
      (employee: any) => employee.employee.id === notify.employeeId
    );
    setEmployeeInfo(employee);
  }, []);

  return (
    <div className="w-full h-full border-2 border-solid border-purpleDark rounded-xl p-2 flex flex-col relative">
      {!notify.seen && (
        <h2 className="text-subTitle2 text-red-600 absolute top-3 right-3">
          Nova
        </h2>
      )}
      {employeeInfo ? (
        <>
          <div
            className="flex items-center w-full h-full gap-5"
            onClick={() => {
              console.log(notify);
            }}
          >
            <img
              className="w-12 h-12 rounded-[100%]"
              src={employeeInfo.photo || userImg}
              alt=""
            />
            <h2 className="text-subTitle2">{employeeInfo.name}</h2>
          </div>
          <h2 className="text-subTitle2 text-goldDark text-center">
            Solicitado{" "}
            {notify.table === "loan" ? "empréstimo" : "validação de tarefa"}
          </h2>
        </>
      ) : (
        ""
      )}
    </div>
  );
}
