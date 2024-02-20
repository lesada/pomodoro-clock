import styled from "styled-components";

import breakpoints from "@/constants/breakpoints";

export const Container = styled.div`
  display: flex;
  gap: 1rem;

  font-size: 10rem;
  line-height: 8rem;
  color: ${({ theme }) => theme.gray[100]};
  font-family: "Roboto Mono", monospace;

  span {
    background-color: ${({ theme }) => theme.gray[700]};
    padding: 2rem 1rem;
    border-radius: 8px;
  }

  @media screen and (max-width: ${breakpoints.md}) {
    font-size: 5.5rem;
    line-height: 5rem;
  }

  @media screen and (max-width: ${breakpoints.sm}) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Group = styled.div`
  display: flex;
  gap: 1rem;
`;

export const Separator = styled.span`
  padding: 2rem 0;
  color: ${({ theme }) => theme.green[500]};
  min-width: 4rem;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  @media screen and (max-width: ${breakpoints.sm}) {
    text-align: center;
    flex-direction: row;
  }
`;

export const Dot = styled.div`
  flex-shrink: 0;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.green[500]};
`;
