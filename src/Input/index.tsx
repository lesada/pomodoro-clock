import React from "react";

import {
  Container,
  InputButtons,
  InputButton,
  UpIcon,
  DownIcon,
} from "./styles";

interface IInput {
  value: number;
  onChange: (value: number) => void;
}

const Input: React.FC<IInput> = ({ value, onChange }) => {
  return (
    <Container>
      <input
        type="number"
        onChange={(e) => onChange(Math.min(60, parseInt(e.target.value)))}
        value={value}
        max={60}
      />
      <InputButtons>
        <InputButton
          className="upButton"
          onClick={() => onChange(Math.min(60, value + 5))}
        >
          <UpIcon />
        </InputButton>
        <InputButton
          className="downButton"
          onClick={() => onChange(Math.min(60, Math.max(0, value - 5)))}
        >
          <DownIcon />
        </InputButton>
      </InputButtons>
    </Container>
  );
};

export default Input;
