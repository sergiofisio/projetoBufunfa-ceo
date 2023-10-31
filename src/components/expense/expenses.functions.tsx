import { useEffect, useState } from "react";
import Button from "../button/button";
import { NumberFormatValues, NumericFormat } from "react-number-format";
import AxiosInstance from "../../connection";
import Input from "../input/input";
import minus from "../../assets/icons/minus.svg";
import plus from "../../assets/icons/plus.svg";
import { getItem } from "../../utils/storage";
import { toastfy } from "../../hooks/toasfy";
import { PulseLoader } from "react-spinners";

export default function ExpensesFunctions({
  type,
  setShowModal,
  id,
}: {
  type: string | undefined;
  setShowModal: any;
  id?: number | boolean;
}) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [value, setValue] = useState(0);

  async function getExpenseInfo() {
    try {
      const {
        data: {
          info: { title, description, value, date },
        },
      } = await AxiosInstance.axiosPrivate.get(
        `/functionInfo/ceo/expense/${id}`,
        {
          headers: {
            Authorization: `Bearer ${await getItem("token")}`,
          },
        }
      );
      setTitle(title);
      setDescription(description);
      setValue(value / 100);
      setDueDate(String(date));
    } catch (error) {
      console.log(error);
    }
  }

  async function createExpense() {
    try {
      if (!title) throw new Error("O campo de título deve ser preenchido");
      if (!description)
        throw new Error("O campo de descrição deve ser preenchido");
      if (Number(value) <= 0)
        throw new Error("O campo de valor deve ser maior que 0");
      if (!dueDate && type === "required")
        throw new Error("O campo de data deve ser preenchido");
      const expenseType = type === "required" ? "fixo" : "compra";
      const response = await AxiosInstance.axiosPrivate.post(
        `/createExpense/ceo/${await getItem("company")}`,
        {
          title,
          description,
          value: value * 100,
          date: String(dueDate),
          type: expenseType,
        },
        {
          headers: {
            Authorization: `Bearer ${await getItem("token")}`,
          },
        }
      );
      toastfy("success", response.data.mensagem, "text-green", 3000);
    } catch (error: any) {
      toastfy("error", error.message, "text-red", 3000);
    }
  }
  async function updateExpense() {
    try {
      ("atualizar");
    } catch (error: any) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (typeof id === "number") {
      getExpenseInfo();
    }
  }, []);

  return (
    <div className="flex flex-col w-full h-full px-4 py-2 bg-purpleDark absolute top-0 left-0">
      <h2
        onClick={() => setShowModal(false)}
        className="bg-gold rounded-[100%] absolute top-3 right-3 w-4 h-4 font-bold flex items-center justify-center"
      >
        x
      </h2>
      <div className="min-h-[20%] w-full flex items-center justify-center">
        <h2 className="text-title text-white text-center">
          {type === "required"
            ? typeof id === "number"
              ? "Editar gasto obrigatório"
              : "Novo gasto obrigatório"
            : ""}
          {type === "shop"
            ? typeof id === "number"
              ? "Editar produto/serviço"
              : "Novo produto/serviço"
            : ""}
        </h2>
      </div>
      {!title && typeof id === "number" ? (
        <div>
          <PulseLoader color="white" />
          <h2 className="text-white text-subTitle">Carregando</h2>
        </div>
      ) : (
        <div className="h-full flex flex-col justify-evenly gap-4">
          <div className="flex flex-col gap-4">
            <Input
              label="Título"
              labelClassName="text-white"
              type="text"
              set={setTitle}
              value={title}
            />
            <Input
              label="Descrição"
              labelClassName="text-white"
              type="textarea"
              set={setDescription}
              value={description}
            />
          </div>
          <div className="flex flex-col items-center gap-4">
            {type === "required" ? (
              <>
                <label className="text-white text-subTitle2">
                  Dia de vencimento
                </label>
                <input
                  className="w-40 h-10 text-center p-2 text-title rounded-3xl"
                  type="number"
                  onChange={(e) => {
                    [
                      Number(e.target.value) <= 0
                        ? setDueDate("")
                        : setDueDate(e.target.value),
                    ];
                  }}
                  value={dueDate}
                />
              </>
            ) : (
              ""
            )}
            <label className="text-white text-subTitle2">
              {type === "required" ? "Valor" : "Preço do produto"}
            </label>
            <NumericFormat
              className="outline-none text-center text-4xl text-gold bg-white w-1/2 border-white rounded-xl px-2 py-4"
              value={value}
              thousandSeparator="."
              decimalSeparator=","
              decimalScale={2}
              fixedDecimalScale
              allowNegative={false}
              onValueChange={(values: NumberFormatValues) =>
                setValue(values.floatValue || 0)
              }
              placeholder="$0,00"
              defaultValue="0,00"
            />
            <div className="flex justify-around items-center gap-4 w-full">
              <div
                className="flex flex-col items-center"
                onClick={() => {
                  if (value <= 0) return;
                  setValue(Number(value) - 10);
                }}
              >
                <img
                  className="bg-white rounded-[100%] w-12 h-12 p-2"
                  src={minus}
                  alt="icon minus"
                />{" "}
                <h2 className="text-white">-10</h2>
              </div>
              <div
                className="flex flex-col items-center"
                onClick={() => {
                  setValue(Number(value) + 10);
                }}
              >
                <img
                  className="bg-white rounded-[100%] w-12 h-12 p-2"
                  src={plus}
                  alt="icon plus"
                />{" "}
                <h2 className="text-white">+10</h2>
              </div>
            </div>
          </div>
          <Button
            text={!id ? "Criar tarefa" : "Salvar alterações"}
            type="submit"
            color="gold"
            onClick={typeof id === "boolean" ? createExpense : updateExpense}
          />
        </div>
      )}
    </div>
  );
}
