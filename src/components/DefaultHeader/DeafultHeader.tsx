import logo from "../../assets/logo.svg";
const DefaultHeader = () => {
  return (
    <div className={`flex items-center justify-center w-360 h-3/6`}>
      <img src={logo} alt="logo" />
    </div>
  );
};

export default DefaultHeader;
