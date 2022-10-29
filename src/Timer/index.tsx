import React, { useState } from "react";

import {
  Container,
  State,
  CountDown,
  Icon,
  Settings,
  MenuButtons,
  Start,
  Next,
  IconSettings,
  IconPlay,
  IconNext,
} from "./styles";

export const Timer: React.FC = () => {
  const [time, setTime] = useState("25:00");

  const startTimer = () => {
    let currentTime: string | undefined =
      document.querySelector(".countDown")?.innerHTML;
    const timeArray: string[] | undefined = currentTime?.split(":");
    const duration = parseInt(timeArray![0]) * 60 + parseInt(timeArray![1]) - 1;

    let timer: number = duration,
      minutes,
      seconds;

    let countdown = setInterval(function () {
      minutes = Math.floor(timer / 60);
      seconds = Math.floor(timer % 60);

      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      setTime(minutes + ":" + seconds);

      if (--timer < 0) {
        clearInterval(countdown);
      }
    }, 1000);
  };

  return (
    <Container>
      <State>
        <Icon />
        Focus
      </State>
      <CountDown className="countDown">{time}</CountDown>
      <MenuButtons>
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
      </MenuButtons>
    </Container>
  );
};

export default Timer;
