import { ThemeProvider } from "styled-components";
import colors from "./constants/colors";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import SignInPage from "./pages/sign-in";
import SignUpPage from "./pages/sign-up";
import NewProfitPage from "./pages/new-profit";
import HomePage from "./pages/home";
import NewDebtPage from "./pages/new-debt";
import EditProfitPage from "./pages/edit-profit";
import EditDebtPage from "./pages/edit-debt";

export default function App() {
  return (
    <ThemeProvider theme={{ colors }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignInPage />} />
          <Route path="/cadastro" element={<SignUpPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/nova-entrada" element={<NewProfitPage />} />
          <Route path="/nova-saida" element={<NewDebtPage />} />
          <Route path="/editar-entrada/:id" element={<EditProfitPage />} />
          <Route path="/editar-saida/:id" element={<EditDebtPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
