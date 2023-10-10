export default function Employee({
  img,
  name,
  classname,
}: {
  img: string;
  name: string;
  classname?: string;
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
      <h2 className="w-8 h-8 text-white bg-purpleDark flex items-center justify-center rounded-[100%] text-xl">
        X
      </h2>
    </div>
  );
}
