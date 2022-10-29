import React from "react";

import {
  Container,
  Settings,
  Start,
  Next,
  IconSettings,
  IconPlay,
  IconNext,
} from "./styles";

const startTimer = () => {
  let currentTime: string | undefined =
    document.querySelector(".countDown")?.innerHTML;
  console.log(document.querySelector(".countDown"));
  const timeArray: string[] | undefined = currentTime?.split(":");
  const duration = parseInt(timeArray![0]) + parseInt(timeArray![1]);

  let timer: number = duration,
    minutes,
    seconds;

  let countdown = setInterval(function () {
    minutes = Math.floor(timer / 60);
    seconds = Math.floor(timer % 60);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    console.log(minutes + " minutes", seconds + " seconds");
    currentTime = minutes + ":" + seconds;

    if (--timer < 0) {
      clearInterval(countdown);
    }
  }, 1000);
};

const Controls: React.FC = () => {
  return (
    <Container>
      <Settings>
        <IconSettings />
      </Settings>
      <Start
        onClick={() => {
          startTimer();
        }}
      >
        <IconPlay />
      </Start>
      <Next>
        <IconNext />
      </Next>
    </Container>
  );
};

export default Controls;
