import { useEffect, useState } from "react";

import { differenceInSeconds } from "date-fns";
import { useForm } from "react-hook-form";

import { Cycle, NewCycleFormData } from "./interfaces";

function useHome() {
  const [cycles, setCycles] = useState<Cycle[]>([]);
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null);
  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0);

  const methods = useForm<NewCycleFormData>({
    defaultValues: {
      task: "",
      minutesAmount: 0,
    },
  });

  const { handleSubmit, watch, reset } = methods;

  const task = watch("task");
  const minutesAmount = watch("minutesAmount");

  const hasValues = task && minutesAmount;

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

  return {
    handleFormSubmit: handleSubmit(onSubmit),
    minutesAmount,
    minutes,
    seconds,
    activeCycle,
    hasValues,
    methods,
    handleInterruptCycle,
  };
}

export default useHome;
