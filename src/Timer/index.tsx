import React from "react";

import { Container, State, CountDown, Icon } from "./styles";

const Timer: React.FC = () => {
  return (
    <Container>
      <State>
        <Icon />
        Focus
      </State>
      <CountDown>25:00</CountDown>
    </Container>
  );
};

export default Timer;
