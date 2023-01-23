import styled from "styled-components";

const TransactionsStyled = styled.div`
  background-color: ${props => props.theme.colors.back};
  width: 86%;
  height: calc(100vh - 218px);
  margin-bottom: 15px;
  border-radius: 5px;
`;

export default TransactionsStyled;
