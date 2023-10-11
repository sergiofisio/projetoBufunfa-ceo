import Button from "../button/button";

export default function ModalEmployee({
  title,
  text,
  btnText,
  setShowModal,
}: {
  title: string;
  text: string;
  btnText: string;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <div className="absolute top-0 left-0 w-full h-full bg-gray-500 bg-opacity-40 flex items-center justify-center">
      <div className="bg-white w-72 h-60 rounded-xl flex flex-col justify-between items-center">
        <header className="w-full h-16 flex items-center justify-center bg-purple-dark rounded-t-xl text-white text-lg">
          {title}
        </header>
        <div className="h-[calc(100%-4rem)] w-full flex flex-col items-center justify-between p-4">
          <h1>{text}</h1>

          <Button
            text={btnText}
            color="purple"
            onClick={() => {
              setShowModal(false);
            }}
          />
        </div>
      </div>
    </div>
  );
}
