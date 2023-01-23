import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { USER_STORAGE_KEY } from "../../../../providers/UserProvider";
import { signIn } from "../../../../services/mywallet-api";
import ButtonStyled from "../../../../styles/Button.styled";
import FormStyled from "../../../../styles/Form.styled";
import InputStyled from "../../../../styles/Input.styled";

export default function SignInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await signIn({ email, password });
      window.localStorage.setItem(USER_STORAGE_KEY, data);

      navigate("/home");
    }
    catch (error) {
      console.log(error.response?.data);
    }
  };

  return (
    <FormStyled onSubmit={handleSubmit}>
      <InputStyled
        type="string"
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
      <ButtonStyled>
        <p>Entrar</p>
      </ButtonStyled>
    </FormStyled>
  );
}
