// Messages.jsx — Direct messaging tab. Mock conversation list + chat view, all client side.

import React, { useState } from 'react';
import { Send, ArrowLeft, Image as ImageIcon } from 'lucide-react';

const Messages = () => {
  const [activeChat, setActiveChat] = useState(null);

  const [chatHistory, setChatHistory] = useState([
    { id: 1, text: "Hey! I love your patchwork style.", sender: "user" },
    { id: 2, text: "Thank you! Are you looking to book a session?", sender: "artist" }
  ]);
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (newMessage.trim() === "") return;

    const message = {
      id: Date.now(),
      text: newMessage,
      sender: "user"
    };

    setChatHistory([...chatHistory, message]);
    setNewMessage("");
  };

  if (activeChat) {
    return (
      <div className="max-w-md mx-auto bg-white min-h-screen flex flex-col pb-20">
        <header className="sticky top-0 bg-white border-b border-gray-200 p-4 flex items-center gap-3 z-10">
          <button onClick={() => setActiveChat(null)} className="p-1 active:scale-90 transition-transform">
            <ArrowLeft size={20} />
          </button>
          <div className="w-8 h-8 bg-gray-200 rounded-full overflow-hidden">
            <img src="https://images.pexels.com/photos/2183132/pexels-photo-2183132.jpeg?auto=compress&cs=tinysrgb&w=150" alt="Artist" className="w-full h-full object-cover" />
          </div>
          <h2 className="font-bold text-lg">{activeChat}</h2>
        </header>

        <div className="flex-1 p-4 overflow-y-auto flex flex-col gap-3">
          {chatHistory.map((msg) => (
            <div key={msg.id} className={`max-w-[75%] p-3 rounded-2xl text-sm ${msg.sender === 'user' ? 'bg-black text-white self-end rounded-tr-sm' : 'bg-gray-100 text-gray-800 self-start rounded-tl-sm'}`}>
              {msg.text}
            </div>
          ))}
        </div>

        <form onSubmit={handleSendMessage} className="p-3 border-t border-gray-200 bg-white flex items-center gap-2">
          <button type="button" className="p-2 text-gray-500 hover:text-black">
            <ImageIcon size={20} />
          </button>
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Message..."
            className="flex-1 bg-gray-100 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-300"
          />
          <button type="submit" className="p-2 text-blue-500 font-semibold hover:text-blue-600 disabled:opacity-50" disabled={!newMessage.trim()}>
            <Send size={20} />
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto bg-white min-h-screen pb-20">
      <header className="sticky top-0 bg-white border-b border-gray-200 p-4 z-10">
        <h1 className="text-xl font-bold">Messages</h1>
      </header>

      <div className="p-2">
        <div
          onClick={() => setActiveChat("Shadow Studio")}
          className="flex items-center gap-3 p-3 hover:bg-gray-50 cursor-pointer rounded-lg transition-colors"
        >
          <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden shrink-0">
            <img src="https://images.pexels.com/photos/2183132/pexels-photo-2183132.jpeg?auto=compress&cs=tinysrgb&w=150" alt="Shadow Studio" className="w-full h-full object-cover" />
          </div>
          <div className="flex-1 overflow-hidden">
            <h3 className="font-semibold text-sm">Shadow Studio</h3>
            <p className="text-gray-500 text-xs truncate">Thank you! Are you looking to book...</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;
