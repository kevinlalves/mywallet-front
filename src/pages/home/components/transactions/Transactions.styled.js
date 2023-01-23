import styled from "styled-components";

const TransactionsStyled = styled.ul`
  background-color: ${props => props.theme.colors.back};
  width: 86%;
  height: calc(100vh - 218px);
  margin-bottom: 15px;
  border-radius: 5px;
  padding-top: 22px;
  padding-left: 16px;
  padding-right: 16px;
  padding-bottom: 16px;
  position: relative;
  h1 {
    font-size: 20px;
    color: ${props => props.theme.colors.weak};
    margin: 60% auto;
    width: 70%;
    text-align: center;
  }
`;

export default TransactionsStyled;
