import PeopleCommunty from "../../assets/icons/people.svg"
import Money from "../../assets/icons/money.svg"
import Cart from "../../assets/icons/cart.svg"
import Tasks from "../../assets/icons/task.svg"
import Home from "../../assets/icons/home.svg"

export function MenuBar() {
  return (
    <div className="w-[100%] flex items-center justify-around fixed bottom-0 gap-4 rounded-t-[11px] bg-purpleDark text-white">
      <img className="w-[24px]" src={PeopleCommunty} />
      <img className="w-[24px]" src={Money} />
      <div className="border-[7px] p-[5px] rounded-full">
        <img className="w-[24px]" src={Home} />
      </div>
      <img className="w-[24px]" src={Cart} />
      <img className="w-[24px]" src={Tasks} />
    </div>

  )
}