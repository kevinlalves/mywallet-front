import styled from "styled-components";
import ButtonStyle from "./Button.styled";
import InputStyle from "./Input.styled";

const FormStyled = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  ${InputStyle} {
    margin-bottom: 13px;
  }
  ${ButtonStyle} {
    margin-bottom: 36px;
  }
  width: 86%;
`;

export default FormStyled;
