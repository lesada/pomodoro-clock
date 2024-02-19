import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3.5rem;
`;

const Button = styled.button`
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
`;

export const StartButton = styled(Button)`
  background-color: ${({ theme }) => theme.green[500]};

  &:hover:not(:disabled) {
    background-color: ${({ theme }) => theme.green[700]};
  }
`;

export const StopButton = styled(Button)`
  background-color: ${({ theme }) => theme.red[500]};

  &:hover:not(:disabled) {
    background-color: ${({ theme }) => theme.red[700]};
  }
`;
