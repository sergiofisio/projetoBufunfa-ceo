import { useState } from "react";
import Input from "../input/input";
import { NumberFormatValues, NumericFormat } from "react-number-format";
import minus from "../../assets/icons/minus.svg";
import plus from "../../assets/icons/plus.svg";

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

  return (
    <div className="flex flex-col w-full h-screen px-4 py-2 bg-purpleDark absolute top-0 left-0">
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
      <div className="h-full flex flex-col gap-4">
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
        <div className="flex flex-col items-center">
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
        </div>
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
            <h2>+10</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
