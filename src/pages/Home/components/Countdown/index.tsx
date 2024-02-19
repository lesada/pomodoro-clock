import { Container, Separator } from "./styles";

interface CountdownProps {
  minutes: string;
  seconds: string;
}

function Countdown({ minutes, seconds }: CountdownProps) {
  return (
    <Container>
      <span>{minutes[0]}</span>
      <span>{minutes[1]}</span>
      <Separator>:</Separator>
      <span>{seconds[0]}</span>
      <span>{seconds[1]}</span>
    </Container>
  );
}

export default Countdown;
