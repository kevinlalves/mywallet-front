import styled from "styled-components";

const ButtonStyled = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 46px;
  background-color: ${props => props.theme.colors.secondary};
  border: none;
  border-radius: 5px;
  p {
    font-size: 20px;
    color: ${props => props.theme.colors.back};
  }
`;

export default ButtonStyled;
