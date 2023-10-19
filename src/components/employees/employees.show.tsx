import peopleImg from "../../assets/icons/people.svg";
import Employee from "../employee/employee";
import { HeaderCompany } from "../header/header";
import userImg from "../../assets/user.svg";
import plus from "../../assets/icons/plus.svg";
import { useState } from "react";
import ModalDeleteEmployee from "../modal/modal.delete.employee";
import HireEmployee from "../modal/modal.hire.employee";

export default function EmployeesShow({ employees }: { employees: any }) {
  const [showModalDelete, setShowModalDelete] = useState("");
  const [showModalNewEmployee, setShowModalNewEmployee] = useState(false);

  return (
    <div className="w-full h-5/6">
      <HeaderCompany img={peopleImg} text="Lista  de Funcionários" />
      <div className="w-full h-[90%] overflow-y-scroll scrollbar-thin scrollbar-thumb-purpleDark">
        <div className="p-4">
          <div
            className="flex items-center justify-center border-2 border-purpleDark border-solid rounded-3xl w-full h-10 gap-3 "
            onClick={() => setShowModalNewEmployee(true)}
          >
            <img className="w-5" src={plus} alt="plus icon" />
            <h2 className="text-subTitle2">Contratar novo funcionário</h2>
          </div>
        </div>
        {employees.map(({ employee }: any, key: number) => {
          return (
            <div key={key}>
              <Employee
                id={employee.id}
                img={employee.photo || userImg}
                name={employee.name}
                classname={key % 2 === 0 ? "" : "bg-[#E9E9EA]"}
                setShowModalDelete={setShowModalDelete}
              />
            </div>
          );
        })}
      </div>
      {showModalDelete && (
        <ModalDeleteEmployee
          id={Number(showModalDelete)}
          setShowModalDelete={setShowModalDelete}
        />
      )}
      {showModalNewEmployee && (
        <HireEmployee setShowModalNewEmployee={setShowModalNewEmployee} />
      )}
    </div>
  );
}
