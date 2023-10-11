import logo from "../../assets/logo.svg";
const DefaultHeader = () => {
  return (
    <div className={`flex items-center justify-center`}>
      <img src={logo} alt="logo" />
    </div>
  );
};

export default DefaultHeader;
