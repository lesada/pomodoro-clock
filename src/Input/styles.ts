import styled from "styled-components";
import { UpArrow } from "@styled-icons/boxicons-solid/UpArrow";
import { DownArrow } from "@styled-icons/boxicons-solid/DownArrow";

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 75px;
  height: 40px;
  margin: 0 25px;
  border: 1px solid #ffffff26;
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
    color: #fff2f2;
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
  border-left: 2px solid #ffffff26;
  &.upButton {
    border-bottom: 1px solid #ffffff26;
  }
  &.downButton {
    border-top: 1px solid #ffffff26;
  }
`;

export const UpIcon = styled(UpArrow)`
  color: #fff2f2;
`;

export const DownIcon = styled(DownArrow)`
  color: #fff2f2;
`;
