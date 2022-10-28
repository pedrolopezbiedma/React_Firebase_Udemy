import styles from './EventList.module.css'

export default function EventList({ events, handleClickedEvent }) {
  return (
    <div className={styles.card}>
        { events.map((event, mapIndex) => (
            <div key={event.id} >
            <h2>{mapIndex} - { event.title }</h2>
            <button className={styles.button} onClick={ ()=>{handleClickedEvent(event.id)} }>Delete Event</button>
            </div>
        )) }
    </div>
  )
}
