import { useState } from 'react'
import './App.css';

const cardImages = [
  { "src": "/img/helmet-1.png" },
  { "src": "/img/potion-1.png" },
  { "src": "/img/ring-1.png" },
  { "src": "/img/scroll-1.png" },
  { "src": "/img/shield-1.png" },
  { "src": "/img/sword-1.png" },
]

function App() {
  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)

  const startNewGame = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort((cardImage) => { return Math.random() - 0.5 })
      .map((card) => { return { ...card, id: Math.random()}})

      setCards(shuffledCards)
      setTurns(0)
      console.log('shuffled cards -> ', cards)
      console.log('turns are -> ', turns)
  }

  return (
    <div className="App">
      <h1>Magic Match</h1>
      <button onClick={ startNewGame }>New Game</button>
    </div>
  );
}

export default App;
