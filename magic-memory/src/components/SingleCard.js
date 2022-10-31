import './SingleCard.css'

export default function SingleCard({ card, handleChoice }) {

    const handleClick = () => {
        handleChoice(card)
    }
    return (
        <div className='card'>
            <div>
                <img className='front' src={card.src} alt="front card"/>
                <img className='back' src="../../img/cover.png" alt="back card" onClick={handleClick}/>
            </div>
        </div>
    )
}
