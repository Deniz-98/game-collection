import Game from './Game'

function GameList({ games, addToCollection }) {
  return (
    <div>
      {games.map((game) => (
        <Game key={game.id} game={game} addToCollection={addToCollection} />
      ))}
    </div>
  )
}

export default GameList