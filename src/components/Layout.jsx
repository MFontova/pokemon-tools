import { router } from ".."
import { Header } from "./styled/SHeader"
import { Main } from "./styled/SMain"
import { Menu } from "./styled/SMenu"
import { Link } from "react-router-dom"

export const Layout = ({children}) => {
  return (
    <>
    <Header>
      <h1>Pokémon Tools</h1>
      <Menu>
        {
          router.routes.map(route => <Link to={route.path} key={route.path}>{route.label}</Link>)
        }
      </Menu>
    </Header>
    <Main>
      {children}
    </Main>
    </>
  )
}