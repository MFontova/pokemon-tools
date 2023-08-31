import { styled } from "styled-components";

export const Badge = styled.span`
  background-color: ${props => props.bg};
  border-radius: 50px;
  padding: 5px 15px;
  color: ${props => props.color}
`