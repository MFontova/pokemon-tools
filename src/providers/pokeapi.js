import axios from 'axios'
import { BASE_URL } from '../constants/config'

export async function getPokemon() {
  const response = await axios.get(`${BASE_URL}pokemon?limit=151`).then(response => response.data)
  // console.log(response)
  return response.results
}

export async function getPokemonDetails(pokemonUrl) {
  const response = await axios.get(pokemonUrl)
  return response
}