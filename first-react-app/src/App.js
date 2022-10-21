import { useState } from 'react';
import './App.css';

function App() {
  const [events, setEvents] = useState([
    { id: 1, title: 'Im Mario!!!!' },
    { id: 2, title: 'Im Luigi!!!!' },
    { id: 3, title: 'Im Peach!!!!' }
  ])

  const handleClick = (clickedEventId) => {
    console.log('clicked Event', clickedEventId);
    setEvents((previousEvents) => {
      return previousEvents.filter((event) => {
        return event.id !== clickedEventId
      })
    })
  }

  return (
    <div className="App">
      { events.map((event, mapIndex) => (
        <div key={event.id} >
          <h2>{mapIndex} - { event.title }</h2>
          <button onClick={ ()=>{handleClick(event.id)} }>Delete Event</button>
        </div>
      )) }
    </div>
  );
}

export default App;
