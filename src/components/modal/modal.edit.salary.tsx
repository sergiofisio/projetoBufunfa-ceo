import { useState } from "react";
import { NumberFormatValues, NumericFormat } from "react-number-format";
import minus from "../../assets/icons/minus.svg";
import plus from "../../assets/icons/plus.svg";

export default function ModalEditSalary({
  setShowModalEdit,
  value,
}: {
  setShowModalEdit: any;
  value: string | number;
}) {
  const [salary, setSalary] = useState(Number(value) / 100);
  console.log(salary);

  return (
    <div className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.5)] flex items-center justify-center z-10">
      <div className="bg-purpleDark w-80 h-60 rounded-2xl relative flex flex-col justify-evenly px-6 text-white">
        <h2
          onClick={() => setShowModalEdit("")}
          className="bg-gold rounded-[100%] absolute top-2 right-2 w-4 h-4 font-bold flex items-center justify-center"
        >
          X
        </h2>
        <div className=" w-full h-full flex items-center justify-center">
          <div className="w-full h-full flex flex-col items-center justify-center">
            <label className="text-white text-subTitle2">Novo Salario</label>
            <NumericFormat
              className="outline-none text-center text-4xl text-gold bg-white w-1/2 border-white rounded-xl px-2 py-4"
              value={salary}
              thousandSeparator="."
              decimalSeparator=","
              decimalScale={2}
              fixedDecimalScale
              allowNegative={false}
              onValueChange={(values: NumberFormatValues) =>
                setSalary(values.floatValue || 0)
              }
              placeholder="$0,00"
              defaultValue="0,00"
            />
            <div className="flex justify-around items-center gap-4 w-full">
              <div
                className="flex flex-col items-center"
                onClick={() => {
                  if (Number(salary) - 10 <= 0) return;
                  setSalary(Number(salary) - 10);
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
                  setSalary(Number(salary) + 10);
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
        </div>
      </div>
    </div>
  );
}
