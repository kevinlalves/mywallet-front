import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserProviderContext } from "../../../../providers/UserProvider";
import { listTransactions } from "../../../../services/mywallet-api";
import Transaction from "../transaction/Transaction";
import TransactionsStyled from "./Transactions.styled";
import Loading from "../../../../components/loading/Loading";
import Balance from "../balance/Balance";

const Transactions = () => {
  const { user } = useContext(UserProviderContext);
  const [transactions, setTransactions] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      if (!user) {
        navigate("/");
      }

      try {
        const { data: newTransactions } = await listTransactions(user.token);

        setTransactions(newTransactions);
      }
      catch (error) {
        console.log(error.response?.data);
      }
    };

    fetchData();
  }, [user, navigate]);

  return transactions ? (
    <TransactionsStyled>
      {transactions.length > 0 ? transactions.map(
        transaction => <Transaction
          description={transaction.description}
          date={transaction.creationDate}
          amountCents={transaction.amountCents}
          id={transaction._id}
        />
      ) : <h1>Não há registros de entrada ou saída</h1>}

      {transactions.length &&
        <Balance amountCents={transactions.reduce((sum, transaction) => sum + transaction.amountCents)} />
      }
    </TransactionsStyled>
  ) : <Loading />;
};

export default Transactions;
