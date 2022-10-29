import styled from "styled-components";
import { Brain } from "@styled-icons/boxicons-regular/Brain";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const State = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 8px 16px;

  font-weight: 500;
  font-size: 24px;

  width: 136px;
  height: 48px;

  background: var(--background);

  border: 2px solid var(--principal);
  border-radius: 9999px;
`;

export const CountDown = styled.h2`
  font-weight: 100;
  font-size: 256px;
  margin: 0;
`;

export const Icon = styled(Brain)`
  width: 32px;
  height: 32px;
`;
