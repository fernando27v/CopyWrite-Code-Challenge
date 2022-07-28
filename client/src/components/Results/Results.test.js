import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import Results from "./Results";
import { Provider } from "react-redux";
import store from "../../redux/store";

test("renders Results",()=>{
   const component = render(<Provider store={store}><Results/></Provider>);
   component.getByText("Results:");
})