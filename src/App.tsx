import { Fragment, useState } from "react";
import GlobalStyle from "./styles/globalStyles";
import styled, { ThemeProvider } from "styled-components";
import Timer from "./components/Timer";
import { lightTheme, darkTheme } from "./styles/themes";

function App() {
  const [isDark, setIsDark] = useState(true);
  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <Fragment>
        <GlobalStyle />
        <Wrapper>
          <Timer setIsDark={setIsDark} />
        </Wrapper>
      </Fragment>
    </ThemeProvider>
  );
}

export default App;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: var(--background);
`;
