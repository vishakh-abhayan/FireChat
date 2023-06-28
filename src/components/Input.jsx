import { MdAttachFile } from "react-icons/md";
import { BiImageAdd } from "react-icons/bi";

function Input() {
  return (
    <div className="input">
      <input type="text" placeholder="type something...." />
      <div className="send">
        <MdAttachFile size={24} className="icons" />
        <input type="text" id="file" style={{ display: "none" }} />
        <label htmlFor="file">
          <BiImageAdd size={24} className="icons" />
        </label>
        <button>Send</button>
      </div>
    </div>
  );
}

export default Input;
