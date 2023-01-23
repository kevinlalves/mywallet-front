import styled from "styled-components";
import ButtonStyled from "../../../../styles/Button.styled";

const PanelButtonStyled = styled(ButtonStyled)`
  height: 100%;
  width: 48%;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding: 10px;
  img {
    width: 25px;
  }
  p {
    font-size: 17px;
    width: 40%;
    text-align: left;
  }
`;

export default PanelButtonStyled;
