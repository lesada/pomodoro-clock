import { ButtonHTMLAttributes } from "react";

import { Container } from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "confirm" | "danger";
}

function Button({ variant = "confirm", children, ...props }: ButtonProps) {
  return (
    <Container {...props} $variant={variant}>
      {children}
    </Container>
  );
}

export default Button;
