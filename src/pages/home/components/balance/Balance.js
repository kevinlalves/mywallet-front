import moneyMask from "../../../../utils/functions/moneyMask";
import BalanceStyled from "./Balance.styled";

const Balance = ({ amountCents }) => {
  return (
    <BalanceStyled isProfit={amountCents > 0}>
      <p>SALDO</p>
      <p>{moneyMask(`${amountCents}`)}</p>
    </BalanceStyled>
  );
};

export default Balance;
