import PanelButtonStyled from "./PanelButton.styled";
import profitIcon from "../../../../assets/profit-icon.png";
import debtIcon from "../../../../assets/debt-icon.png";

const icons = {
  profit: profitIcon,
  debt: debtIcon
};

const PanelButton = ({ text, type }) => {
  return (
    <PanelButtonStyled>
      <img src={icons[type]} alt="icone para clique" />
      <p>{text}</p>
    </PanelButtonStyled>
  )
};

export default PanelButton;
