import HeaderStyled from "./Header.styled";
import logOutIcon from "../../assets/log-out-icon.png";
import homeIcon from "../../assets/home-icon.png";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserProviderContext } from "../../providers/UserProvider";

const Header = ({ text, isHome }) => {
  const navigate = useNavigate();
  const { setUser } = useContext(UserProviderContext);

  const logOut = () => {
    setUser(null);

    navigate("/");
  };

  return (
    <HeaderStyled>
      <p>{text}</p>
      <img
        onClick={isHome ? logOut : () => navigate("/home")}
        src={isHome ? logOutIcon : homeIcon}
        alt="logout/home icon"
      />
    </HeaderStyled>
  );
};

export default Header;
