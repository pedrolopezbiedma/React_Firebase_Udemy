export default function EventList({ events, handleClickedEvent }) {
  return (
    <div className="eventList">
        { events.map((event, mapIndex) => (
            <div key={event.id} >
            <h2>{mapIndex} - { event.title }</h2>
            <button onClick={ ()=>{handleClickedEvent(event.id)} }>Delete Event</button>
            </div>
        )) }
    </div>
  )
}
