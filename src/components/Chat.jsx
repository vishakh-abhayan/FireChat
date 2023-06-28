import { FiMoreHorizontal } from "react-icons/fi";
import { BsFillCameraVideoFill } from "react-icons/bs";
import { HiUserAdd } from "react-icons/hi";
import Messages from "./Messages";
import Input from "./Input";

function Chat() {
  return (
    <div className="chat">
      <div className="chatInfo">
        <span>Jane</span>
        <div className="chatIcons">
          <BsFillCameraVideoFill size={20} className="icons" />
          <HiUserAdd size={20} className="icons" />
          <FiMoreHorizontal size={20} className="icons" />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
}

export default Chat;
