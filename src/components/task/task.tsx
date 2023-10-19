import coinIcon from "../../assets/icons/coin.svg";
import gearWhite from "../../assets/icons/gearWhite.svg";

export default function Task({
  classname,
  id,
  title,
  description,
  value,
  setShowModal,
}: {
  classname?: string;
  id?: number;
  title?: string;
  description?: string;
  value?: number;
  setShowModal: any;
}) {
  {
    return (
      <div
        className={`flex justify-between w-full h-28 ${classname} px-4 py-2`}
      >
        <div className=" flex flex-col justify-evenly h-full">
          <h2 className="text-subTitle2 text-purple">{title}</h2>
          <p className="text-textBody2">{description}</p>
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
        </div>
        <div className="flex flex-col h-full justify-around">
          <img
            onClick={() => setShowModal(id)}
            className="w-8 h-8 p-1 bg-purpleDark rounded-[100%]"
            src={gearWhite}
            alt="icon edit"
          />
          <h2 className="w-8 h-8 p-1 bg-purpleDark rounded-[100%] text-white flex items-center justify-center">
            X
          </h2>
        </div>
      </div>
    );
  }
}
