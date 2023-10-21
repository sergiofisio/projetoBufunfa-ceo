import building from "../../assets/building.svg";

export default function Company({
  classname,
  img,
  name,
  company,
  classNameH2,
}: {
  classname?: string;
  img?: string;
  name?: string;
  company?: { logo?: string; name: string };
  classNameH2?: boolean;
}) {
  return (
    <div className="border-2 border-purpleDark border-solid rounded-3xl w-full h-full flex flex-col items-center justify-evenly px-4 py-2">
      <div
        className={`w-20 h-20 rounded-[100%] p-2 ${
          classname ? classname : "p-2"
        }`}
      >
        <img
          className={`w-full h-full rounded-[100%]`}
          src={company?.logo || img || building}
          alt=""
        />
      </div>
      <h2
        className={`text-center ${
          !classNameH2 ? classNameH2 : "truncate text-ellipsis"
        } w-11/12`}
      >
        {company?.name || name}
      </h2>
    </div>
  );
}
