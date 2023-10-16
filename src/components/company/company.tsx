export default function Company({
  classname,
  img,
  name,
  classNameH2,
}: {
  classname?: string;
  img?: string;
  name: string;
  classNameH2?: boolean;
}) {
  return (
    <div className="border-2 border-purpleDark border-solid rounded-3xl w-full h-full flex flex-col items-center justify-evenly px-4 py-2">
      <div
        className={`w-20 h-20 rounded-[100%] p-2 ${
          classname ? classname : "p-2"
        }`}
      >
        <img className={`w-full h-full`} src={img} alt="" />
      </div>
      <h2
        className={`text-center ${
          !classNameH2 ? classNameH2 : "truncate text-ellipsis"
        } w-11/12`}
      >
        {name}
      </h2>
    </div>
  );
}
