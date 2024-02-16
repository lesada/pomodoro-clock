import styled from "styled-components";

export const Background = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100vw;
  height: 100vh;

  padding: 5rem;
`;

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 74rem;
  width: 100%;
  height: 100%;

  background-color: ${({ theme }) => theme.gray[800]};
  border-radius: 8px;
  padding: 2.5rem;
`;
