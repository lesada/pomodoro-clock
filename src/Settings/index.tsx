import React, { useState } from "react";
import Slider from "../Slider";
import Input from "../Input";

import { Modal, ModalHeader, IconClose, Option } from "./styles";

interface ModalProps {
  setSettingsOpen: (settings: boolean) => void;
}

const Settings: React.FC<ModalProps> = ({ setSettingsOpen }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [autoResume, setAutoResume] = useState(false);
  const [sound, setSound] = useState(false);
  const [notifications, setNotifications] = useState(false);

  return (
    <Modal>
      <ModalHeader>
        <h2>Settings</h2>
        <IconClose onClick={() => setSettingsOpen(false)} />
      </ModalHeader>
      <Option>
        <p>Dark Mode</p>
        <Slider setIsChecked={setDarkMode} isChecked={darkMode} />
      </Option>
      <Option>
        <p>Focus length</p>
        <Input />
      </Option>
      <Option>
        <p>Pomodoros until long break</p>
        <Input />
      </Option>
      <Option>
        <p>Short break length</p>
        <Input />
      </Option>
      <Option>
        <p>Long break length</p>
        <Input />
      </Option>
      <Option>
        <p>Auto resume timer</p>
        <Slider setIsChecked={setAutoResume} isChecked={autoResume} />
      </Option>
      <Option>
        <p>Sound</p>
        <Slider setIsChecked={setSound} isChecked={sound} />
      </Option>
      <Option>
        <p>Notifications</p>
        <Slider setIsChecked={setNotifications} isChecked={notifications} />
      </Option>
    </Modal>
  );
};

export default Settings;
