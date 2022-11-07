import styled, { css } from "styled-components";
import { Brain } from "@styled-icons/boxicons-regular/Brain";
import { Coffee } from "@styled-icons/boxicons-solid/Coffee";
import { ThreeDots } from "@styled-icons/bootstrap/ThreeDots";
import { SkipNext } from "@styled-icons/material-rounded/SkipNext";
import { Play } from "@styled-icons/fa-solid/Play";
import { Pause } from "@styled-icons/fa-solid/Pause";

const iconCSS = css`
  height: 32px;
  width: 32px;
  color: var(--text);
`;

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

  height: 48px;

  background: var(--secondary);

  border: 2px solid var(--text);
  border-radius: 9999px;
`;

export const MenuButtons = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 340px;
`;

export const CountDown = styled.h2`
  font-weight: 100;
  font-size: 256px;
  margin: 0;
`;

export const IconWorking = styled(Brain)`
  width: 32px;
  height: 32px;
`;

export const IconBreak = styled(Coffee)`
  width: 32px;
  height: 32px;
`;

export const SettingsButton = styled.button`
  width: 80px;
  height: 80px;
  background-color: var(--secondary);
  border: none;
  border-radius: 24px;
`;

export const Start = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 24px;
  width: 128px;
  height: 96px;
  background-color: var(--primary);
`;

export const Next = styled.button`
  width: 80px;
  height: 80px;
  background-color: var(--secondary);
  border: none;
  border-radius: 24px;
`;

export const IconSettings = styled(ThreeDots)`
  ${iconCSS}
`;

export const IconPlay = styled(Play)`
  ${iconCSS}
`;

export const IconPause = styled(Pause)`
  ${iconCSS}
`;

export const IconNext = styled(SkipNext)`
  ${iconCSS}
`;
