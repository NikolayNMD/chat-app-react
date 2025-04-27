# Chat App

This project was created using Vite.

## 🚀 How to Run the Project

1. Copy HTTPS of my repository.

![Step 1](./src/assets/step_1.png)

2. Paste this path into your terminal or bash and type clone command => Enter.

![Step 2](./src/assets/step_2.png)

3. Open this project in your IDE.

- Make sure you have the LTS version of Node.js installed on your computer. [Download and install](https://nodejs.org/en/) it if necessary.

- Install all dependencies. In the terminal, type:

```
   npm install
```

- Then start development mode, type:

```
   npm run dev
```

- Then open: http://localhost:5173/chat-app-react

## 💬 How Auto-Scroll is Implemented

After each new message is added, the chat automatically scrolls to the newest message.

This is achieved using:

- `useRef` to reference the last message element.
- `useEffect` to call `.scrollIntoView({ behavior: 'smooth' })` whenever the list of messages changes.

## 🛠 Why Zustand Was Chosen

- Simplicity: Zustand has a minimalistic API and is much easier to set up compared to Redux.

- No Boilerplate: Unlike Redux, Zustand requires no reducers, action types, or complex configuration.

- Performance: Zustand updates only the components that use specific slices of the state, leading to better performance.

- Built-in LocalStorage Support: Zustand can easily persist state (like chat history) into local storage.

- Lightweight: Zustand is a small library (around 1KB gzipped), making it ideal for simple apps like a chat.
