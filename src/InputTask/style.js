import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  padding: 6px;
  border-radius: 50px;
  transition: 0.4s;

  &:hover {
    background: rgba(255, 255, 255, 0.1)
  }
`;

export const Input = styled.input`
  ${Container} & {
    width: calc(100% - 65px);
    text-indent: 16px;
    transition: 0.4s;
    background: rgba(255, 255, 255, 0.0);
    border: none;
    outline: none;
    color: #fff;
    z-index: 0;
    font-size: 1.0em;
  }
`;

export const ButtonIcon = styled.div`
  ${Container} & {
    /* pointer-events: none; */
    border-radius: inherit;
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
  }
`;
