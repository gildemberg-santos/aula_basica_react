import styled from "styled-components";

export const ListTaskItem = styled.div`
  display: flex;
  padding: 6px 10px 6px 25px;
  /* border-radius: 10px  50px 50px 10px; */
  border-radius: 50px;
  transition: 0.4s;

  &:hover {
    background: rgba(255, 255, 255, 0.1)
  }
`;

export const ListTaskContainer = styled.div`
  ${ListTaskItem}:hover {
    /* background-color: ${props => props.accent}; */
  }
`;

export const ButtonIcon = styled.div`
  & {
    border-radius: 50px !important;
    border-radius: inherit;
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
  }
`;
