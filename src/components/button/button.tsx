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
  onClick?: (e?: any) => void;
  type?: "submit" | "reset" | "button";
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
            ? "bg-purpleDark text-white border-gold hover:bg-gold hover:text-purpleDark"
            : color === "gold"
            ? "bg-gold text-purpleDark border-goldDark hover:bg-transparent hover:text-goldDark"
            : "bg-transparent text-purpleDark border-transparent hover:bg-purpleDark hover:text-white"
        } rounded-3xl border-2 `}
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
