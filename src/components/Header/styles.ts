import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  nav {
    display: flex;
    gap: 0.5rem;

    a {
      width: 3rem;
      height: 3rem;

      display: flex;
      align-items: center;
      justify-content: center;

      color: ${({ theme }) => theme.gray[100]};
      border: 3px solid transparent;

      transition: border-color 0.2s;

      &:hover {
        border-bottom-color: ${({ theme }) => theme.green[500]};
      }

      &.active {
        color: ${({ theme }) => theme.green[500]};
      }
    }
  }
`;
