import { Minus, Play, Plus } from "phosphor-react";
import { useForm } from "react-hook-form";

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
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Wrapper>
          <label htmlFor="task">I'll work on</label>
          <TaskInput
            type="text"
            id="task"
            placeholder="Type your task here"
            {...register("task")}
          />

          <label htmlFor="minutesAmount">for</label>
          <NumberInputContainer>
            <Minus size={24} />
            <NumberInput
              {...register("minutesAmount", {
                valueAsNumber: true,
              })}
              id="minutesAmount"
              type="number"
              step={5}
              max={60}
            />
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
