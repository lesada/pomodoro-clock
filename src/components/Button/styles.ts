import styled, { css } from "styled-components";

interface ButtonProps {
  $variant?: "confirm" | "danger";
}

const ConfirmButton = css`
  background-color: ${({ theme }) => theme.green[500]};

  &:hover:not(:disabled) {
    background-color: ${({ theme }) => theme.green[700]};
  }
`;

const DangerButton = css`
  background-color: ${({ theme }) => theme.red[500]};

  &:hover:not(:disabled) {
    background-color: ${({ theme }) => theme.red[700]};
  }
`;

export const Container = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  padding: 1rem;
  border-radius: 8px;
  width: 100%;

  font-weight: 700;
  font-size: 1rem;

  color: ${({ theme }) => theme.gray[100]};

  transition: background-color 0.2s;

  &:disabled {
    opacity: 0.7;
  }

  ${({ $variant }) => $variant === "confirm" && ConfirmButton}
  ${({ $variant }) => $variant === "danger" && DangerButton}
`;
