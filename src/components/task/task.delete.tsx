import AxiosInstance from "../../connection";
import { toastfy } from "../../hooks/toasfy";
import { getItem } from "../../utils/storage";
import Button from "../button/button";

export default function TaskDelete({
  setShowModalDelete,
  id,
}: {
  setShowModalDelete: any;
  id: number | string;
}) {
  async function handleDeleteTask() {
    try {
      const response = await AxiosInstance.axiosPrivate.delete(
        `/deleteTask/ceo/${id}/${await getItem("company")}`,
        {
          headers: {
            Authorization: `Bearer ${await getItem("token")}`,
          },
        }
      );

      console.log(response);
    } catch (error: any) {
      console.log(error);
    }
  }
  return (
    <div className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.5)] flex items-center justify-center">
      <div className="bg-purpleDark w-80 h-60 rounded-2xl relative flex flex-col justify-evenly px-6 text-white">
        <h2
          onClick={() => setShowModalDelete("")}
          className="bg-gold rounded-[100%] absolute top-2 right-2 w-4 h-4 font-bold flex items-center justify-center"
        >
          x
        </h2>
        <h2 className="text-white text-subTitle">Você tem certeza?</h2>

        <p>Certeza que deseja excluir essa tarefa?</p>
        <div className="flex items-center justify-evenly gap-4">
          <Button text="Sim" color="gold" onClick={handleDeleteTask} />
          <Button
            text="Não"
            color="purple"
            onClick={() => {
              setShowModalDelete("");
            }}
          />
        </div>
      </div>
    </div>
  );
}
