import { useEffect, useState } from "react";

import { differenceInSeconds } from "date-fns";
import { HandPalm, Minus, Play, Plus } from "phosphor-react";
import { useForm } from "react-hook-form";

import {
  Container,
  Countdown,
  Form,
  NumberInput,
  NumberInputContainer,
  Separator,
  StartButton,
  StopButton,
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
  startDate: Date;
  interruptedDate?: Date;
  finishedDate?: Date;
}

function Home() {
  const [cycles, setCycles] = useState<Cycle[]>([]);
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null);
  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0);

  const { register, handleSubmit, watch, setValue, reset } =
    useForm<NewCycleFormData>({
      defaultValues: {
        task: "",
        minutesAmount: 0,
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
      startDate: new Date(),
    };

    setCycles([...cycles, newCycle]);
    setActiveCycleId(newCycle.id);
    setAmountSecondsPassed(0);
    reset();
  };

  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId);

  const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0;
  const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0;

  const minutesAmountLeft = Math.floor(currentSeconds / 60);
  const secondsAmountLeft = currentSeconds % 60;

  const minutes = String(minutesAmountLeft).padStart(2, "0");
  const seconds = String(secondsAmountLeft).padStart(2, "0");

  const handleInterruptCycle = () => {
    setCycles(
      cycles.map((cycle) => {
        if (cycle.id === activeCycleId) {
          return {
            ...cycle,
            interruptedDate: new Date(),
          };
        }
        return cycle;
      })
    );

    setActiveCycleId(null);
    setAmountSecondsPassed(0);
  };

  useEffect(() => {
    let interval: number;
    if (activeCycle) {
      interval = setInterval(() => {
        setAmountSecondsPassed(
          differenceInSeconds(new Date(), activeCycle.startDate)
        );
      }, 1000);

      if (currentSeconds <= 0) {
        setActiveCycleId(null);
        setAmountSecondsPassed(0);
        setCycles((prev) =>
          prev.map((cycle) => {
            if (cycle.id === activeCycleId) {
              return {
                ...cycle,
                finishedDate: new Date(),
              };
            }
            return cycle;
          })
        );
      }
    }
    return () => clearInterval(interval);
  }, [activeCycle, activeCycleId, currentSeconds]);

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
              min={1}
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
        {activeCycle ? (
          <StopButton type="button" onClick={handleInterruptCycle}>
            <HandPalm size={24} />
            Stop
          </StopButton>
        ) : (
          <StartButton type="submit" disabled={!hasValues}>
            <Play size={24} /> Start
          </StartButton>
        )}
      </Form>
    </Container>
  );
}

export default Home;
