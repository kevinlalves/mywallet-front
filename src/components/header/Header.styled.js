import styled from "styled-components";

const HeaderStyled = styled.div`
  height: 74px;
  width: 86%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  p {
    color: ${props => props.theme.colors.back};
    font-size: 26px;
    font-weight: 700;
  }
  img {
    width: 24px;
    cursor: pointer;
  }
`;

export default HeaderStyled;
