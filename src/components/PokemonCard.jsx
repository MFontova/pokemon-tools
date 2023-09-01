import { useTeam } from "../hooks/useTeam"
import { Card } from "./styled/SCard"
import { Grid } from "./styled/SGrid"
import { PokemonType } from "./styled/SPokemonType"
import image from '../assets/pokeball.png'
import { useState } from "react"
import { SStat } from "./styled/SStat"
import { SFlipButton } from "./styled/SFlipButton"
import { SPokeballImage } from "./styled/SImage"

export const PokemonCard = ({pokemon}) => {
  const { state, isFullTeam, addToTeam, removeFromTeam } = useTeam()
  const [ flipped, setFlipped ] = useState(false)

  function addToTeamHandler(){
    addToTeam(pokemon)
  }

  function removeFromTeamHandler(){
    removeFromTeam(pokemon)
  }

  const onTeam = state.find(item => item.id === pokemon.id)

  return flipped
    ? (
      <Card>
        <div className="justify-between">
          <p>#{pokemon.id}</p>
          <SPokeballImage
            onClick={onTeam ? removeFromTeamHandler : addToTeamHandler}
            onTeam={onTeam}
            src={image}
            height={30}
          />
        </div>
        <img height={100} src={pokemon.sprites.other.dream_world.front_default} alt="" />
        <Grid cols={3}>
          {
            pokemon.stats.map(
              (stat) => (
                <SStat>
                  <span className="number">{stat.base_stat}</span>
                  <p>{stat.stat.name}</p>
                </SStat>
              )
            )
          }
        </Grid>
        <SFlipButton onClick={() => setFlipped(prevState => !prevState)}>Info</SFlipButton>
      </Card>
    )
    : (
      <Card 
        selected={
          state.find(item => item.id === pokemon.id)
            ? true
            : false
        }
      >
      <div className="justify-between">
        <p>#{pokemon.id}</p>
        <SPokeballImage
            onClick={onTeam ? removeFromTeamHandler : addToTeamHandler}
            onTeam={onTeam}
            src={image}
            height={30}
          />
      </div>
      <div>
        <img height={200} src={pokemon.sprites.other.dream_world.front_default} alt="" />
        <h2>{pokemon.name}</h2>
        <Grid cols={pokemon.types.length}>
          {
            pokemon.types.map(type => <PokemonType key={type.type.name} type={type.type.name}>{type.type.name}</PokemonType>)
          }
        </Grid>
      </div>
      <SFlipButton onClick={() => setFlipped(prevState => !prevState)}>Statistics</SFlipButton>
    </Card>
    )
}