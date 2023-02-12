import React, { useRef } from "react";
import {
  Container,
  Input,
  ButtonIcon,
} from './style.js';

const InputTask = ({ icon, accent, onClick, value, ...props }) => {
  const inputRef = useRef(null);

  const handleClick = () => {
    onClick(inputRef.current.value);
    inputRef.current.value = '';
  }

  const handleKeyUp = (event) => {
    if (event.key === 'Enter') {
      onClick(inputRef.current.value);
      inputRef.current.value = '';
    }
  }

  return (
    <Container>
      <Input
        ref={inputRef}
        onKeyUp={(e) => handleKeyUp(e)}
        type="text"
        {...props}
      />

      <ButtonIcon
        onClick={() => handleClick()}
        className={`bi bi-file-earmark-plus`}
        style={{ backgroundColor: accent }}
      />
    </Container>
  );
}

export default InputTask;
