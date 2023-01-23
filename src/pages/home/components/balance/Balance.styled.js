import styled from "styled-components";

const BalanceStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  bottom: 12px;
  p {
    font-size: 17px;
  }
  p:nth-child(1) {
    color: ${props => props.theme.colors.weak};
  }
  p:nth-child(2) {
    color : ${props => props.isProfit ? props.theme.colors.profit : props.theme.colors.debt};
    width: 70px;
  }
`;

export default BalanceStyled;
