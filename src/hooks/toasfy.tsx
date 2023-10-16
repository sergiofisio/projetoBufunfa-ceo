import { toast } from "react-toastify";

type ToastType = "success" | "error" | "warning" | "info";

export function toastfy(
  type: ToastType,
  msg: string,
  classname: string,
  time: number
) {
  toast[type](msg, {
    position: "bottom-center",
    autoClose: time,
    hideProgressBar: false,
    closeOnClick: true,
    draggable: false,
    icon: false,
    closeButton: false,
    theme: "colored",
    className: `${classname} w-full h-full !rounded-xl`,
  });
}
