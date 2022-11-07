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

interface ITimer {
  setIsDark: any;
}

export const Timer: React.FC<ITimer> = ({ setIsDark }) => {
  const [form, setForm] = useState({
    darkMode: true,
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
  const [resume, setResume] = useState(form.autoResume);
  const [time, setTime] = useState(focusTime);
  const [timerRuning, setTimerRuning] = useState(false);
  const [counting, setCounting] = useState(1);

  const startTimer = (t: string) => {
    let timeArray: string[];
    timeArray = t?.split(":");

    setTimerRuning(true);
    let duration = parseInt(timeArray![0]) * 60 + parseInt(timeArray![1]) - 1;
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
    stopTimer();

    if (state === "Focus") {
      if (counting === pomodorosUntil) {
        setState("Long Break");
        setTime(longBreak);
        setCounting(0);
        if (resume) startTimer(longBreak);
      } else {
        setState("Short Break");
        setTime(shortBreak);
        if (resume) startTimer(shortBreak);
      }
    } else {
      setState("Focus");
      setTime(focusTime);
      setCounting(counting + 1);
      if (resume) startTimer(focusTime);
    }
  };

  useEffect(() => {
    setState("Focus");
    setTime(
      form.focusLength >= 10
        ? form.focusLength + ":00"
        : "0" + form.focusLength + ":00"
    );
    setFocusTime(
      form.focusLength >= 10
        ? form.focusLength + ":00"
        : "0" + form.focusLength + ":00"
    );
    setShortBreak(
      form.shortBreak >= 10
        ? form.shortBreak + ":00"
        : "0" + form.shortBreak + ":00"
    );
    setLongBreak(
      form.longBreak >= 10
        ? form.longBreak + ":00"
        : "0" + form.longBreak + ":00"
    );
    setPomodorosUntil(form.pomodoros);
    setResume(form.autoResume);
    setIsDark(form.darkMode);
  }, [form]);

  return (
    <Container>
      <State>
        {state === "Focus" ? <IconWorking /> : <IconBreak />}
        {state}
      </State>
      <CountDown className="countDown">{time}</CountDown>
      <MenuButtons>
        <SettingsButton
          onClick={() => {
            setSettingsOpen(true);
          }}
        >
          <IconSettings />
        </SettingsButton>
        <Start
          onClick={() => {
            timerRuning ? stopTimer() : startTimer(time);
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
