import { Link } from "react-router-dom";
import PageStyled from "../../styles/Page.styled";
import TitleStyled from "../../styles/Title.styled";
import SignInForm from "./components/form/Form";

export default function SignInPage() {
  return (
    <PageStyled justify="center">
      <TitleStyled>
        <p>MyWallet</p>
      </TitleStyled>
      <SignInForm />
      <p>
        <Link to="/cadastro">Primeira vez? Cadastre-se!</Link>
      </p>
    </PageStyled>
  );
}
