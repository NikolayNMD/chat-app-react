import { create } from "zustand";

export const useChatStore = create((set) => ({
  messages: [],
  addUserMessage: (text) =>
    set((state) => ({
      messages: [...state.messages, { id: Date.now(), text, sender: "user" }],
    })),
  addBotMessage: (text) =>
    set((state) => ({
      messages: [...state.messages, { id: Date.now(), text, sender: "bot" }],
    })),
}));
