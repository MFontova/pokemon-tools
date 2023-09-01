import { styled } from "styled-components";

export const SPokeballImage = styled.img`
    filter: ${props => props.onTeam ? 'none' : 'grayscale(1)'};
    transition-duration: 150ms;
    height: 30px;
    &:hover{
      transform: rotate(180deg);
    }
`