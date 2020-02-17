//This is your top level React component, you may change everything

import React from "react";
import { AppProvider } from "../context/App.context";
import ListArea from "../components/ListArea";
import CreationArea from "../components/CreationArea";
import logo from "../assets/spotim-logo.jpg";
import { Container, Image } from "semantic-ui-react";
import styled from "styled-components";

const App = () => {
  return (
    <div>
      <AppProvider>
        <Container className={"spotim-header"}>
          <div className={"spotim-title"}>Welcome to the Spot.IM Chat app</div>
          <div>
            <Logo>
              <Image size={"tiny"} src={logo} />
            </Logo>
          </div>
        </Container>
        <ListArea />
        <CreationArea />
      </AppProvider>
    </div>
  );
};

export default App;

const Logo = styled.div`
  img {
    margin-left: auto;
    margin-right: auto;
    margin-top: 15px;
  }
`;
