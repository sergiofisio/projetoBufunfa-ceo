import React from "react";

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
  return (
    <div className="w-full text-white flex flex-col">
      <label className={`text-textBody text-black ${labelClassName}`}>
        {label}
      </label>
      {type === "textarea" ? (
        <textarea
          className="border-2 border-solid border-black rounded-3xl bg-white text-black resize-none outline-none p-2 overflow-auto"
          rows={3}
          placeholder={placeholder}
          value={value}
          onChange={(e) => set(e.target.value)}
          {...props}
        />
      ) : (
        <InputMask
          className="border-2 border-solid border-black rounded-3xl bg-white outline-none h-full text-black px-2"
          mask={mask || ""}
          type={type}
          placeholder={placeholder}
          value={value}
          required={required ? true : false}
          onChange={(e) => set(e.target.value)}
          id={id}
          {...props}
        />
      )}
    </div>
  );
}
