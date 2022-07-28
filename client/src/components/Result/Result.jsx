import React from "react";
import Palindrome from "../Palindrome/Palindrome";

function Result({ text }) {
  return (
    <div
      style={{
        padding: "0.5rem 1.5rem",
        marginTop: "2rem",
        border: "#d4d4d4 solid 0.2rem",
        borderRadius: "8px",
        display: "inline-block",
        maxWidth: "525px",
      }}
    >
      <div className="d-flex justify-content-between">
        <span style={{ lineBreak: "anywhere" }}>{text.text}</span>
        <div style={{ marginLeft: "1rem", textAlign: "center" }}>
          <span style={{ marginRight: "10px" }}>Palindrome?</span>
          <Palindrome isPalindrome={text.palindrome} />
        </div>
      </div>
    </div>
  );
}

export default Result;
