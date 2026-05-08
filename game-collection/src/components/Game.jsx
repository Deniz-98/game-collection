import { Link } from 'react-router-dom'

function Game({ game, addToCollection }) {
  return (
    <div>
      {game.background_image && (
        <img src={game.background_image} alt={game.name} width="200" />
      )}
      <h3>{game.name}</h3>
      <p>⭐ {game.rating} / 5</p>
      <p> {game.genres?.map((g) => g.name).join(', ')}</p>
      <Link to={`/game/${game.id}`}>Visa detaljer</Link>
      {addToCollection && (
        <button onClick={() => addToCollection(game)}>+ Lägg till i samling</button>
      )}
    </div>
  )
}

export default Game