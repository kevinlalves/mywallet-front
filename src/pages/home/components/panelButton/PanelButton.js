import PanelButtonStyled from "./PanelButton.styled";
import profitIcon from "../../../../assets/profit-icon.png";
import debtIcon from "../../../../assets/debt-icon.png";
import { useNavigate } from "react-router-dom";

const icons = {
  profit: profitIcon,
  debt: debtIcon
};

const PanelButton = ({ text, type }) => {
  const navigate = useNavigate();

  const NewTransactionPages = {
    profit: () => navigate("/nova-entrada"),
    debt: () => navigate("/nova-saida")
  };

  return (
    <PanelButtonStyled onClick={NewTransactionPages[type]}>
      <img src={icons[type]} alt="icone para clique" />
      <p>{text}</p>
    </PanelButtonStyled>
  )
};

export default PanelButton;
