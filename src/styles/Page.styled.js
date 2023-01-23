import styled from "styled-components";

const PageStyled = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: ${props => props.justify};
  flex-direction: column;
  align-items: center;
  background-color: ${props => props.theme.colors.main};
  >p {
    color: ${props => props.theme.colors.back};
    font-size: 15px;
  }
`;

export default PageStyled;
