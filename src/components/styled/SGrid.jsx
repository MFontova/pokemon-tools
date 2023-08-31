import { styled } from "styled-components";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(${props => props.cols || 3}, 1fr);
  gap: 25px;
  padding: 25px 0;
`