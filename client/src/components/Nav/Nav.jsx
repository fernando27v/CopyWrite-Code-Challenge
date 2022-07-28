import React from "react";
import TextBar from "../TextBar/TextBar";

function Nav() {
  return (
    <nav className="navbar" style={{ backgroundColor: "red" }}>
      <div className="container-fluid d-flex justify-content-center">
        <TextBar />
      </div>
    </nav>
  );
}

export default Nav;
