import React, { useContext, useEffect, useRef } from "react";
import { AppContext } from "../context/App.context";

import styled from "styled-components";

const ListArea = () => {
  const { messages, user_details } = useContext(AppContext);
  const { name } = user_details;

  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(scrollToBottom, [messages]);


  return (
    <Container data-testid="container">
      {messages.length
        ? messages.map((x, i) => (
            <ChatLine key={i} isMe={x.username === name}>
              <Img src={x.avatar} alt="Avatar"></Img>{" "}
              <Message>
                {x.username}: {x.text}
              </Message>
            </ChatLine>
          ))
        : "no messages"}
        <div ref={messagesEndRef} />
    </Container>
  );
};

export default ListArea;

const Container = styled.div`
  margin: 2% 10%;
  height: 60vh;
  border: 2px solid #0082dd;
  overflow: auto;
`;

const ChatLine = styled.div`
  padding: 0.2em;
  background: ${props => (props.isMe ? "#fefbd8" : "inherit")};
`;

const Img = styled.img`
  height: 40px;
  vertical-align: middle;
`;

const Message = styled.span`
  padding: 0.2em;
`;
