import { useState } from "react";
import coinIcon from "../../assets/icons/coin.svg";
import gearWhite from "../../assets/icons/gearWhite.svg";
import format from "date-fns/format";

export default function ExpenseInfo({
  classname,
  id,
  title,
  description,
  date,
  value,
  setShowModal,
  setShowModalDelete,
}: {
  classname?: string;
  id?: number;
  title?: string;
  description?: string;
  date: string;
  value?: number;
  setShowModal?: any;
  setShowModalDelete?: any;
}) {
  function formatDate(date: string) {
    const today = new Date();
    const newDate = new Date(
      today.getFullYear(),
      today.getMonth(),
      Number(date)
    );
    return newDate.toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  }
  return (
    <div className={`flex justify-between w-full h-28 ${classname} px-4 py-2`}>
      <div className=" flex flex-col justify-evenly h-full w-full">
        <h2 className="text-subTitle2 text-purple">{title}</h2>
        <p className="text-textBody2">{description}</p>
        <div className="flex justify-between items-center gap-2 w-full pr-8">
          <div className="flex items-center gap-2">
            <img src={coinIcon} alt="" />
            <h2 className="text-textBody font-inter ">
              {(Number(value) / 100).toLocaleString("pt-BR", {
                style: "decimal",
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </h2>
          </div>
          <h2 className="text-textBody text-purple">{formatDate(date)}</h2>
        </div>
      </div>
      <div className="flex flex-col h-full justify-around">
        <img
          onClick={() => setShowModal(id)}
          className="w-8 h-8 p-1 bg-purpleDark rounded-[100%]"
          src={gearWhite}
          alt="icon edit"
        />
        <h2
          onClick={() => setShowModalDelete(id)}
          className="w-8 h-8 p-1 bg-purpleDark rounded-[100%] text-white flex items-center justify-center"
        >
          X
        </h2>
      </div>
    </div>
  );
}
