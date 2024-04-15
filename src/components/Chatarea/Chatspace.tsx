import React, { useEffect, useRef } from 'react';
import { messageType } from '../Reply/Reply';
import { useSelector, useDispatch } from 'react-redux';
import { chat } from '../../Redux/Chat/action';

const Chatspace = () => {
  const dispatch = useDispatch();
  const messageRef = useRef<HTMLDivElement | null>(null);
  const chatHistory = useSelector((state: any) => state.Chat.historychat);
  const messages = useSelector((state: any) => state.Chat.messages);

  useEffect(() => {
    dispatch(chat());
  }, [dispatch]); // Include dispatch in the dependency array

  useEffect(() => {
    if (messageRef.current) {
      messageRef.current.scrollTop = messageRef.current.scrollHeight;
    }
  }, [chatHistory,messages]);

  return (
    <div className="row message" id="conversation" ref={messageRef}>
      <div className="row message-body">
        <div className="col-sm-12 message-main-sender">
          <div>
            {chatHistory && chatHistory.map((message: messageType, index: number) => (
              <div key={index} className={`${message.type === true ? 'sender' : 'receiver'}-div`}>
                <span className={`${message.type === true ? 'sender' : 'receiver'}`}>{message.message}</span>
              </div>
            ))}
          </div>
          <div className="col-sm-12 message-main-sender">
            <div>
              {messages && messages.map((message: messageType, index: number) => (
                <div key={index} className={`${message.type === true ? 'sender' : 'receiver'}-div`}>
                  <span className={`${message.type === true ? 'sender' : 'receiver'}`}>{message.message}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chatspace;
