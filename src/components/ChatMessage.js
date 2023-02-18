import React from 'react';

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-center p-2 shadow-sm border border-gray-300 rounded-lg mt-1">
      <img
        alt="text"
        className="h-12"
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
      />
      <span className="font-bold px-2">{name}</span>
      <span>{message}</span>
    </div>
  );
};

export default ChatMessage;
