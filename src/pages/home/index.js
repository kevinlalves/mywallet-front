import PageStyled from "../../styles/Page.styled";
import Panel from "./components/panel/Panel";
import Transactions from "./components/transactions/Transactions";
import Header from "../../components/header/Header";
import { useContext, useEffect } from "react";
import { UserProviderContext } from "../../providers/UserProvider";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const { user } = useContext(UserProviderContext);

  return (
    <PageStyled justify="flex-start">
      <Header text={`Olá, ${user?.name}`} isHome={true} />
      <Transactions />
      <Panel />
    </PageStyled>
  );
};

export default HomePage;
