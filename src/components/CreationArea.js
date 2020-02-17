import React, { useContext, useState } from "react";
import styled from "styled-components";
import { AppContext } from "../context/App.context";

const CreationArea = () => {
  const { set_name, user_details, send_message } = useContext(AppContext);
  const [newMsg, setNewMsg] = useState("");
  const { name } = user_details;

  return (
    <Container>
      <Input
        placeholder="Your name here"
        onChange={event => set_name(event.target.value)}
        value={name}
      />
      <Input
        placeholder="Your message here"
        onChange={event => setNewMsg(event.target.value)}
        value={newMsg}
      />
      <button
        onClick={() => {
          if (!newMsg) return
          
          send_message({
            avatar: user_details.avatar,
            username: user_details.name,
            text: newMsg
          });
          setNewMsg("");
        }}
      >
        Submit
      </button>
    </Container>
  );
};

export default CreationArea;

const Container = styled.div`
  margin-left: 10%;
  width: 80vw;
  border: 2px solid #0082dd;
  position: absolute;
  bottom: 2%;
  padding: 1%;
  padding-bottom: 0;
`;

const Input = styled.input`
  display: block;
  margin-bottom: 1%;
  width: 100%;
`;
