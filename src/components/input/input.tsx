import React from "react";

import InputMask from "react-input-mask";

export default function Input({
  label,
  type,
  placeholder,
  set,
  value,
  required,
  mask,
  ...props
}: {
  label: string;
  type: string;
  placeholder: string;
  set: React.Dispatch<React.SetStateAction<string>>;
  value: string | number;
  required?: boolean;
  mask?: string;
}) {
  return (
    <div className="w-full text-white flex flex-col gap-2">
      <label className="capitalize">{label}</label>
      {type === "textarea" ? (
        <textarea
          className="text-black resize-none outline-none rounded-xl p-2 overflow-auto"
          rows={3}
          placeholder={placeholder}
          value={value}
          onChange={(e) => set(e.target.value)}
          {...props}
        />
      ) : (
        <InputMask
          className="outline-none text-black rounded-xl px-2"
          mask={mask || ""}
          type={type}
          placeholder={placeholder}
          value={value}
          required={required ? true : false}
          onChange={(e) => set(e.target.value)}
          {...props}
        />
      )}
    </div>
  );
}
