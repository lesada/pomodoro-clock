import { Fragment } from "react";
import GlobalStyle from "./styles/globalStyles";
import styled from "styled-components";
import Timer from "./components/Timer";
import { createContext } from "react";

export const ThemeContext = createContext({
  theme: "",
  setTheme: (theme: string) => {},
});

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <Wrapper>
        <Timer />
      </Wrapper>
    </Fragment>
  );
}

export default App;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;
