import { useContext, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom";
import { UserProviderContext } from "../../providers/UserProvider";
import { createTransaction, updateTransaction } from "../../services/mywallet-api";
import ButtonStyled from "../../styles/Button.styled";
import FormStyled from "../../styles/Form.styled";
import InputStyled from "../../styles/Input.styled";
import handleError from "../../utils/functions/handleError";
import moneyMask from "../../utils/functions/moneyMask";

const EntryForm = ({ text, id }) => {
  const { pathname, state } = useLocation();
  const [amount, setAmount] = useState(state ? state.amount : 0);
  const [description, setDescription] = useState(state ? state.description : "");
  const { user, setUser } = useContext(UserProviderContext);
  const navigate = useNavigate();

  const handleRequest = async (e, apiRequest) => {
    e.preventDefault();
    const signedAmountCents = /entrada/.test(pathname) ? amount*100 : -amount*100;

    try {
      await apiRequest({ description, amountCents: signedAmountCents, token: user.token, id });

      navigate("/home");
    } catch (error) {
      handleError(error, navigate, setUser);
    }
  };

  return (
    <FormStyled onSubmit={e => handleRequest(e, (id ? updateTransaction : createTransaction))}>
      <InputStyled
        type="number"
        step=".01"
        name="amountCents"
        placeholder="Valor"
        value={amount}
        onChange={e => setAmount(moneyMask(e.target.value))}
        required
      />
      <InputStyled
        type="string"
        name="description"
        placeholder="Descrição"
        value={description}
        onChange={e => setDescription(e.target.value)}
        required
      />
      <ButtonStyled>
        <p>{text}</p>
      </ButtonStyled>
    </FormStyled>
  );
};

export default EntryForm;
