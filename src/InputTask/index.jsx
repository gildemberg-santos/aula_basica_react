import React, { useRef } from "react";
import {
  Container,
  Input,
  ButtonIcon,
} from "./style.js";

const InputTask = ({ icon, onClick, value, placeholder, ...props }) => {
  const inputRef = useRef(null);

  const handleClick = () => {
    onClick(inputRef.current.value);
    inputRef.current.value = "";
  }

  const handleKeyUp = (event) => {
    if (event.key === "Enter") {
      onClick(inputRef.current.value);
      inputRef.current.value = "";
    }
  }

  return (
    <Container {...props}>
      <Input
        ref={inputRef}
        onKeyUp={(e) => handleKeyUp(e)}
        type="text"
        placeholder={placeholder}
      />

      <ButtonIcon
        onClick={() => handleClick()}
        className="bi bi-file-earmark-plus"
      />
    </Container>
  );
}

export default InputTask;
