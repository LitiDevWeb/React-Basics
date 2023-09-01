import { useState } from "react";

function InputComponent() {
  const [inputText, setText] = useState("Hello");

  function handleChange(e) {
    setText(e.target.value);
  }

  return (
    <>
      <input value={inputText} onChange={handleChange}></input>
      <p>You typed: {inputText}</p>
      <button onClick={() => setText("Hello")}>Reset</button>
    </>
  );
}
export default InputComponent;
