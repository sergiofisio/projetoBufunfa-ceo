import Notify from "../notify/notify";

export default function ModalNotify({
  employees,
  modalNotify,
  setModalNotify,
}: {
  employees: any;
  modalNotify: any;
  setModalNotify: any;
}) {
  return (
    <div className="notify absolute top-0 left-0 w-full h-full bg-gray-50 flex flex-col items-center justify-center z-10">
      <header className="flex items-center w-full h-24 bg-purpleDark p-7 gap-6 relative">
        <h2 className="text-subTitle text-white">Notificações</h2>
        <h2
          onClick={() => setModalNotify("")}
          className="bg-gold rounded-[100%] absolute top-2 right-2 w-6 h-6 font-bold flex items-center justify-center text-subTitle2"
        >
          X
        </h2>
      </header>
      <div className="w-full h-[calc(100%-4rem)] flex flex-col gap-3 p-6 overflow-y-scroll scrollbar-thin scrollbar-thumb-purpleDark">
        {modalNotify.map((n: any) => (
          <div className="w-full h-28" key={n.id}>
            <Notify employees={employees} notify={n} />
          </div>
        ))}
      </div>
    </div>
  );
}
