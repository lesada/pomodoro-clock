import React from "react";

import {
  Container,
  Settings,
  Start,
  Next,
  IconSettings,
  IconPlay,
  IconNext,
} from "./styles";

const Controls: React.FC = () => {
  return (
    <Container>
      <Settings>
        <IconSettings />
      </Settings>
      <Start>
        <IconPlay />
      </Start>
      <Next>
        <IconNext />
      </Next>
    </Container>
  );
};

export default Controls;
