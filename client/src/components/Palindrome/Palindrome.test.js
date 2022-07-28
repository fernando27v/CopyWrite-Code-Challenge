import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { render } from "@testing-library/react";
import Palindrome from "./Palindrome";

test("renders SVG Icon for Palindrome if the prop is true", () => {

    const component = render(<Palindrome isPalindrome={true}/>);
    component.getByLabelText("Palindrome");
})

test("renders SVG Icon for Not Palindrome if the prop is false", () => {

    const component = render(<Palindrome isPalindrome={false}/>);
    component.getByLabelText("Not Palindrome");
})