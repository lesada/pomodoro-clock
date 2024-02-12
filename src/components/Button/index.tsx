import { Container } from "./styles";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

function Button({ variant = "primary", children, ...props }: ButtonProps) {
  return (
    <Container variant={variant} {...props}>
      {children}
    </Container>
  );
}

export default Button;
