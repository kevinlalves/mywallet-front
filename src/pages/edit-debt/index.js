import PageStyled from "../../styles/Page.styled";
import Header from "../../components/header/Header";
import EntryForm from "../../components/entryForm/EntryForm";
import { useParams } from "react-router-dom";

const EditDebtPage = () => {
  const { id } = useParams();

  return (
    <PageStyled>
      <Header text="Editar saída" />
      <EntryForm text="Atualizar saída" id={id} />
    </PageStyled>
  );
};

export default EditDebtPage;
