import { HandPalm, Play } from "phosphor-react";
import { FormProvider } from "react-hook-form";

import Button from "@/components/Button";

import Countdown from "./components/Countdown";
import NewCycle from "./components/NewCycle";
import useHome from "./hook";

import { Container, Form } from "./styles";

function Home() {
  const {
    activeCycle,
    handleFormSubmit,
    hasValues,
    minutes,
    minutesAmount,
    seconds,
    handleInterruptCycle,
    methods,
  } = useHome();

  return (
    <Container>
      <Form onSubmit={handleFormSubmit}>
        <FormProvider {...methods}>
          <NewCycle minutesAmount={minutesAmount} />
          <Countdown minutes={minutes} seconds={seconds} />
          {activeCycle ? (
            <Button
              type="button"
              onClick={handleInterruptCycle}
              variant="danger"
            >
              <HandPalm size={24} />
              Stop
            </Button>
          ) : (
            <Button type="submit" disabled={!hasValues}>
              <Play size={24} /> Start
            </Button>
          )}
        </FormProvider>
      </Form>
    </Container>
  );
}

export default Home;
