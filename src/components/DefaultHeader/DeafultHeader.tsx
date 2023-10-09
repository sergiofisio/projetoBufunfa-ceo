import logo from "../../assets/logo.svg";
const DefaultHeader = () => {
  return (
    <div className={`flex items-center justify-center w-360 mt-16 mb-16`}>
      <img src={logo} alt="logo" />
    </div>
  );
};

export default DefaultHeader;
