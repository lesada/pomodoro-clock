import React from "react";

import {
  Container,
  InputButtons,
  InputButton,
  UpIcon,
  DownIcon,
} from "./styles";

const Input: React.FC = () => {
  return (
    <Container>
      <input type="number" defaultValue="25" />
      <InputButtons>
        <InputButton>
          <UpIcon />
        </InputButton>
        <InputButton>
          <DownIcon />
        </InputButton>
      </InputButtons>
    </Container>
  );
};

export default Input;
