import React, { ChangeEvent } from 'react';
import { IoMicOutline } from "react-icons/io5";
import { IoMdSend } from "react-icons/io";
import { CiFaceSmile } from "react-icons/ci";

export type messageType = {
  message: string,
        type:boolean
}

type propsType = {
  inputMsg: string;
  messages: any;
  setMessages: any;
  setInputMsg: any;
}



const Reply = ({ inputMsg, messages, setMessages, setInputMsg }: propsType) => {


  const handleSendMessage = () => {

    if (inputMsg.trim() !== '') {

      const message: messageType  = {
        message: inputMsg.trim(),
        type: true

      };
      const newMessage: messageType = {
        message: 'How can I help you?',
        type: false

      };
      setMessages([...messages, message, newMessage]);
      setInputMsg('')
    }

  };

  const handleKeyPress = (e: any) => {
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

export default Reply;
