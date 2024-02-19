import { HandPalm, Play } from "phosphor-react";
import { FormProvider } from "react-hook-form";

import Countdown from "./components/Countdown";
import NewCycle from "./components/NewCycle";
import useHome from "./hook";

import { Container, Form, StartButton, StopButton } from "./styles";

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
            <StopButton type="button" onClick={handleInterruptCycle}>
              <HandPalm size={24} />
              Stop
            </StopButton>
          ) : (
            <StartButton type="submit" disabled={!hasValues}>
              <Play size={24} /> Start
            </StartButton>
          )}
        </FormProvider>
      </Form>
    </Container>
  );
}

export default Home;
