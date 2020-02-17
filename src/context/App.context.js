import React, { useState, createContext, useEffect } from "react";
import avatars from "../data/avatarImgs";
import useChat from "../components/_useChat";

const AppContext = createContext();
const { Provider } = AppContext;

const AppProvider = ({ children }) => {
  const [user_details, set_details] = useState({});
  const { messages, send_message } = useChat();

  const set_name = name => {
    set_details(details => ({ ...details, name: name }));
  };

  const getRandomAvatar = () => avatars[Math.floor(Math.random() * 5)];

  useEffect(() => {
    const item = localStorage.getItem("user_details");
    if (item) {
      set_details(JSON.parse(item));
    } else {
      set_details({ name: "", avatar: getRandomAvatar() });
    }
  }, []);

  useEffect(
    () => localStorage.setItem("user_details", JSON.stringify(user_details)),
    [user_details]
  );

  // state = values to display
  const state = {
    user_details,
    messages
  };
  // actions = callbacks to invoke
  const actions = {
    set_name,
    send_message
  };

  return <Provider value={{ ...state, ...actions }}>{children}</Provider>;
};

export { AppProvider, AppContext };
