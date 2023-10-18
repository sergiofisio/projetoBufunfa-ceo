import iconCeo from "../../assets/icons/ceoCompany.svg";
import user from "../../assets/user.svg";

export default function CompanyPeople({
  id,
  people,
  type,
}: {
  id: number;
  people: any;
  type?: string;
}) {
  console.log(id);

  return (
    <div
      key={id}
      className="w-28 h-36 bg-purpleDark relative flex flex-col items-center justify-between p-2 rounded-xl"
    >
      {type === "ceo" ? (
        <img className="absolute top-1 right-1 " src={iconCeo} alt="" />
      ) : (
        ""
      )}
      <img
        className=" w-20 h-20 rounded-[100%] bg-white"
        src={people.photo || user}
        alt={`photo ${people.name}`}
      />
      <h2 className="text-center text-gold text-textBody2">{people.name}</h2>
    </div>
  );
}
