import { useContext } from "react";
import { TeamContext } from "../context/team";

export const useTeam = () => {
  const context = useContext(TeamContext)

  if(context === undefined) {
    throw new Error('useTeam must be used within a CartProvider')
  }

  return context
}