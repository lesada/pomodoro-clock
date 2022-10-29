import React, { useState } from "react";

import {
  Container,
  State,
  CountDown,
  IconState,
  Settings,
  MenuButtons,
  Start,
  Next,
  IconSettings,
  IconPlay,
  IconNext,
  IconPause,
} from "./styles";

export const Timer: React.FC = () => {
  const [time, setTime] = useState("25:00");
  const [timerRuning, setTimerRuning] = useState(false);

  const startTimer = () => {
    const timeArray: string[] | undefined = time?.split(":");
    const duration = parseInt(timeArray![0]) * 60 + parseInt(timeArray![1]) - 1;
    setTimerRuning(true);

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

  const stopTimer = () => {
    setTimerRuning(false);
  };

  return (
    <Container>
      <State>
        <IconState />
        Focus
      </State>
      <CountDown className="countDown">{time}</CountDown>
      <MenuButtons>
        <Settings>
          <IconSettings />
        </Settings>
        <Start
          onClick={() => {
            {
              timerRuning ? stopTimer() : startTimer();
            }
          }}
        >
          {timerRuning ? <IconPause /> : <IconPlay />}
        </Start>
        <Next>
          <IconNext />
        </Next>
      </MenuButtons>
    </Container>
  );
};

export default Timer;
