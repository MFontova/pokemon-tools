import { createContext, useState } from "react";

export const FiltersContext = createContext()

export const FiltersProvider = ({children}) => {
  const [filters, setFilters] = useState({
    name: '',
  })

  return (
    <FiltersContext.Provider value={{
      filters, setFilters
    }}>
      {children}
    </FiltersContext.Provider>
  )
}