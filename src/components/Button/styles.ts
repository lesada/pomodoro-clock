import styled from "styled-components";

export const Container = styled.button<{ variant: "primary" | "secondary" }>`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  color: white;
  background-color: ${({ variant, theme }) =>
    variant === "primary" ? theme.green[700] : theme.red[500]};
`;
