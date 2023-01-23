import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserProviderContext } from "../../../../providers/UserProvider";
import { listTransactions } from "../../../../services/mywallet-api";
import Transaction from "../transaction/Transaction";
import TransactionsStyled from "./Transactions.styled";
import Loading from "../../../../components/loading/Loading";
import Balance from "../balance/Balance";
import handleError from "../../../../utils/functions/handleError";

const Transactions = () => {
  const { user, setUser } = useContext(UserProviderContext);
  const [transactions, setTransactions] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: newTransactions } = await listTransactions(user.token);

        setTransactions(newTransactions);
      }
      catch (error) {
        handleError({ error, navigate, setUser });
      }
    };

    fetchData();
  }, [user, navigate, setUser]);

  return transactions ? (
    <TransactionsStyled>
      {transactions.length > 0 ? transactions.map(
        transaction => <Transaction
          description={transaction.description}
          date={transaction.creationDate}
          amountCents={transaction.amountCents}
          id={transaction._id}
          key={transaction._id}
        />
      ) : <h1>Não há registros de entrada ou saída</h1>}

      {transactions.length > 0 &&
        <Balance amountCents={transactions.reduce((sum, transaction) => (sum + transaction.amountCents), 0)} />
      }
    </TransactionsStyled>
  ) : <Loading />;
};

export default Transactions;
