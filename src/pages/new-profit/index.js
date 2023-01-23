import EntryForm from "../../components/entryForm/EntryForm";
import Header from "../../components/header/Header";
import PageStyled from "../../styles/Page.styled";

const NewProfitPage = () => {
  return (
    <PageStyled>
      <Header text="Nova entrada" />
      <EntryForm text="Salvar entrada" />
    </PageStyled>
  );
};

export default NewProfitPage;
