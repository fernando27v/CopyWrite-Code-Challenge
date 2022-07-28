import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import TextBar from "./TextBar";
import { Provider } from "react-redux";
import store from "../../redux/store";

test("renders TextBar",()=>{
    render(<Provider store={store}><TextBar/></Provider>);
    expect(screen.getByLabelText('Search')).toBeInTheDocument();
    expect(screen.getByLabelText('Send')).toBeInTheDocument();
})
