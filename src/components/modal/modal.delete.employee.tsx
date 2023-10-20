import Button from "../button/button";
import AxiosInstance from "../../connection";
import { getItem } from "../../utils/storage";

export default function ModalDeleteEmployee({
  id,
  setShowModalDelete,
}: {
  id: number;
  setShowModalDelete: any;
}) {
  async function deleteEmployee() {
    await AxiosInstance.axiosPrivate.delete(
      `deleteEmployee/ceo/${id}/${sessionStorage.getItem("company")}`,
      {
        headers: {
          Authorization: `Bearer ${getItem("token")}`,
        },
      }
    );
    setShowModalDelete("");
    window.location.reload();
  }
  return (
    <div className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.5)] flex items-center justify-center">
      <div className="bg-purpleDark w-80 h-60 rounded-2xl relative flex flex-col justify-evenly px-6">
        <h2
          onClick={() => setShowModalDelete(false)}
          className="bg-gold rounded-[100%] absolute top-2 right-2 w-4 h-4 font-bold flex items-center justify-center"
        >
          x
        </h2>
        <h2 className="text-white text-subTitle">Você tem certeza?</h2>
        <p className="text-white text-textBody">
          Certeza que deseja demitir este funcionário? (Ele poderá ser
          recontratado novamente)
        </p>
        <div className="flex items-center justify-evenly gap-8">
          <Button
            onClick={() => {
              deleteEmployee();
            }}
            text="Sim"
            color="gold"
          />
          <Button
            text="Não"
            onClick={() => {
              setShowModalDelete("");
            }}
            color="purple"
          />
        </div>
      </div>
    </div>
  );
}
