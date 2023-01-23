import PageStyled from "../../styles/Page.styled";
import Panel from "./components/panel/Panel";
import Transactions from "./components/transactions/Transactions";
import Header from "../../components/header/Header";

const HomePage = () => {
  return (
    <PageStyled justify="flex-start">
      <Header text="Olá, Fulano" isHome={true} />
      <Transactions />
      <Panel />
    </PageStyled>
  );
};

export default HomePage;
