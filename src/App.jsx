import { ThemeProvider } from "styled-components";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Container } from "./components/styles/Container.styled";
import GlobalStyles from "./components/styles/Global";
import { MyTheme } from "./components/styles/MyTheme.styled";
import Home from "./Home";

const theme = MyTheme;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header />
        <Container>
          <Home />
        </Container>
        <Footer />
      </>
    </ThemeProvider>
  );
}

export default App;
