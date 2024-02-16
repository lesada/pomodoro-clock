import { Play } from "phosphor-react";

import {
  Button,
  Container,
  Countdown,
  Form,
  Separator,
  Wrapper,
} from "./styles";

function Home() {
  return (
    <Container>
      <Form action="">
        <Wrapper>
          <label htmlFor="task">I'll work on</label>
          <input type="text" id="task" />

          <label htmlFor="minutesAmount">for</label>
          <input type="number" id="minutesAmount" />

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
