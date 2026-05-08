import { useState } from 'react'
import { Link } from 'react-router-dom'
import GameForm from '../components/GameForm'

function CollectionPage({ collection, setCollection }) {
  const [editingGame, setEditingGame] = useState(null)

  const handleDelete = (gameId) => {
    setCollection(collection.filter((g) => g.id !== gameId))
  }

  const handleUpdate = (updatedGame) => {
    setCollection(collection.map((g) => g.id === updatedGame.id ? updatedGame : g))
    setEditingGame(null)
  }

  if (collection.length === 0) return <p>Din samling är tom — sök efter spel och lägg till!</p>

  return (
    <div>
      <h1>Min samling</h1>
      {collection.map((game) => (
        <div key={game.id}>
          <Link to={`/game/${game.id}`}>
            <h3>{game.name}</h3>
          </Link>
          {game.background_image && (
            <img src={game.background_image} alt={game.name} width="200" />
          )}
          <p>⭐ {game.rating} / 5</p>
          <p><strong>Anteckning:</strong> {game.note || 'Ingen anteckning'}</p>

          <button onClick={() => setEditingGame(game)}>✏️ Redigera</button>
          <button onClick={() => handleDelete(game.id)}>🗑️ Ta bort</button>

          {editingGame?.id === game.id && (
            <GameForm
              game={editingGame}
              onSave={handleUpdate}
              onCancel={() => setEditingGame(null)}
            />
          )}
        </div>
      ))}
    </div>
  )
}

export default CollectionPage