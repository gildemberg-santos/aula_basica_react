import styled from "styled-components";

export const ListTaskItem = styled.div`
  display: flex;
  padding: 6px;
  border-radius: 50px;
  transition: 0.4s;
  align-items: center;

  &:hover {
    background: rgba(255, 255, 255, 0.1)
  }
`;

export const ListTaskContainer = styled.div`
  background: rgba(255, 255, 255, 0.08);
  border-radius: 25px;
`;

export const ListTaskItemText = styled.div`
  ${ListTaskItem} & {
    width: calc(100% - 50px);
    padding: 0 1em 0 1em;
  }
`;

export const ButtonIcon = styled.div`
  & {
    display: flex;
    width: 50px;
    height: 50px;
    justify-content: center;
    align-items: center;
    border-radius: inherit !important;
    background-color: #21c25e;
  }
`;
