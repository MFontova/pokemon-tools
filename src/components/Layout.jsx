import { router } from ".."
import { Header } from "./SHeader"
import { Menu } from "./SMenu"
import { Link } from "react-router-dom"

export const Layout = ({children}) => {
  return (
    <>
    <Header>
      <p>Pokémon Tools</p>
      <Menu>
        {
          router.routes.map(route => <Link to={route.path} key={route.path}>{route.label}</Link>)
        }
      </Menu>
    </Header>
    <main>
      {children}
    </main>
    </>
  )
}