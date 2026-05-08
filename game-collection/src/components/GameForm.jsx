import { useState } from 'react'

function GameForm({ game, onSave, onCancel }) {
  const [note, setNote] = useState(game.note || '')

  const handleSubmit = () => {
    if (!note.trim()) return alert('Anteckningen får inte vara tom!')
    onSave({ ...game, note })
  }

  return (
    <div>
      <h3>Redigera anteckning</h3>
      <textarea
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder="Skriv din anteckning här..."
        rows={3}
      />
      <button onClick={handleSubmit}>💾 Spara</button>
      <button onClick={onCancel}>Avbryt</button>
    </div>
  )
}

export default GameForm