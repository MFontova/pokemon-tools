import { Card } from "./SCard"
import { Grid } from "./SGrid"
import { PokemonType } from "./SPokemonType"

export const PokemonCard = ({pokemon}) => {
  return (
    <Card>
      <p className="left-align">#{pokemon.id}</p>
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