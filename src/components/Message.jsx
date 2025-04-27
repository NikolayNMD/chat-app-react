import React from "react";

const Message = ({ sender, text }) => {
  return (
    <div className={`message ${sender}`}>
      <span className="sender">{sender === "user" ? "Користувач" : "Бот"}</span>
      <div className="bubble">{text}</div>
    </div>
  );
};

export default Message;
