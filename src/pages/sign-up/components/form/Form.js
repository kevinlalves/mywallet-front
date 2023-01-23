import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signUp } from "../../../../services/mywallet-api";
import ButtonStyled from "../../../../styles/Button.styled";
import FormStyled from "../../../../styles/Form.styled";
import InputStyled from "../../../../styles/Input.styled";

export default function SignInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signUp({ name, email, password });

      navigate("/");
    }
    catch (error) {
      window.alert(error.response?.data);
    }
  };

  return (
    <FormStyled onSubmit={handleSubmit}>
      <InputStyled
        type="string"
        name="name"
        placeholder="Nome"
        value={name}
        onChange={e => setName(e.target.value)}
        required
      />
      <InputStyled
        type="email"
        name="email"
        placeholder="E-mail"
        value={email}
        onChange={e => setEmail(e.target.value)}
        required
      />
      <InputStyled
        type="password"
        name="password"
        placeholder="Senha"
        value={password}
        onChange={e => setPassword(e.target.value)}
        required
      />
      <InputStyled
        type="password"
        name="passwordConfirmation"
        placeholder="Confirme a senha"
        value={passwordConfirmation}
        onChange={e => setPasswordConfirmation(e.target.value)}
        required
      />
      <ButtonStyled>
        <p>Cadastrar</p>
      </ButtonStyled>
    </FormStyled>
  );
}
