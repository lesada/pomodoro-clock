import { Minus, Plus } from "phosphor-react";
import { useFormContext } from "react-hook-form";

import {
  Container,
  NumberInput,
  NumberInputContainer,
  TaskInput,
} from "./styles";

interface NewCycleProps {
  minutesAmount: number;
}

function NewCycle({ minutesAmount }: NewCycleProps) {
  const { register, setValue } = useFormContext();

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
    </Container>
  );
}

export default NewCycle;
