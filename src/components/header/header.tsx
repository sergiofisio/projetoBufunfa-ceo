export function HeaderCompany({ img, text }: { img: string; text: string }) {
  return (
    <header className="flex justify-center items-center w-full h-40 bg-purpleDark p-7 gap-6 rounded-b-3xl">
      <img className="h-16" src={img} alt="" />
      <h2 className="text-title text-white">{text}</h2>
    </header>
  );
}
