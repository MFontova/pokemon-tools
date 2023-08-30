import { useEffect, useState } from "react"
import { getPokemon, getPokemonDetails } from "../providers/pokeapi"

export const usePokemon = () => {
  const [pokemonList, setPokemonList] = useState([])

  useEffect(() => {
    getPokemon().then(response => {
      const pokemonData = response
      const promises = pokemonData.map(pokemon => {
        return getPokemonDetails(pokemon.url)
          .then(pokemonDetailsResponse => {
            return pokemonDetailsResponse.data
          })
      })
      return Promise.all(promises)
    })
    .then(resultingPokemon => {
      setPokemonList(resultingPokemon)
    })
  }, [])

  return { pokemonList }
}