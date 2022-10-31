import React from "react";

import { Container } from "./styles";

interface ISwitch {
  setIsChecked: (settings: boolean) => void;
  isChecked: boolean;
}

const Switch: React.FC<ISwitch> = ({ isChecked, setIsChecked }) => {
  return (
    <Container>
      <label className="switch">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={() => setIsChecked(!isChecked)}
        />
        <span className="Switch round"></span>
      </label>
    </Container>
  );
};

export default Switch;
