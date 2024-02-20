import styled from "styled-components";

import breakpoints from "@/constants/breakpoints";

export const Background = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100vw;
  height: 100vh;

  padding: 5rem;

  @media screen and (max-width: ${breakpoints.sm}) {
    padding: 0;
  }
`;

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 74rem;
  width: 100%;
  min-height: 36rem;
  height: fit-content;

  background-color: ${({ theme }) => theme.gray[800]};
  border-radius: 8px;
  padding: 2.5rem;
`;
