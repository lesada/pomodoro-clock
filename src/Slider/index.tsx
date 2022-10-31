import React from "react";

import { Container } from "./styles";

interface props {
  setIsChecked: (settings: boolean) => void;
  isChecked: boolean;
}

const Slider: React.FC<props> = ({ isChecked, setIsChecked }) => {
  return (
    <Container>
      <label className="switch">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={() => setIsChecked(!isChecked)}
        />
        <span className="slider round"></span>
      </label>
    </Container>
  );
};

export default Slider;
