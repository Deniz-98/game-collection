import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getGameById } from '../api/gamesApi'

function GameDetailsPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [game, setGame] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchGame = async () => {
      try {
        const data = await getGameById(id)
        setGame(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }
    fetchGame()
  }, [id])

  if (loading) return <p>Laddar...</p>
  if (error) return <p>{error}</p>
  if (!game) return <p>Spelet hittades inte.</p>

  return (
    <div>
      <button onClick={() => navigate(-1)}>← Tillbaka</button>
      {game.background_image && (
        <img src={game.background_image} alt={game.name} width="400" />
      )}
      <h1>{game.name}</h1>
      <p>⭐ {game.rating} / 5</p>
      <p> {game.genres?.map((g) => g.name).join(', ')}</p>
      <p>{game.description_raw || 'Ingen beskrivning tillgänglig'}</p>
    </div>
  )
}

export default GameDetailsPage