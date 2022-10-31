import React from "react";

import { Container } from "./styles";

const Slider: React.FC = () => {
  return (
    <Container>
      <label className="switch">
        <input type="checkbox" />
        <span className="slider round"></span>
      </label>
    </Container>
  );
};

export default Slider;
