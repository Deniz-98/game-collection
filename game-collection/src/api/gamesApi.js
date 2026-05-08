import api from './axiosConfig'

const API_KEY = '7d782b42c4cf4ef2814419968e90cc80'

export const searchGames = async (query) => {
  try {
    const response = await api.get(`/games?key=${API_KEY}&search=${query}&page_size=20`)
    return response.data.results
  } catch (error) {
    throw new Error('Kunde inte hämta spel: ' + error.message)
  }
}

export const getGameById = async (id) => {
  try {
    const response = await api.get(`/games/${id}?key=${API_KEY}`)
    return response.data
  } catch (error) {
    throw new Error('Kunde inte hämta spelet: ' + error.message)
  }
}