import React, { useState, useEffect, useRef } from "react";
import { useChatStore } from "../store/chatStore";
import Message from "./Message";

const Chat = () => {
  const [input, setInput] = useState("");
  const { messages, addUserMessage, addBotMessage } = useChatStore();
  const messagesEndRef = useRef(null);

  const smartBotReply = (userMessage) => {
    const lower = userMessage.toLowerCase();

    if (lower.includes("привіт") || lower.includes("хай")) {
      return "Привіт! Як справи? 😊";
    } else if (lower.includes("час") || lower.includes("година")) {
      return `Зараз ${new Date().toLocaleTimeString()}`;
    } else if (lower.includes("погода")) {
      return "Погода сьогодні чудова! ☀️";
    } else if (lower.includes("поміч") || lower.includes("допоможи")) {
      return "Я готовий допомогти! Напишіть своє питання.";
    } else {
      const randomReplies = [
        "Цікаве питання!",
        "Розкажи більше...",
        "Не зовсім зрозумів 🤔",
        "Можеш уточнити?",
        "Ого, звучить цікаво!",
      ];
      return randomReplies[Math.floor(Math.random() * randomReplies.length)];
    }
  };

  const handleSend = () => {
    if (input.trim() === "") return;

    addUserMessage(input);

    const botReply = smartBotReply(input);

    setTimeout(() => {
      addBotMessage(botReply);
    }, 1000);

    setInput("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="chat-container">
      <div className="messages">
        {messages.map((msg) => (
          <Message key={msg.id} sender={msg.sender} text={msg.text} />
        ))}
        <div ref={messagesEndRef} />
      </div>
      <div className="input-area">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Повідомлення"
        />
        <button onClick={handleSend}>Відправити</button>
      </div>
    </div>
  );
};

export default Chat;
