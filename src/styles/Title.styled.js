import styled from "styled-components";

const TitleStyled = styled.div`
  p {
    font-size: 32px !important;
    font-family: "Saira Stencil One", cursive !important;
  }
  width: 92%;
  height: 50px;
  margin-bottom: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.colors.back};
`;

export default TitleStyled;
