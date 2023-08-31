import { Layout } from "../components/Layout"
import { PokemonCard } from "../components/PokemonCard"
import { Badge } from "../components/styled/SBadge"
import { ToolBar } from "../components/styled/SToolBar"
import { Grid } from "../components/styled/SGrid"
import { usePokemon } from "../hooks/usePokemon"
import { useTeam } from "../hooks/useTeam"
import { useContext } from "react"
import { FiltersContext } from "../context/filters"
import { Input } from "../components/styled/SInput"

export const TeamCreator = () => {
  const { pokemonList, isFetching } = usePokemon()
  const { state, isFullTeam } = useTeam()
  const { filters, setFilters } = useContext(FiltersContext)

  console.log(filters)

  return(
    <Layout>
      {
        isFetching
          ? (
            <p>Cargando...</p>
          )
          : (
            <>
              <ToolBar>
                <p>Total Pokémons: <Badge color="white" bg="indianred">{pokemonList.length}</Badge></p>
                <Input 
                  type="text" 
                  value={filters.name} 
                  placeholder="Search your Pokémon"
                  onChange={
                    (e) => setFilters(prevState => ({...prevState, name: e.target.value }))
                  } 
                />
                <p>Team members: <Badge color="white" bg={isFullTeam ? "green" : "blue"}>{state.length}/6</Badge></p>
              </ToolBar>
              <Grid cols={3}>
                {
                  pokemonList
                    .filter(item => item.name.toLowerCase().indexOf(filters.name) > -1)
                    .map(item => <PokemonCard key={item.id} pokemon={item} />)
                }
              </Grid>
            </>
          )
      }
    </Layout>
  )
}