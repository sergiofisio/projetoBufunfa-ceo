import { toastfy } from "../hooks/toasfy";

export function validadeInputs(datas: any) {
  for (const data of datas) {
    if (data.input === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      console.log(emailRegex.test(data.value as string));

      if (!emailRegex.test(data.value as string)) {
        toastfy("O email é inválido!", "toast-error", 3000);
        return true;
      }
    }
  }
}
