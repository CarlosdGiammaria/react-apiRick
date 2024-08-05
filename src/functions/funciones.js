import axios from 'axios'

const todoPersonajes = async (state) => {
  const data = await axios.get('https://rickandmortyapi.com/api/character')
  state(data.data.results)
}

const unicoPersonaje = async (id, state) => {
  const data = await axios.get(`https://rickandmortyapi.com/api/character/${id}`)
  state(data.data)
}

export { todoPersonajes, unicoPersonaje };