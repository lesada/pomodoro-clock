import styled from "styled-components";
import { UpArrow } from "@styled-icons/boxicons-solid/UpArrow";
import { DownArrow } from "@styled-icons/boxicons-solid/DownArrow";

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 75px;
  height: 40px;
  margin: 0 25px;
  border: 1px solid var(--border);
  border-radius: 8px;
  overflow: hidden;

  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
  }

  input[type="number"] {
    -moz-appearance: textfield;
  }

  input {
    width: 100%;
    height: 100%;
    background-color: transparent;
    color: var(--text);
    font-size: 16px;
    border: none;
    text-align: center;
    outline: none;
  }
`;

export const InputButtons = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InputButton = styled.button`
  background-color: transparent;
  flex: 1;
  width: 25px;
  border: none;
  border-left: 2px solid var(--border);
  &.upButton {
    border-bottom: 1px solid var(--border);
  }
  &.downButton {
    border-top: 1px solid var(--border);
  }
`;

export const UpIcon = styled(UpArrow)`
  color: var(--text);
`;

export const DownIcon = styled(DownArrow)`
  color: var(--text);
`;
