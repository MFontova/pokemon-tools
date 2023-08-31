import { styled } from "styled-components";

export const Card = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  border: 0.5px solid #888;
  /* background-color: ${props => props.selected ? "gold" : "white"}; */
  background-image: url(assets/pokeball.png);
  border-radius: 25px;
  box-shadow: inset;
  transition: ease-in;
  transition-duration: 150ms;
  cursor: pointer;
  
  &:hover{
    /* background-color: #f5f5f5; */
    box-shadow: 5px 5px 10px 0px #c7c7c7;
    /* transform: translate(0, -10px); */
  }

  .left-align{
    text-align: left;
    width: 100%;
    padding-left: 25px;
  }

  .justify-between{
    display: flex;
    justify-content: space-between;
    width: 95%;
    align-items: center;
    margin: 0 20px;
  }
`