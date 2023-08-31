import { styled } from "styled-components";

export const PokemonType = styled.p`
  background-color: ${
    props => {
      switch (props.type) {
        case 'grass':
          return 'darkgreen'

        case 'poison':
          return 'purple'

        case 'fire':
          return 'red'

        case 'flying':
          return 'cornflowerblue'

        case 'water':
          return 'blue'

        case 'bug':
          return 'green'

        case 'normal':
          return 'burlywood'

        case 'electric':
          return 'gold'

        case 'ground':
          return 'saddlebrown'

        case 'fairy':
          return 'coral'
        
        case 'fighting':
          return 'brown'

        case 'psychic':
          return 'darkviolet'

        case 'rock':
          return 'dimgray'

        case 'steel':
          return 'lightslategray'

        case 'ice':
          return 'paleturquoise'

        case 'ghost':
          return 'rebeccapurple'

        case 'dragon':
          return 'slateblue'
        default:
          return '#333'
      }
    }
  };
  border-radius: 50px;
  padding: 5px 10px;
  color: white;
`