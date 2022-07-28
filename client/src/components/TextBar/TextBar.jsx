import { useState } from "react";
import { useDispatch } from "react-redux";
import { postTexts } from "../../redux/slices/textSlice";

function TextBar() {
  const dispatch = useDispatch();

  const [sentence, setSentence] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postTexts(sentence));
    setSentence("");
  };

  return (
    <form
      className="d-flex justify-content-center"
      role="search"
      onSubmit={handleSubmit}
    >
      <input
        className="form-control me-2"
        type="search"
        placeholder="Insert text"
        aria-label="Search"
        style={{ minWidth: "150%" }}
        value={sentence}
        onChange={(e) => setSentence(e.target.value)}
      />
      <button
        className="btn btn-primary"
        type="submit"
        aria-label="Send"
        style={{ padding: "0 25px" }}
      >
        Send
      </button>
    </form>
  );
}

export default TextBar;
