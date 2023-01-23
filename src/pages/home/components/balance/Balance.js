import BalanceStyled from "./Balance.styled";

const Balance = (amountCents) => {
  return (
    <BalanceStyled>
      <p>SALDO</p>
      <p>{amountCents}</p>
    </BalanceStyled>
  );
};

export default Balance;
