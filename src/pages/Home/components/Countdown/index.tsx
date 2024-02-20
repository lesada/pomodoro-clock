import { Container, Dot, Group, Separator } from "./styles";

interface CountdownProps {
  minutes: string;
  seconds: string;
}

function Countdown({ minutes, seconds }: CountdownProps) {
  return (
    <Container>
      <Group>
        <span>{minutes[0]}</span>
        <span>{minutes[1]}</span>
      </Group>
      <Separator>
        <Dot />
        <Dot />
      </Separator>
      <Group>
        <span>{seconds[0]}</span>
        <span>{seconds[1]}</span>
      </Group>
    </Container>
  );
}

export default Countdown;
