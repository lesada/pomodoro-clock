import React from "react";
import Slider from "../Slider";
import Input from "../Input";

import { Modal, ModalHeader, IconClose, Option } from "./styles";

interface ModalProps {
  setSettingsOpen: (settings: boolean) => void;
}

const Settings: React.FC<ModalProps> = ({ setSettingsOpen }) => {
  return (
    <Modal>
      <ModalHeader>
        <h2>Settings</h2>
        <IconClose onClick={() => setSettingsOpen(false)} />
      </ModalHeader>
      <Option>
        <p>Dark Mode</p>
        <Slider />
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
        <Slider />
      </Option>
      <Option>
        <p>Sound</p>
        <Slider />
      </Option>
      <Option>
        <p>Notifications</p>
        <Slider />
      </Option>
    </Modal>
  );
};

export default Settings;
