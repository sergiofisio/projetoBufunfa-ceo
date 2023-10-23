import { useEffect, useState } from "react";
import Input from "../input/input";
import { NumberFormatValues, NumericFormat } from "react-number-format";
import minus from "../../assets/icons/minus.svg";
import plus from "../../assets/icons/plus.svg";
import AxiosInstance from "../../connection";
import { getItem } from "../../utils/storage";
import Button from "../button/button";
import { toastfy } from "../../hooks/toasfy";

export default function TaskFunctions({
  setShowModal,
  id,
}: {
  setShowModal: any;
  id?: number | boolean;
}) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [value, setValue] = useState(0);

  async function getTaskInfo() {
    const {
      data: {
        task: { title, description, value },
      },
    } = await AxiosInstance.axiosPrivate.get(`/functionInfo/ceo/task/${id}`, {
      headers: {
        Authorization: `Bearer ${await getItem("token")}`,
      },
    });
    setTitle(title);
    setDescription(description);
    setValue(value / 100);
  }

  async function createTask() {
    try {
      if (!title || !description || value <= 0)
        throw new Error(
          "Preencha todos os campos! O valor de tarefa precisa ser maior que 0."
        );
      const response = await AxiosInstance.axiosPrivate.post(
        `/createTask/ceo/${await getItem("company")}`,
        {
          title,
          description,
          value: value * 100,
        },
        {
          headers: {
            Authorization: `Bearer ${await getItem("token")}`,
          },
        }
      );
      toastfy("success", response.data.mensagem, "text-green", 3000);
      console.log(response);
    } catch (error: any) {
      if (error.response.status === 401)
        return toastfy("error", error.response.data.mensagem, "text-red", 3000);
      toastfy("error", error.message, "text-red", 3000);
    }
  }
  async function updateTaskInfo() {
    try {
      if (!title || !description || value <= 0)
        throw new Error(
          "Preencha todos os campos! O valor de tarefa precisa ser maior que 0."
        );
      const response = await AxiosInstance.axiosPrivate.put(
        `/updateTask/ceo/${id}`,
        {
          title,
          description,
          value: value * 100,
        },
        {
          headers: {
            Authorization: `Bearer ${await getItem("token")}`,
          },
        }
      );
      toastfy("success", response.data.mensagem, "text-green", 3000);
      console.log(response);
    } catch (error: any) {
      toastfy("error", error.message, "text-red", 3000);
    }
  }

  useEffect(() => {
    if (typeof id === "number") {
      getTaskInfo();
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
      <div className="h-[20%] w-full flex items-center justify-center">
        <h2 className="text-title text-white">
          {typeof id === "number" ? "Editar tarefa" : "Nova tarefa"}
        </h2>
      </div>
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
          <label className="text-white text-subTitle2">Valor da tarefa</label>
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
          onClick={typeof id === "boolean" ? createTask : updateTaskInfo}
        />
      </div>
    </div>
  );
}
