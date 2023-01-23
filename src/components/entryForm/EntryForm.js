import { useState } from "react"
import ButtonStyled from "../../styles/Button.styled";
import FormStyled from "../../styles/Form.styled";
import InputStyled from "../../styles/Input.styled";

const EntryForm = ({ text, id }) => {
  const [amountCents, setAmountCents] = useState(undefined);
  const [description, setDescription] = useState("");

  const updateRequest = async (e) => {
    e.preventDefault();
  };

  const createRequest = async (e) => {
    e.preventDefault();
  };

  return (
    <FormStyled onSubmit={id ? updateRequest : createRequest}>
      <InputStyled
        type="number"
        step=".01"
        name="amountCents"
        placeholder="Valor"
        value={amountCents}
        onChange={e => setAmountCents(e.target.value)}
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
