import imgGearGold from "./../../assets/icons/gearOrange.svg";
import imgGearWhite from "./../../assets/icons/gearWhite.svg";
import imgGearPurple from "./../../assets/icons/gearPurple.svg";
import { useState } from "react";

export default function Button({
  text,
  onClick,
  type,
  color,
  img,
}: {
  text: string;
  onClick: () => void;
  type?: "submit" | "reset";
  color: string;
  img?: boolean;
}) {
  const [hover, onHover] = useState(false);

  return (
    <>
      <button
        className={`flex items-center justify-evenly w-full h-10 transition-all duration-300 ease-in-out 
        ${
          color === "purple"
            ? "bg-purple text-white border-purple hover:bg-white hover:text-purple"
            : color === "gold"
            ? "bg-gold text-purple border-gold hover:bg-transparent hover:text-gold"
            : "bg-transparent text-purple border-transparent hover:bg-purple hover:text-white"
        } rounded-xl border-2 `}
        type={type ? type : "button"}
        onClick={onClick}
        onMouseEnter={() => {
          onHover(true);
        }}
        onMouseLeave={() => {
          onHover(false);
        }}
      >
        {text}
        {img && !hover && (
          <img
            src={
              color === "purple"
                ? imgGearGold
                : color === "gold"
                ? imgGearPurple
                : imgGearPurple
            }
            alt="icon setting"
          />
        )}
        {img && hover && (
          <img
            src={
              color === "purple"
                ? imgGearPurple
                : color === "gold"
                ? imgGearGold
                : imgGearWhite
            }
            alt="icon setting"
          />
        )}
      </button>
    </>
  );
}
