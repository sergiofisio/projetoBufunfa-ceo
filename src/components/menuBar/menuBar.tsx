import people from "../../assets/icons/people.svg";
import peopleActive from "../../assets/icons/peopleActive.svg";
import money from "../../assets/icons/money.svg";
import moneyActive from "../../assets/icons/moneyActive.svg";
import cart from "../../assets/icons/cart.svg";
import cartActive from "../../assets/icons/cartActive.svg";
import tasks from "../../assets/icons/task.svg";
import tasksActive from "../../assets/icons/taskActive.svg";
import home from "../../assets/icons/home.svg";
import homeActive from "../../assets/icons/homeActive.svg";

export function MenuBar({
  selected,
  setSelected,
}: {
  selected?: string;
  setSelected?: any;
}) {
  return (
    <div className="w-full flex items-center justify-around gap-4 rounded-t-[11px] bg-purpleDark text-white border-transparent border-none">
      <img
        onClick={() => setSelected("people")}
        className="w-[24px]"
        src={selected === "people" ? peopleActive : people}
      />
      <img
        onClick={() => setSelected("money")}
        className="w-[24px]"
        src={selected === "money" ? moneyActive : money}
      />
      <div
        onClick={() => setSelected("home")}
        className="border-[7px] p-[5px] rounded-full"
      >
        <img
          className="w-[24px]"
          src={selected === "home" ? homeActive : home}
        />
      </div>
      <img
        onClick={() => setSelected("cart")}
        className="w-[24px]"
        src={selected === "cart" ? cartActive : cart}
      />
      <img
        onClick={() => setSelected("tasks")}
        className="w-[24px]"
        src={selected === "tasks" ? tasksActive : tasks}
      />
    </div>
  );
}
