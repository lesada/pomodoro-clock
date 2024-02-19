import styled from "styled-components";

export const Container = styled.div`
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
