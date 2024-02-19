import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { CycleContextProvider } from "./contexts/cycles";
import Routes from "./routes";

import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/theme/default";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CycleContextProvider>
          <Routes />
        </CycleContextProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
