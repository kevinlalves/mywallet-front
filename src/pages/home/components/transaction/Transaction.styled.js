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
    width: 50px;
  }
  p:nth-child(2) {
    overflow-wrap: break-word !important;
    text-align: left;
    width: calc(100% - 144px);
    cursor: pointer;
  }
  p:nth-child(3) {
    color : ${props => props.isProfit ? props.theme.colors.profit : props.theme.colors.debt};
    width: 70px;
    text-align: right;
    margin-right: 6px;
  }
`;

export default TransactionStyled;
