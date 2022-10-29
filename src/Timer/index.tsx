import React, { useState } from "react";
import Controls from "../Controls";

import { Container, State, CountDown, Icon } from "./styles";

const Timer: React.FC = () => {
  const [parentName, setParentName] = useState<string>("John Obi");
  const [time, setTime] = useState("00:05");
  return (
    <Container>
      <State>
        <Icon />
        Focus
      </State>
      <CountDown className="countDown">{time}</CountDown>
      <Controls />
    </Container>
  );
};

export default Timer;
