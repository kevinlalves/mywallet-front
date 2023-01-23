import EntryForm from "../../components/entryForm/EntryForm";
import Header from "../../components/header/Header";
import PageStyled from "../../styles/Page.styled";

const NewDebtPage = () => {
  return (
    <PageStyled>
      <Header text="Nova saída" />
      <EntryForm text="Salvar saída" />
    </PageStyled>
  );
};

export default NewDebtPage;
