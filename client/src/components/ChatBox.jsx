import React, { useState } from 'react';
import axios from '../services/api';

const ChatBox = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSend = async () => {
    if (!input) return;
    const userMessage = { sender: 'user', text: input };
    setMessages([...messages, userMessage]);

    try {
      const { data } = await axios.post('/api/chat', { query: input });
      setMessages((prev) => [...prev, { sender: 'bot', text: data.response }]);
    } catch (error) {
      setMessages((prev) => [...prev, { sender: 'bot', text: 'Error retrieving data.' }]);
    }
    setInput('');
  };

  return (
    <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-4">
      <h1 className="text-4xl font-bold text-blue-600 mb-8 text-center">
        Welcome to Chatbot
      </h1>
      <div className="h-96 overflow-y-scroll">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`my-2 p-2 rounded ${
              msg.sender === 'user' ? 'bg-blue-100 text-right' : 'bg-gray-100 text-left'
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>
      <div className="mt-4 flex">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-grow p-2 border border-gray-300 rounded"
          placeholder="Type your message..."
        />
        <button
          onClick={handleSend}
          className="ml-2 p-2 bg-blue-500 text-white rounded"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatBox;
