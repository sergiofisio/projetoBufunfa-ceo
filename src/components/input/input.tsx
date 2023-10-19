import React, { useState } from "react";
import openEye from "../../assets/openEye.svg";
import closeEye from "../../assets/closeEye.svg";

import InputMask from "react-input-mask";

export default function Input({
  label,
  labelClassName,
  type,
  placeholder,
  set,
  value,
  required,
  mask,
  id,
  ...props
}: {
  label: string;
  labelClassName: string;
  type: string;
  placeholder?: string;
  set: React.Dispatch<React.SetStateAction<string>>;
  value: string | number;
  required?: boolean;
  mask?: string;
  id?: string;
}) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="w-full text-white flex flex-col">
      <label className={`text-textBody text-black ${labelClassName}`}>
        {label}
      </label>
      <div className="border-2 border-solid border-black rounded-3xl bg-white text-black resize-none outline-none p-2 overflow-auto flex">
        {type === "textarea" ? (
          <textarea
            className=" bg-white outline-none w-full h-full text-black px-2"
            rows={3}
            placeholder={placeholder}
            value={value}
            onChange={(e) => set(e.target.value)}
            {...props}
          />
        ) : (
          <InputMask
            className=" bg-white outline-none w-full h-full text-black px-2"
            mask={mask || ""}
            type={
              label === "Senha" || label === "Confirmar senha"
                ? showPassword
                  ? "text"
                  : "password"
                : type
            }
            placeholder={placeholder}
            value={value}
            required={required ? true : false}
            onChange={(e) => set(e.target.value)}
            id={id}
            {...props}
          />
        )}
        {(label === "Senha" || label === "Confirmar senha") && (
          <img
            className="w-6 h-6 cursor-pointer"
            onClick={() => setShowPassword(!showPassword)}
            src={showPassword ? openEye : closeEye}
            alt="icon eye"
          />
        )}
      </div>
    </div>
  );
}
