import { useTeam } from "../hooks/useTeam"
import { Card } from "./styled/SCard"
import { Grid } from "./styled/SGrid"
import { PokemonType } from "./styled/SPokemonType"
import image from '../assets/pokeball.png'
import { useState } from "react"
import { SStat } from "./styled/SStat"
import { Badge } from "./styled/SBadge"
import { SFlipButton } from "./styled/SFlipButton"

export const PokemonCard = ({pokemon}) => {
  const { state, isFullTeam, addToTeam, removeFromTeam } = useTeam()
  const [ flipped, setFlipped ] = useState(false)

  function addToTeamHandler(){
    addToTeam(pokemon)
  }

  function removeFromTeamHandler(){
    removeFromTeam(pokemon)
  }

  return flipped
    ? (
      <Card>
        <div className="justify-between">
          <p>#{pokemon.id}</p>
          {
            state.find(item => item.id === pokemon.id)
            ? <img onClick={state.find(item => item.id === pokemon.id) ? removeFromTeamHandler : addToTeamHandler} className="padding" height={30} src={image} alt="" />
            : <img onClick={state.find(item => item.id === pokemon.id) ? removeFromTeamHandler : addToTeamHandler} className="padding" height={30} src={image} style={{filter: 'grayscale(1)'}} alt="" />
          }
        </div>
        <img height={150} src={pokemon.sprites.other.dream_world.front_default} alt="" />
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
        {
          state.find(item => item.id === pokemon.id)
          ? <img onClick={state.find(item => item.id === pokemon.id) ? removeFromTeamHandler : addToTeamHandler} className="padding" height={30} src={image} alt="" />
          : <img onClick={state.find(item => item.id === pokemon.id) ? removeFromTeamHandler : addToTeamHandler} className="padding" height={30} src={image} style={{filter: 'grayscale(1)'}} alt="" />
        }
      </div>
      <div
      //   onClick={
      //   state.find(item => item.id === pokemon.id)
      //     ? removeFromTeamHandler
      //     : addToTeamHandler
      // }
      >
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