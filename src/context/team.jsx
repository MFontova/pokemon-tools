import { createContext, useEffect, useReducer, useState } from "react";
import { initialState, teamReducer } from "../reducers/team";

export const TeamContext = createContext()

export const TeamProvider = ({children}) => {
  const [state, dispatch] = useReducer(teamReducer, initialState)
  const [isFullTeam, setIsFullTeam] = useState(false)

  const addToTeam = pokemon => dispatch({
    type: 'ADD_TO_TEAM',
    payload: pokemon
  })

  const removeFromTeam = pokemon => dispatch({
    type: 'REMOVE_FROM_TEAM',
    payload: pokemon
  })

  const clearTeam = () => dispatch({type: 'CLEAR_TEAM'})

  useEffect(() => {
    checkFullTeam()
    localStorage.setItem('currentTeam', JSON.stringify(state))
  }, [state])

  const checkFullTeam = () => {
    if(state.length === 6) {
      setIsFullTeam(true)
    } else {
      setIsFullTeam(false)
    }
  }

  return (
    <TeamContext.Provider value={{
      state, addToTeam, removeFromTeam, clearTeam, isFullTeam
    }}>
      {children}
    </TeamContext.Provider>
  )
}