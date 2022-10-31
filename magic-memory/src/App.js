import { useState, useEffect } from 'react'
import './App.css';
import SingleCard from './components/SingleCard';

const cardImages = [
  { "src": "/img/helmet-1.png" , "matched": false },
  { "src": "/img/potion-1.png" , "matched": false },
  { "src": "/img/ring-1.png" , "matched": false },
  { "src": "/img/scroll-1.png" , "matched": false },
  { "src": "/img/shield-1.png" , "matched": false },
  { "src": "/img/sword-1.png" , "matched": false },
]

function App() {
  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)
  const [choiceOne, setChoiceOne] = useState(null)
  const [choiceTwo, setChoiceTwo] = useState(null)

  const startNewGame = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => { return Math.random() - 0.5 })
      .map((card) => { return { ...card, id: Math.random()}})

      setCards(shuffledCards)
      setTurns(0)
  }

  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
  }

  const resetChoices = () => {
    setChoiceOne(null)
    setChoiceTwo(null)
    setTurns(turns => turns + 1)
  }

  useEffect(() => {
    if(choiceOne && choiceTwo){
      if(choiceOne.src === choiceTwo.src){
        setCards(prevCards => {
          return prevCards.map(prevCard => {
            if(prevCard.src === choiceOne.src) {
              return { ...prevCard, matched: true}
            }
            else {
              return prevCard
            }
          })
        })
        resetChoices()
      } else {
        setTimeout(() => resetChoices(), 500)
      }

    }
  }, [choiceOne, choiceTwo])

  return (
    <div className="App">
      <h1>Magic Match</h1>
      <button onClick={ startNewGame }>New Game</button>

      <div className='card-grid'>
        { cards.map(card => (
          <SingleCard
            key={ card.id }
            card={ card }
            flipped= { choiceOne === card || choiceTwo === card || card.matched }
            handleChoice={ handleChoice }
          />
        ))}
      </div>

      <div>Turns: { turns } </div>
    </div>
  );
}

export default App;
