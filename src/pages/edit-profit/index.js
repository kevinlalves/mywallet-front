import { useParams } from "react-router-dom";
import EntryForm from "../../components/entryForm/EntryForm";
import Header from "../../components/header/Header";
import PageStyled from "../../styles/Page.styled";

const EditProfitPage = () => {
  const { id } = useParams();

  return (
    <PageStyled>
      <Header text="Editar entrada" />
      <EntryForm text="Atualizar entrada" id={id} />
    </PageStyled>
  );
};

export default EditProfitPage;
