import { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('Mario')
  const [events, setEvents] = useState([
    { id: 1, title: 'Im Mario!!!!' },
    { id: 2, title: 'Im Luigi!!!!' },
    { id: 3, title: 'Im Peach!!!!' }
  ])

  const updateName = () => {
    setName('Luigi');  
  }

  return (
    <div className="App">
      <p>My name is: {name}</p>
      <button onClick={updateName}>Change name</button>

      { events.map((event, mapIndex) => (
        <div key={event.id} >
          <h2>{mapIndex} - { event.title }</h2>
        </div>
      )) }
    </div>
  );
}

export default App;
