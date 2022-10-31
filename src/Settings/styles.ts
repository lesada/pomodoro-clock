import styled from "styled-components";
import { Close } from "@styled-icons/evil/Close";

export const Modal = styled.div`
  position: absolute;
  padding: 0px 0px 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  background-color: #0d0404;
  width: 400px;
  height: 80%;
  border-radius: 24px;
  border: 2px solid white;
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1.5;
  color: #fff2f2;
  width: 400px;

  h2 {
    font-size: 24px;
    margin: 0;
    font-weight: 700;
    margin: 24px;
  }
`;

export const IconClose = styled(Close)`
  width: 24px;
  height: 24px;
  margin: 24px;
  cursor: pointer;
`;

export const Option = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  width: 100%;
  p {
    padding: 0 24px;
  }
`;
