import { ThemeProvider } from "styled-components";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Container } from "./components/styles/Container.styled";
import GlobalStyles from "./components/styles/Global";
import { MyTheme } from "./components/styles/MyTheme.styled";
import Home from "./Home";
import { AppRoutes } from "./Routes";

const theme = MyTheme;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <AppRoutes />
      </>
    </ThemeProvider>
  );
}

export default App;
