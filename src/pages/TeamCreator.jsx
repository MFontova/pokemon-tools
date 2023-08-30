import { useReducer } from "react"
import { Layout } from "../components/Layout"
import { PokemonCard } from "../components/PokemonCard"
import { Grid } from "../components/SGrid"
import { usePokemon } from "../hooks/usePokemon"
import { teamReducer } from "../reducers/teamReducer"

export const TeamCreator = () => {
  const { pokemonList, isFetching } = usePokemon()
  const [state, dispatch] = useReducer(teamReducer, [])

  console.log(state)

  return(
    <Layout>
      {
        isFetching
          ? (
            <p>Cargando...</p>
          )
          : (
            <>
              <p>Pokemon number: {pokemonList.length}</p>
              <Grid cols={3}>
                {
                  pokemonList.map(item => <PokemonCard pokemon={item} dispatch={dispatch} />)
                }
              </Grid>
            </>
          )
      }
    </Layout>
  )
}