import { useTeam } from "../hooks/useTeam"
import { Card } from "./styled/SCard"
import { Grid } from "./styled/SGrid"
import { PokemonType } from "./styled/SPokemonType"
import image from '../assets/pokeball.png'

export const PokemonCard = ({pokemon}) => {
  const { state, isFullTeam, addToTeam, removeFromTeam } = useTeam()

  function addToTeamHandler(){
    addToTeam(pokemon)
  }

  function removeFromTeamHandler(){
    removeFromTeam(pokemon)
  }

  return (
    <Card 
      onClick={
        state.find(item => item.id === pokemon.id)
          ? removeFromTeamHandler
          : addToTeamHandler
      }
      selected={
        state.find(item => item.id === pokemon.id)
          ? true
          : false
      }
    >
      <div className="justify-between">
        <p>#{pokemon.id}</p>
        {
          state.find(item => item.id === pokemon.id)
          ? <img className="padding" height={30} src={image} alt="" />
          : <img className="padding" height={30} src="" alt="" />
        }
      </div>
      <img height={200} src={pokemon.sprites.other.dream_world.front_default} alt="" />
      <h2>{pokemon.name}</h2>
      <Grid cols={pokemon.types.length}>
        {
          pokemon.types.map(type => <PokemonType key={type.type.name} type={type.type.name}>{type.type.name}</PokemonType>)
        }
      </Grid>
    </Card>
  )
}