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

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  flex-wrap: wrap;

  width: 100%;
  color: ${({ theme }) => theme.gray[100]};
  font-size: 1.125rem;
  font-weight: 700;
`;

const baseInput = styled.input`
  height: 2.5rem;
  border: 0;
  font-weight: 700;
  font-size: 1.125rem;
  color: ${({ theme }) => theme.gray[100]};
  padding: 0 0.5rem;
`;

export const TaskInput = styled(baseInput)`
  flex: 1;
  border-bottom: 2px solid ${({ theme }) => theme.gray[500]};

  &:focus-visible {
    outline: 0;
    border-bottom: 2px solid ${({ theme }) => theme.green[500]};
  }
`;

export const NumberInputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4.5rem;

  border-bottom: 2px solid ${({ theme }) => theme.gray[500]};
  margin: 0.5rem;

  &:focus-within {
    outline: 0;
    border-bottom: 2px solid ${({ theme }) => theme.green[500]};
  }
`;

export const NumberInput = styled(baseInput)`
  width: 100%;
  border: 0;
  outline: 0;
  text-align: center;

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    appearance: none;
    margin: 0;
  }
`;

export const Countdown = styled.div`
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
`;

export const Separator = styled.span`
  padding: 2rem 0;
  color: ${({ theme }) => theme.green[500]};
  width: 4rem;
  overflow: hidden;
  display: flex;
  justify-content: center;
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
