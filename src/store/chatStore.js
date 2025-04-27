import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useChatStore = create(
  persist(
    (set) => ({
      messages: [],
      addUserMessage: (text) =>
        set((state) => ({
          messages: [
            ...state.messages,
            { id: Date.now(), text, sender: "user" },
          ],
        })),
      addBotMessage: (text) =>
        set((state) => ({
          messages: [
            ...state.messages,
            { id: Date.now(), text, sender: "bot" },
          ],
        })),
      clearMessages: () =>
        set(() => ({
          messages: [],
        })),
    }),
    {
      name: "chat-messages",
    }
  )
);
