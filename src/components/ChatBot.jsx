import React, { useState, useRef, useEffect } from "react";
import { getGeminiResponse } from "./geminiApi";

const ChatbotWindow = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "👋 Namaste! How can I help you with your farming today?" },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;
    const userMessage = { sender: "user", text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    const botReply = await getGeminiResponse(input);
    setMessages(prev => [...prev, { sender: "bot", text: botReply }]);
    setLoading(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 w-80 h-96 bg-gradient-to-b from-[#FDF6E3] to-[#F4F1EA] shadow-lg flex flex-col rounded-xl overflow-hidden border border-green-300">

<div className="bg-gradient-to-r from-[#4CAF50] to-[#81C784] text-white py-3 px-4 flex justify-between items-center shadow-md">
  <div className="flex flex-col">
    <span className="font-extrabold text-xl sm:text-2xl tracking-wide drop-shadow-md">
      🌾 Bodhi
    </span>
    <span className="text-sm sm:text-base font-semibold italic opacity-90">
      AI Farming Assistant
    </span>
  </div>
  <button onClick={onClose} className="text-white font-bold hover:text-yellow-200 text-lg sm:text-xl">
    ✖
  </button>
</div>


      <div className="flex-1 overflow-y-auto p-3 space-y-2 text-sm sm:text-base">
        {messages.map((msg, idx) => (
          <div key={idx} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
            <div
              className={`px-3 py-2 rounded-lg max-w-[75%] break-words ${
                msg.sender === "user"
                  ? "bg-[#FFB74D] text-white shadow-md"
                  : "bg-[#FFF9C4] text-[#555] shadow-sm"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-start">
            <div className="px-3 py-2 rounded-lg bg-[#FFF9C4] text-[#555] shadow-sm">
              ✍️ Thinking...
            </div>
          </div>
        )}
        <div ref={chatEndRef} />
      </div>

      <div className="flex items-center border-t border-[#C2B280] p-2 sm:p-3 bg-white">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          placeholder="Type your question..."
          className="flex-1 px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
        />
        <button
          onClick={handleSend}
          disabled={loading}
          className="ml-2 px-3 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition disabled:opacity-50"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatbotWindow;
