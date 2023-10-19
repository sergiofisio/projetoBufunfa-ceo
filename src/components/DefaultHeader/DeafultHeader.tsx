import logo from "../../assets/logo.svg";
const DefaultHeader = () => {
  return (
    <div className={`flex items-center justify-center p-4`}>
      <img className="w-full" src={logo} alt="logo" />
    </div>
  );
};

export default DefaultHeader;
