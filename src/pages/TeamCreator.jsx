import { Layout } from "../components/Layout"
import { PokemonCard } from "../components/PokemonCard"
import { Grid } from "../components/SGrid"
import { usePokemon } from "../hooks/usePokemon"

export const TeamCreator = () => {
  const { pokemonList } = usePokemon()
  console.log(pokemonList)
  return(
    <Layout>
      <p>Pokemon number: {pokemonList.length}</p>
      <Grid cols={3}>
        {
          pokemonList.map(item => <PokemonCard pokemon={item} />)
        }
      </Grid>
    </Layout>
  )
}