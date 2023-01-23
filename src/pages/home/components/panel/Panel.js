import PanelButton from "../panelButton/PanelButton";
import PanelStyled from "./Panel.styled";

const Panel = () => {
  return (
    <PanelStyled>
      <PanelButton type="profit" text="Nova entrada" />
      <PanelButton type="debt" text="Nova saída" />
    </PanelStyled>
  );
}

export default Panel;
