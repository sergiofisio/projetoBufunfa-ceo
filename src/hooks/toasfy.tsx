import { toast } from "react-toastify";

export function toastfy(msg: string, classname: string, time: number) {
  toast.error(msg, {
    position: "bottom-center",
    autoClose: time,
    hideProgressBar: false,
    closeOnClick: true,
    draggable: false,
    icon: false,
    closeButton: false,
    className: classname,
  });
}
