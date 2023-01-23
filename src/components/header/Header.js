import HeaderStyled from "./Header.styled";
import logOutIcon from "../../assets/log-out-icon.png";
import { IconContext } from "react-icons";
import { GoHome } from "react-icons/go";
import { useNavigate } from "react-router-dom";
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
      <IconContext.Provider value={{size: "36px", color: "white"}}>
        {isHome ? <img
          onClick={logOut}
          src={logOutIcon}
          alt="logout icon"
        /> : <GoHome onClick={() => navigate("/home")} />}
      </IconContext.Provider>
    </HeaderStyled>
  );
};

export default Header;
