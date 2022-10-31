import React, { useEffect } from "react";
import Slider from "../Slider";
import Input from "../Input";

import { Modal, ModalHeader, IconClose, Option } from "./styles";
import { useFormik } from "formik";
import { Carousel } from "styled-icons/boxicons-regular";

interface ISettings {
  closeModal: () => void;
}

const Settings: React.FC<ISettings> = ({ closeModal }) => {
  const { values, setFieldValue, handleSubmit } = useFormik({
    initialValues: {
      darkMode: false,
      autoResume: false,
      sound: false,
      notifications: false,

      focusLength: 25,
      pomodoros: 3,
      shortBreak: 5,
      longBreak: 10,
    },
    onSubmit: (val) => {
      //
    },
  });

  useEffect(() => {
    return () => {
      handleSubmit();
    };
  }, []);

  return (
    <Modal>
      <ModalHeader>
        <h2>Settings</h2>
        <IconClose onClick={() => closeModal()} />
      </ModalHeader>
      <Option>
        <p>Dark Mode</p>
        <Slider
          setIsChecked={(e) => setFieldValue("darkMode", e)}
          isChecked={values.darkMode}
        />
      </Option>
      <Option>
        <p>Focus length</p>
        <Input
          value={values.focusLength}
          onChange={(e) => setFieldValue("focusLength", e)}
        />
      </Option>
      <Option>
        <p>Pomodoros until long break</p>
        <Input
          value={values.pomodoros}
          onChange={(e) => setFieldValue("pomodoros", e)}
        />
      </Option>
      <Option>
        <p>Short break length</p>
        <Input
          value={values.shortBreak}
          onChange={(e) => setFieldValue("shortBreak", e)}
        />
      </Option>
      <Option>
        <p>Long break length</p>
        <Input
          value={values.longBreak}
          onChange={(e) => setFieldValue("longBreak", e)}
        />
      </Option>
      <Option>
        <p>Auto resume timer</p>
        <Slider
          setIsChecked={(e) => setFieldValue("autoResume", e)}
          isChecked={values.autoResume}
        />
      </Option>
      <Option>
        <p>Sound</p>
        <Slider
          setIsChecked={(e) => setFieldValue("sound", e)}
          isChecked={values.sound}
        />
      </Option>
      <Option>
        <p>Notifications</p>
        <Slider
          setIsChecked={(e) => setFieldValue("notifications", e)}
          isChecked={values.notifications}
        />
      </Option>
    </Modal>
  );
};

export default Settings;
