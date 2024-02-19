import { useState } from "react";

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

interface NewCycleFormData {
  task: string;
  minutesAmount: number;
}

interface Cycle {
  id: string;
  task: string;
  minutesAmount: number;
}

function Home() {
  const [cycles, setCycles] = useState<Cycle[]>([]);
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null);
  const [amountSecondsLeft, setAmountSecondsLeft] = useState(0);

  const { register, handleSubmit, watch, setValue, reset } =
    useForm<NewCycleFormData>({
      defaultValues: {
        task: "",
        minutesAmount: 25,
      },
    });

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

  const onSubmit = (data: NewCycleFormData) => {
    const newCycle: Cycle = {
      id: String(new Date().getTime()),
      task: data.task,
      minutesAmount: data.minutesAmount,
    };

    setCycles([...cycles, newCycle]);

    setActiveCycleId(newCycle.id);

    reset();
  };

  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId);

  const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0;
  const currentSeconds = activeCycle ? totalSeconds - amountSecondsLeft : 0;

  const minutesAmountLeft = Math.floor(currentSeconds / 60);
  const secondsAmountLeft = currentSeconds % 60;

  const minutes = String(minutesAmountLeft).padStart(2, "0");
  const seconds = String(secondsAmountLeft).padStart(2, "0");

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
          <span>{minutes[0]}</span>
          <span>{minutes[1]}</span>
          <Separator>:</Separator>
          <span>{seconds[0]}</span>
          <span>{seconds[1]}</span>
        </Countdown>
        <Button type="submit" disabled={!hasValues}>
          <Play size={24} /> Start
        </Button>
      </Form>
    </Container>
  );
}

export default Home;
