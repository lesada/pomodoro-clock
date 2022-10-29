import { Fragment } from "react";
import GlobalStyle from "./globalStyles";
import styled from "styled-components";
import Timer from "./Timer";
import Controls from "./Controls";

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <Wrapper>
        <Timer />
        <Controls />
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
