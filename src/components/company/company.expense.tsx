import imgExpense from "../../assets/icons/money.svg";
import imgexpense2 from "../../assets/icons/cart.svg";
import plus from "../../assets/icons/plus.svg";
import { HeaderCompany } from "../header/header";
import { useEffect, useState } from "react";
import Task from "../task/task";

export default function Expense({
  type,
  expenses,
}: {
  type?: string;
  expenses?: any;
}) {
  const [showModal, setShowModal] = useState(false);
  const [expensesFiltered, setExpensesFiltered] = useState([]);

  useEffect(() => {
    console.log(expenses);

    if (type === "required") {
      setExpensesFiltered(
        expenses.filter((expense: any) => expense.expense.type === "fixo")
      );
    } else {
      setExpensesFiltered(
        expenses.filter((expense: any) => expense.expense.type === "compra")
      );
    }
  }, []);

  return (
    <div className="w-full h-5/6">
      <HeaderCompany
        img={type === "required" ? imgExpense : imgexpense2}
        text={type === "required" ? "Gastos obrigatórios" : "Lista de compras"}
      />
      <div className="w-full max-h-[85%] overflow-y-scroll scrollbar-thin scrollbar-thumb-purpleDark">
        <div className="p-4 flex flex-col gap-4">
          <div
            className="flex items-center justify-center border-2 border-purpleDark border-solid rounded-3xl w-full h-10 gap-3 "
            onClick={() => {}}
          >
            <img className="w-5" src={plus} alt="plus icon" />
            <h2
              onClick={() => {
                setShowModal(true);
              }}
              className="text-subTitle2"
            >
              Novo gasto obrigatório
            </h2>
          </div>
        </div>
        {expensesFiltered.length
          ? expensesFiltered.map(({ expense }: any, key: number) => {
              return (
                <div key={key}>
                  <Task
                    id={expense.id}
                    title={expense.title}
                    description={expense.description}
                    value={expense.value}
                    classname={key % 2 === 0 ? "" : "bg-[#E9E9EA]"}
                    setShowModal={setShowModal}
                    setShowModalDelete={expense}
                  />
                </div>
              );
            })
          : ""}
      </div>
    </div>
  );
}
