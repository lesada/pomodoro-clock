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

type NewCycleFormData = {
  task: string;
  minutesAmount: number;
};

function Home() {
  const { register, handleSubmit, watch, setValue } = useForm<NewCycleFormData>(
    {
      defaultValues: {
        task: "",
        minutesAmount: 25,
      },
    }
  );

  const onSubmit = (data: NewCycleFormData) => {
    console.log(data);
  };

  const task = watch("task");
  const minutesAmount = watch("minutesAmount");

  const hasValues = task && minutesAmount;

  const reduceFiveMinutes = () => {
    if (minutesAmount > 5) {
      return setValue("minutesAmount", minutesAmount - 5);
    }
  };

  const increaseFiveMinutes = () => {
    if (minutesAmount <= 55) {
      return setValue("minutesAmount", minutesAmount + 5);
    }
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
            <Minus size={24} onClick={reduceFiveMinutes} />
            <NumberInput
              id="minutesAmount"
              type="number"
              max={60}
              min={5}
              {...register("minutesAmount", {
                valueAsNumber: true,
              })}
            />
            <Plus size={24} onClick={increaseFiveMinutes} />
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
        <Button type="submit" disabled={!hasValues}>
          <Play size={24} /> Start
        </Button>
      </Form>
    </Container>
  );
}

export default Home;
