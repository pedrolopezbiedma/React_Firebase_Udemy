import styles from './EventList.module.css'

export default function EventList({ events, handleDeleteEvent }) {
  return (
    <div className={styles.card}>
        { events.map((event, mapIndex) => (
            <div key={event.id} >
            <h2>{mapIndex} - { event.title }</h2>
            <h2>{event.location} - { event.date }</h2>
            <button className={styles.button} onClick={ ()=>{handleDeleteEvent(event.id)} }>Delete Event</button>
            </div>
        )) }
    </div>
  )
}
