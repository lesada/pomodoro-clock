import styled, { css } from "styled-components";
import { ThreeDots } from "@styled-icons/bootstrap/ThreeDots";
import { SkipNext } from "@styled-icons/material-rounded/SkipNext";
import { Play } from "@styled-icons/fa-solid/Play";

const iconCSS = css`
  height: 32px;
  width: 32px;
  color: #ffd9d9;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 320px;
`;

export const Settings = styled.button`
  width: 80px;
  height: 80px;
  background-color: #ff4c4c26;
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
  background-color: #ff4c4cb5;
`;

export const Next = styled.button`
  width: 80px;
  height: 80px;
  background-color: #ff4c4c26;
  border: none;
  border-radius: 24px;
`;

export const IconSettings = styled(ThreeDots)`
  ${iconCSS}
`;

export const IconPlay = styled(Play)`
  ${iconCSS}
`;

export const IconNext = styled(SkipNext)`
  ${iconCSS}
`;
