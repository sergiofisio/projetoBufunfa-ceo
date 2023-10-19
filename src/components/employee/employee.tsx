export default function Employee({
  id,
  img,
  name,
  classname,
  setShowModalDelete,
}: {
  id: number;
  img: string;
  name: string;
  classname?: string;
  setShowModalDelete: any;
}) {
  return (
    <div
      className={`flex items-center justify-between w-full p-4 ${classname}`}
    >
      <img
        className="h-24 w-24 rounded-[100%] border-purpleDark border-2"
        src={img}
        alt={`img ${name}`}
      />
      <h1 className="text-lg">{name}</h1>
      <h2
        onClick={() => {
          setShowModalDelete(id);
        }}
        className="w-8 h-8 text-white bg-purpleDark flex items-center justify-center rounded-[100%] text-xl"
      >
        X
      </h2>
    </div>
  );
}
