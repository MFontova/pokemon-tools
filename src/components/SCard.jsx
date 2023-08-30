import { styled } from "styled-components";

export const Card = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  border: 0.5px solid #888;
  border-radius: 25px;
  box-shadow: inset;
  transition: ease-in;
  transition-duration: 150ms;
  
  &:hover{
    transform: translate(0, -10px);
  }

  .left-align{
    text-align: left;
    width: 100%;
    padding-left: 25px;
  }
`