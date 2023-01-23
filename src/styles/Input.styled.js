import styled from "styled-components";

const InputStyled = styled.input`
  padding: 15px;
  width: 100%;
  height: 58px;
  border: none;
  border-radius: 5px;
  background-color: ${props => props.theme.colors.back};
`;

export default InputStyled;
