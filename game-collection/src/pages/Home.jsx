import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <h1>Game Collection</h1>
      <p>Välkommen till din personliga spelsamling!</p>
      <p>Här kan du söka efter spel, spara dina favoriter och skriva egna anteckningar.</p>

      <div>
        <h2>Kom igång</h2>
        <Link to="/search">
          <button>🔍 Sök spel</button>
        </Link>
        <Link to="/collection">
          <button>🎮 Min spelsamling</button>
        </Link>
      </div>

      <div>
        <h2>Vad kan du göra?</h2>
        <ul>
          <li>🔍 Sök bland tusentals spel via RAWG API</li>
          <li>➕ Spara spel till din personliga samling</li>
          <li>✏️ Skriv egna anteckningar om spel</li>
          <li>🗑️ Ta bort spel från samlingen</li>
        </ul>
      </div>
    </div>
  )
}

export default Home