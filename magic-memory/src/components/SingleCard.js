import './SingleCard.css'

export default function SingleCard({ card, flipped, handleChoice }) {

    const handleClick = () => {
        handleChoice(card)
    }

    return (
        <div className='card'>
            <div className={ flipped ? 'flipped' : ''}>
                <img className='front' src={card.src} alt="front card"/>
                <img className='back' src="../../img/cover.png" alt="back card" onClick={handleClick}/>
            </div>
        </div>
    )
}
