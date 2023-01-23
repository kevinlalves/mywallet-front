import styled from "styled-components";

const TransactionsStyled = styled.ul`
  background-color: ${props => props.theme.colors.back};
  width: 86%;
  height: calc(100vh - 218px);
  margin-bottom: 15px;
  border-radius: 5px;
  padding-top: 22px;
  padding-left: 12px;
  padding-right: 12px;
  padding-bottom: 12px;
  position: relative;
`;

export default TransactionsStyled;
