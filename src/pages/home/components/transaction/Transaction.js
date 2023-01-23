import { useNavigate } from "react-router-dom";
import TransactionStyled from "./Transaction.styled";
import moneyMask from "../../../../utils/functions/moneyMask";

const Transaction = ({ date, description, amountCents, id }) => {
  const navigate = useNavigate();
  const isProfit = amountCents >= 0;

  const updateTransaction = () => {
    if (isProfit) {
      return navigate(`/editar-entrada/${id}`, { state: { description, amount: moneyMask(`${amountCents}`) } });
    }

    navigate(`/editar-saida/${id}`, { state: { description, amount: moneyMask(`${amountCents}`) } });
  };

  return (
    <TransactionStyled isProfit={isProfit}>
      <p>{date}</p>
      <p onClick={updateTransaction}>{description}</p>
      <p>{moneyMask(`${amountCents}`)}</p>
    </TransactionStyled>
  );
};

export default Transaction;
