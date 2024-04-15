import React, { ChangeEvent } from 'react';
import { IoMicOutline } from "react-icons/io5";
import { IoMdSend } from "react-icons/io";
import { CiFaceSmile } from "react-icons/ci";
import { connect } from 'react-redux'; // Import connect
import { addMessage } from '../../Redux/Chat/action';

export type messageType = {
  message: string,
  type: boolean
}

type propsType = {
  inputMsg: string;
  setInputMsg: any;
  addMessage: (message: messageType) => void; // Prop for addMessage action
}

const Reply = ({ inputMsg,setInputMsg, addMessage }: propsType) => {

  const handleSendMessage = () => {
    if (inputMsg.trim() !== '') {
      // Dispatch addMessage action
      addMessage({
        message: inputMsg.trim(),
        type: true,
      });

      addMessage({
        message: 'How can I help you?',
        type: false,
      });

      setInputMsg(''); // Clear input after sending message
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className="row reply">
      <div className="col-sm-1 col-xs-1 reply-emojis">
        <CiFaceSmile size={24} />
      </div>
      <div className="col-sm-9 col-xs-9 reply-main">
        <textarea
          className="form-control"
          rows={1}
          id="comment"
          value={inputMsg}
          onChange={(e) => setInputMsg(e.target.value)}
          onKeyPress={handleKeyPress} // Add onKeyPress event handler
          placeholder="Type a message..."
        />
      </div>
      <div className="col-sm-1 col-xs-1 reply-recording">
        <IoMicOutline size={24} />
      </div>
      <div className="col-sm-1 col-xs-1 reply-send">
        <IoMdSend size={24} onClick={handleSendMessage} />
      </div>
    </div>
  );
};

// Connect the component to Redux store
export default connect(null, { addMessage })(Reply);
