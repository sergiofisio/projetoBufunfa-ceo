import coin from "../../assets/icons/coin.svg";
import gear from "../../assets/icons/gearWhite.svg";

export default function ShopItemInfo({
  expense,
  setShowModal,
  setShowModalDelete,
}: {
  expense: any;
  setShowModal: any;
  setShowModalDelete: any;
}) {
  return (
    <div className="border-purpleDark border-2 border-solid rounded-3xl w-40 h-44 flex items-center justify-evenly flex-col">
      <h2 className="text-subTitle2">{expense.title}</h2>
      <div className="flex items-center gap-1">
        <img src={coin} alt="coin icon" />{" "}
        <h2>
          {(Number(expense.value) / 100).toLocaleString("pt-BR", {
            style: "decimal",
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
        </h2>
      </div>
      <p className="text-textBody2 text-center">{expense.description}</p>
      <div className="flex items-center w-full justify-evenly">
        <img
          onClick={() => {
            setShowModal(expense.id);
          }}
          className="bg-purpleDark w-8 h-8 rounded-[100%] p-1"
          src={gear}
          alt="icon gear"
        />{" "}
        <h2
          onClick={() => {
            setShowModalDelete(expense.id);
          }}
          className="bg-purpleDark w-8 h-8 rounded-[100%] text-white flex items-center justify-center text-textBody p-3"
        >
          X
        </h2>
      </div>
    </div>
  );
}
