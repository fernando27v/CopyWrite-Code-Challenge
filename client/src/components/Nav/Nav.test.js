import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { render } from "@testing-library/react";
import Nav from "./Nav";
import { Provider } from "react-redux";
import store from "../../redux/store";

test("renders Nav and TextBar", () => {
  const component = render(<Provider store={store}><Nav /></Provider>);
  component.getByLabelText("Search");
  component.getByLabelText("Send");
});
