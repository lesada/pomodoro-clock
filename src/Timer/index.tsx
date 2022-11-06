import React, { useEffect, useState } from "react";

import {
  Container,
  State,
  CountDown,
  IconWorking,
  IconBreak,
  SettingsButton,
  MenuButtons,
  Start,
  Next,
  IconSettings,
  IconPlay,
  IconNext,
  IconPause,
} from "./styles";

import Settings from "../Settings";

export const Timer: React.FC = () => {
  const [form, setForm] = useState({
    darkMode: false,
    autoResume: false,
    sound: false,
    notifications: false,

    focusLength: 25,
    pomodoros: 3,
    shortBreak: 5,
    longBreak: 10,
  });

  const interval: any = React.useRef();

  const [settingsOpen, setSettingsOpen] = useState(false);
  const [state, setState] = useState("Focus");
  const [focusTime, setFocusTime] = useState(form.focusLength + ":00");
  const [shortBreak, setShortBreak] = useState(form.shortBreak + ":00");
  const [longBreak, setLongBreak] = useState(form.longBreak + ":00");
  const [pomodorosUntil, setPomodorosUntil] = useState(form.pomodoros);
  const [time, setTime] = useState(focusTime);
  const [timerRuning, setTimerRuning] = useState(false);
  const [counting, setCounting] = useState(1);

  const timeArray: string[] = time?.split(":");
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
    if (state === "Focus") {
      if (counting === pomodorosUntil) {
        setState("Long Break");
        setTime(longBreak);
        setCounting(0);
      } else {
        setState("Short Break");
        setTime(shortBreak);
      }
    }
    if (state === "Short Break" || state === "Long Break") {
      setTime(focusTime);
      setState("Focus");
      setCounting(counting + 1);
    }
    stopTimer();
  };

  const isModalOpen = () => {
    setSettingsOpen(true);
  };

  const updateValues = () => {
    setState("Focus");
    setTime(form.focusLength + ":00");
    setFocusTime(form.focusLength + ":00");
    setShortBreak(form.shortBreak + ":00");
    setLongBreak(form.longBreak + ":00");
    setPomodorosUntil(form.pomodoros);
  };

  useEffect(() => {
    updateValues();
  }, [form]);

  return (
    <Container>
      <State>
        {state === "Focus" ? <IconWorking /> : <IconBreak />}
        {state}
      </State>
      <CountDown className="countDown">{time}</CountDown>
      <MenuButtons>
        <SettingsButton onClick={isModalOpen}>
          <IconSettings />
        </SettingsButton>
        <Start
          onClick={() => {
            timerRuning ? stopTimer() : startTimer();
          }}
        >
          {timerRuning ? <IconPause /> : <IconPlay />}
        </Start>
        <Next onClick={skipTimer}>
          <IconNext />
        </Next>
      </MenuButtons>
      <Settings
        className={!settingsOpen ? "closed" : ""}
        sendForm={setForm}
        closeModal={() => {
          setSettingsOpen(false);
        }}
      />
    </Container>
  );
};

export default Timer;
