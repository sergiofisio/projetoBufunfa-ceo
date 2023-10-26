import imgExpense from "../../assets/icons/money.svg";
import imgexpense2 from "../../assets/icons/cart.svg";
import plus from "../../assets/icons/plus.svg";
import { HeaderCompany } from "../header/header";
import { useEffect, useState } from "react";
import ExpensesFunctions from "../expense/expenses.functions";
import ExpenseInfo from "../../components/expense/expense";
import ShopItemInfo from "../expense/shop";
import ModalDeleteExpense from "../expense/modal.delete.expense";

export default function ExpenseCompany({
  type,
  expenses,
}: {
  type?: string;
  expenses?: any;
}) {
  const [showModal, setShowModal] = useState(false);
  const [showModalDelete, setShowModalDelete] = useState("");
  const [expensesFiltered, setExpensesFiltered] = useState([]);

  useEffect(() => {
    if (expenses.length === 0) {
      return setExpensesFiltered([]);
    }
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
              {type === "required"
                ? "Novo gasto obrigatório"
                : "Novo produto/serviço"}
            </h2>
          </div>
        </div>
        <div className={`flex flex-wrap justify-center w-full gap-4`}>
          {type === "required"
            ? expensesFiltered.length
              ? expensesFiltered.map(({ expense }: any, key: number) => {
                  return (
                    <div key={key} className="w-full">
                      <ExpenseInfo
                        id={expense.id}
                        title={expense.title}
                        description={expense.description}
                        date={expense.date}
                        value={expense.value}
                        classname={key % 2 === 0 ? "" : "bg-[#E9E9EA]"}
                        setShowModal={setShowModal}
                        setShowModalDelete={setShowModalDelete}
                      />
                    </div>
                  );
                })
              : ""
            : expensesFiltered.map(({ expense }: any, key: number) => {
                return (
                  <div key={key}>
                    <ShopItemInfo
                      expense={expense}
                      setShowModal={setShowModal}
                      setShowModalDelete={setShowModalDelete}
                    />
                  </div>
                );
              })}
        </div>
      </div>
      {showModal && (
        <ExpensesFunctions
          type={type}
          setShowModal={setShowModal}
          id={showModal}
        />
      )}
      {showModalDelete && (
        <ModalDeleteExpense
          setShowModalDelete={setShowModalDelete}
          id={showModalDelete}
        />
      )}
    </div>
  );
}
