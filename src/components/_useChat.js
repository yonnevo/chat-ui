import { useEffect, useRef, useState } from "react";
import socketIOClient from "socket.io-client";

const eventName = "spotim/chat";
const useChat = () => {
  const [messages, set_messages] = useState([]);
  const socketRef = useRef();

  const add_message = msg => {
    set_messages((currentMessages) => [...currentMessages, msg]);
  };

  useEffect(() => {
    socketRef.current = socketIOClient(
      "https://spotim-demo-chat-server.herokuapp.com"
    );
    socketRef.current.on(eventName, message => {
      console.log(message);
      add_message(message);
    });
    return () => {
      socketRef.current.disconnect();
    };
  }, []);

  const send_message = msgObj => {
    socketRef.current.emit(eventName, msgObj);
  };
  return { messages, send_message };
};


// inputMessages,

export default useChat;
