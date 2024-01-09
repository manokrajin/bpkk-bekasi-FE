// LiveChat.js

import React, { useEffect, useState } from 'react';

const LiveChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      text: 'Hi',
      time: '10:00',
    },
    {
      text: 'Hello',
      time: '10:01',
    },
    {
      text: 'How are you?',
      time: '10:02',
    },
    {
      text: 'I am fine',
      time: '10:03',
    },
    {
      text: 'What about you?',
      time: '10:04',
    },
    {
      text: 'I am fine too',
      time: '10:05',
    },
  ]);

  const [myMessage, setMyMessage] = useState('');



  const handleInputChange = (event : any) => {
    setMyMessage(event.target.value);
  };

  const handleSendMessage = () => {
    if (myMessage.trim() !== '') {
      setMessages([
        ...messages,
        {
          text: myMessage,
          time: new Date().toLocaleTimeString(),
        },
      ]);
      setMyMessage('');
    }
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`${
        isOpen
          ? 'fixed bottom-4 right-4 w-98 border border-solid border-gray-300 rounded overflow-hidden h-72 transition-all duration-300 ease-in-out'
          : 'fixed bottom-4 right-4 w-98 border border-solid border-gray-300 rounded overflow-hidden transition-all duration-300 ease-in-out'
      }`}
    >
      {/* Chat Header */}
      <div
        className="text-white bg bg-primary p-2 cursor-pointer"
        onClick={toggleChat}
      >
        {isOpen ? 'Pusat Bantuan BPKK ' : 'Chat with us'}
      </div>

      {/* Chat Body */}
      {isOpen && (
        <div className="h-48 overflow-y-auto p-2 bg-[#D9D9D9]">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`${
                index % 2 === 0 ? 'flex justify-end' : 'flex justify-start'
              } mb-2`}
            >
              <div
                className={`${
                  index % 2 === 0
                    ? 'bg-gray-100 text-gray-600'
                    : 'bg-primary text-white'
                } p-2 rounded`}
              >
                <div>{message.text}</div>
                <div className="text-xs text-gray-400">{message.time}</div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Chat Input */}
      {isOpen && (
        <div className="flex p-2 bg-gray-100">
          <input
            type="text"
            placeholder="Type your message..."
            className="flex-1 border border-solid border-gray-300 rounded p-2 outline-none"
            onChange={handleInputChange}
            value={myMessage}
            onKeyDownCapture={(event) => { if (event.key === 'Enter') handleSendMessage() }}
          />
          <button
            className="bg-primary rounded text-white border-none p-2 px-4 cursor-pointer"
            onClick={handleSendMessage}
          >
            Send
          </button>
        </div>
      )}
    </div>
  );
};

export default LiveChat;
