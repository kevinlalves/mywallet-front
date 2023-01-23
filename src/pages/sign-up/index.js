import { Link } from "react-router-dom";
import PageStyled from "../../styles/Page.styled";
import TitleStyled from "../../styles/Title.styled";
import SignOutForm from "./components/form/Form";

export default function SignUpPage() {
  return (
    <PageStyled justify="center">
      <TitleStyled>
        <p>MyWallet</p>
      </TitleStyled>
      <SignOutForm />
      <p>
        <Link to="/">Já tem uma conta? Entre agora!</Link>
      </p>
    </PageStyled>
  );
}
