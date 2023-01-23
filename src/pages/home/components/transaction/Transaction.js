import { useNavigate } from "react-router-dom";
import TransactionStyled from "./Transaction.styled";
import moneyMask from "../../../../utils/functions/moneyMask";
import { IconContext } from "react-icons";
import { GiCrossedBones } from "react-icons/gi";
import { deleteTransaction } from "../../../../services/mywallet-api";
import { useContext } from "react";
import { UserProviderContext } from "../../../../providers/UserProvider";

const Transaction = ({ date, description, amountCents, id, setUpdated }) => {
  const navigate = useNavigate();
  const { user } = useContext(UserProviderContext);
  const isProfit = amountCents >= 0;

  const updateTransaction = () => {
    if (isProfit) {
      return navigate(`/editar-entrada/${id}`, { state: { description, amount: moneyMask(`${amountCents}`) } });
    }

    navigate(`/editar-saida/${id}`, { state: { description, amount: moneyMask(`${amountCents}`) } });
  };

  const deleteRequest = async () => {
    try {
      await deleteTransaction({ id, token: user.token });

      setUpdated(true);
    } catch (error) {
      console.log(error.response?.data);
    }
  };

  return (
    <TransactionStyled isProfit={isProfit}>
      <p>{date}</p>
      <p onClick={updateTransaction}>{description}</p>
      <p>{moneyMask(`${amountCents}`)}</p>
      <IconContext.Provider value={{size: "12px", style: { cursor: "pointer" }}}>
        <GiCrossedBones onClick={deleteRequest} />
      </IconContext.Provider>
    </TransactionStyled>
  );
};

export default Transaction;
