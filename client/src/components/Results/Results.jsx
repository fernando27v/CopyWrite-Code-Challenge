import { useEffect } from "react";
import { useSelector } from "react-redux";
import Result from "../Result/Result";
import Swal from "sweetalert2";

function Results() {
  const texts = useSelector((state) => state.textSlice.texts);

  const error = useSelector((state) => state.textSlice.error);
  
  useEffect(() => {
    if (error.error === "No text") {
      Swal.fire({
        icon: "error",
        title: "Oops... no text found",
        text: "Please write a word or sentence",
      });
    }
  }, [error]);
  return (
    <div
      className="container-lg d-flex"
      style={{
        backgroundColor: "white",
        maxWidth: "800px",
        minHeight: "400px",
        padding: "10px",
        marginTop: "2rem",
        justifyContent: "space-between",
      }}
    >
      <h4 style={{ margin: "1rem" }}>Results:</h4>
      <div
        style={{
          overflowY: "scroll",
          maxHeight: "380px",
          minWidth: "650px",
          flexDirection: "column",
          flexWrap: "nowrap",
          display: "flex",
        }}
      >
        {texts.map((text, index) => {
          return <Result key={index} text={text} />;
        })}
      </div>
    </div>
  );
}

export default Results;
