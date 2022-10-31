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
  const [disabled, setDisabled] = useState(false)

  useEffect(() => {
    startNewGame()
  }, [])

  useEffect(() => {
    if(choiceOne && choiceTwo){
      setDisabled(true)
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


  const startNewGame = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => { return Math.random() - 0.5 })
      .map((card) => { return { ...card, id: Math.random()}})

      setChoiceOne(null)
      setChoiceTwo(null)
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
    setDisabled(false)
  }

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
            disabled = { disabled }
            handleChoice={ handleChoice }
          />
        ))}
      </div>

      <div>
        <p>Turns: { turns }</p></div>
    </div>
  );
}

export default App;
