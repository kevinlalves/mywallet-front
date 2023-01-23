import styled from "styled-components";

const TransactionStyled = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 10px;
  p {
    font-size: 16px;
  }
  p:nth-child(1) {
    color: ${props => props.theme.colors.weak};
    width: 60px;
  }
  p:nth-child(2) {
    overflow-wrap: break-word !important;
    text-align: left;
    width: calc(100% - 130px);
  }
  p:nth-child(3) {
    color : ${props => props.isProfit ? props.theme.colors.profit : props.theme.colors.debt};
    width: 70px;
    text-align: right;
  }
`;

export default TransactionStyled;
