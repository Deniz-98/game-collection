import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './pages/Home'
import SearchPage from './pages/SearchPage'
import CollectionPage from './pages/CollectionPage'
import GameDetailsPage from './pages/GameDetailsPage'

function App() {
  const [collection, setCollection] = useState(() => {
    const saved = localStorage.getItem('gameCollection')
    return saved ? JSON.parse(saved) : []
  })

  useEffect(() => {
    localStorage.setItem('gameCollection', JSON.stringify(collection))
  }, [collection])

  const addToCollection = (game) => {
    const alreadyAdded = collection.some((g) => g.id === game.id)
    if (alreadyAdded) return alert('Spelet finns redan i din samling!')
    setCollection([...collection, { ...game, note: '' }])
  }

  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<SearchPage addToCollection={addToCollection} />} />
        <Route path="/collection" element={<CollectionPage collection={collection} setCollection={setCollection} />} />
        <Route path="/game/:id" element={<GameDetailsPage />} />
      </Routes>
    </div>
  )
}

export default App