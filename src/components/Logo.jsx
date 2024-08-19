import { Link } from "react-router-dom";
import logo from "../assets/images/Logo.png";

const Logo = ({ type }) => {
  const styles = {
    primary: "h-[8rem] sm:h-[12rem] w-auto object-cover ",
    secondary: "h-[12rem] sm:h-[16rem]  w-auto mx-auto object-cover",
  };

  return (
    <Link to="/">
      <img src={logo} alt="logo" className={styles[type]} />
    </Link>
  );
};

export default Logo;
