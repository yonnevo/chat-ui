import React from "react";
import ReactDOM from "react-dom";
import ListArea from "../ListArea";
import { AppProvider } from "../../context/App.context";

import renderer from 'react-test-renderer';
import "@testing-library/jest-dom/extend-expect";

it("renders without crashing", () => {
  const div = document.createElement("div");
  <AppProvider>
    ReactDOM.render(
    <ListArea />, div );
  </AppProvider>;
  ReactDOM.unmountComponentAtNode(div);
});

it("snapshot test - renders correctly", () => {
  const tree = renderer
    .create(
      <AppProvider>
        <ListArea />
      </AppProvider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
