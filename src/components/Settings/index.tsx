import React from "react";
import Switch from "../Switch";
import Input from "../Input";

import { Modal, ModalHeader, IconClose, Option } from "./styles";
import { useFormik } from "formik";

interface ISettings {
  closeModal: () => void;
  className: string;
  sendForm: any;
}

const Settings: React.FC<ISettings> = ({ sendForm, closeModal, className }) => {
  const { values, setFieldValue, handleSubmit } = useFormik({
    initialValues: {
      darkMode: true,
      autoResume: true,
      sound: false,

      focusLength: 25,
      pomodoros: 3,
      shortBreak: 5,
      longBreak: 10,
    },
    onSubmit: (val) => {
      sendForm(val);
    },
  });

  return (
    <Modal className={className}>
      <ModalHeader>
        <h2>Settings</h2>
        <IconClose
          onClick={() => {
            handleSubmit();
            closeModal();
          }}
          type="submit"
        />
      </ModalHeader>
      <Option>
        <p>Dark Mode</p>
        <Switch
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
        <Switch
          setIsChecked={(e) => setFieldValue("autoResume", e)}
          isChecked={values.autoResume}
        />
      </Option>
      <Option>
        <p>Sound</p>
        <Switch
          setIsChecked={(e) => setFieldValue("sound", e)}
          isChecked={values.sound}
        />
      </Option>
    </Modal>
  );
};

export default Settings;
