import HeaderStyled from "./Header.styled";
import logOutIcon from "../../assets/log-out-icon.png";
import homeIcon from "../../assets/home-icon.png";
import { Link } from "react-router-dom";

const Header = ({ text, isHome }) => {
   return (
      <HeaderStyled>
         <p>{text}</p>
         <Link to={isHome ? "/" : "/home"}><img src={isHome ? logOutIcon : homeIcon} alt="logout/home icon" /></Link>
      </HeaderStyled>
   );
};

export default Header;
