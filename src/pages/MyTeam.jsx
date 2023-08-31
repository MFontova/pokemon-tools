import { useContext } from "react"
import { Layout } from "../components/Layout"
import { TeamContext } from "../context/team"
import { Grid } from "../components/styled/SGrid"
import { PokemonCard } from "../components/PokemonCard"
import { Link } from "react-router-dom"
import { useTeam } from "../hooks/useTeam"

export const MyTeam = () => {
  // const {state, clearTeam} = useContext(TeamContext)
  const { state, clearTeam } = useTeam()
  return (
    <Layout>
      {
        state.length !== 0
          ? (
              <>
                <div className="justify-between">
                  <h1>My team</h1>
                </div>
                <button onClick={() => clearTeam()}>Delete Team</button>
                <Grid cols={3}>
                  {
                    state.map(item => <PokemonCard key={item.id} pokemon={item} />)
                  }
                </Grid>
              </>
          )
          : (
            <>
              <p>Your team is empty</p>
              <Link to="/team-creator">Create your team</Link>
            </>
          )
      }
    </Layout>
  )
}