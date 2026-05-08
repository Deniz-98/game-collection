import { useState } from 'react'
import { searchGames } from '../api/gamesApi'
import GameList from '../components/GameList'

function SearchPage({ addToCollection }) {
  const [query, setQuery] = useState('')
  const [games, setGames] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleSearch = async () => {
    if (!query.trim()) return
    setLoading(true)
    setError(null)
    try {
      const results = await searchGames(query)
      setGames(results)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <h1>Sök spel</h1>
      <input
        type="text"
        placeholder="Sök efter ett spel..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Sök</button>

      {loading && <p>Laddar...</p>}
      {error && <p>{error}</p>}
      {games.length > 0 && <GameList games={games} addToCollection={addToCollection} />}
    </div>
  )
}

export default SearchPage