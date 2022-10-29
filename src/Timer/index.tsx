import React, { useState } from "react";

import {
  Container,
  State,
  CountDown,
  IconWorking,
  IconBreak,
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
  const interval: any = React.useRef();
  const focusTime: string = "25:00";
  const breakTime: string = "05:00";
  const longBreakTime: string = "10:00";

  const [state, setState] = useState("Focus");
  const [time, setTime] = useState(focusTime);
  const [timerRuning, setTimerRuning] = useState(false);
  const [counting, setCounting] = useState(1);

  const timeArray: string[] | undefined = time?.split(":");
  const duration = parseInt(timeArray![0]) * 60 + parseInt(timeArray![1]) - 1;

  const startTimer = () => {
    setTimerRuning(true);

    let timer: number = duration,
      minutes,
      seconds;
    interval.current = setInterval(function () {
      minutes = Math.floor(timer / 60);
      seconds = Math.floor(timer % 60);

      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      setTime(minutes + ":" + seconds);
      if (--timer < 0) {
        skipTimer();
      }
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(interval.current);
    setTimerRuning(false);
  };

  const skipTimer = () => {
    if (state == "Focus") {
      if (counting === 4) {
        setState("Long Break");
        setTime(longBreakTime);
        setCounting(0);
      } else {
        setState("Short Break");
        setTime(breakTime);
      }
    }
    if (state == "Short Break" || state == "Long Break") {
      setTime(focusTime);
      setState("Focus");
      setCounting(counting + 1);
    }
    stopTimer();
  };

  return (
    <Container>
      <State>
        {state == "Focus" ? <IconWorking /> : <IconBreak />}
        {state}
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
        <Next onClick={skipTimer}>
          <IconNext />
        </Next>
      </MenuButtons>
    </Container>
  );
};

export default Timer;
