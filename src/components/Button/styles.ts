import styled from "styled-components";

export const Container = styled.button<{ variant: "primary" | "secondary" }>`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  color: white;
  background-color: ${({ variant }) =>
    variant === "primary" ? "blue" : "green"};
`;
