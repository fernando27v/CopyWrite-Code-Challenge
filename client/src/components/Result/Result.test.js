import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import Result from "./Result";

test("renders Result and the text inverted for a not palindrome phrase", () => {
  const exampleText = {
    text: "dlroW olleH",
    palindrome: false,
  };
  const component = render(<Result text={exampleText} />);
  component.getByText("dlroW olleH");
  component.getByLabelText("Not Palindrome");
});

test("renders Result and the text inverted for a palindrome phrase", () => {
    const exampleText = {
      text: "annA",
      palindrome: true,
    };
    const component = render(<Result text={exampleText} />);
    component.getByText("annA");
    component.getByLabelText("Palindrome");
  });
