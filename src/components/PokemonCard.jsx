import { Card } from "./SCard"
import { Grid } from "./SGrid"
import { PokemonType } from "./SPokemonType"

export const PokemonCard = ({pokemon, dispatch}) => {

  function addToTeamHandler(){
    dispatch({type: 'ADD_TO_TEAM', payload: pokemon})
  }
  return (
    <Card>
      <p className="left-align">#{pokemon.id}</p>
      <button onClick={addToTeamHandler}>Add to team</button>
      <img src={pokemon.sprites.front_default} alt="" />
      <h2>{pokemon.name}</h2>
      <Grid cols={pokemon.types.length}>
        {
          pokemon.types.map(type => <PokemonType type={type.type.name}>{type.type.name}</PokemonType>)
        }
      </Grid>
    </Card>
  )
}