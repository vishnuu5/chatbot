import React from 'react';

const Message = ({ sender, text }) => {
  const messageClass = sender === 'user' ? 'bg-blue-100 text-right' : 'bg-gray-100 text-left';

  return (
    <div className={`my-2 p-2 rounded ${messageClass}`}>
      {text}
    </div>
  );
};

export default Message;
