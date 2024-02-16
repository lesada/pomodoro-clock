import { Minus, Play, Plus } from "phosphor-react";

import {
  Button,
  Container,
  Countdown,
  Form,
  NumberInput,
  NumberInputContainer,
  Separator,
  TaskInput,
  Wrapper,
} from "./styles";

function Home() {
  return (
    <Container>
      <Form action="">
        <Wrapper>
          <label htmlFor="task">I'll work on</label>
          <TaskInput type="text" id="task" placeholder="Type your task here" />

          <label htmlFor="minutesAmount">for</label>
          <NumberInputContainer>
            <Minus size={24} />
            <NumberInput type="number" id="minutesAmount" step={5} max={60} />
            <Plus size={24} />
          </NumberInputContainer>

          <span>minutes.</span>
        </Wrapper>
        <Countdown>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </Countdown>
        <Button type="submit">
          <Play size={24} /> Start
        </Button>
      </Form>
    </Container>
  );
}

export default Home;
