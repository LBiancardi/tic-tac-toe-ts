import { ThemeProvider } from "styled-components";
import GlobalStyles from "./components/styles/Global";
import { MyTheme } from "./components/styles/MyTheme.styled";
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
