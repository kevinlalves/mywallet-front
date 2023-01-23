import styled from "styled-components";

const BalanceStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  width: 100%;
  bottom: 12px;
  p {
    font-size: 17px;
  }
  p:nth-child(1) {
    font-weight: 700;
  }
  p:nth-child(2) {
    color : ${props => props.isProfit ? props.theme.colors.profit : props.theme.colors.debt};
    width: 70px;
  }
`;

export default BalanceStyled;
