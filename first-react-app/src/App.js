import { useState } from 'react';
import './App.css';

import Title from './components/Title';
import Modal from "./components/Modal";

function App() {
  const subtitle = 'All the latest events in Marioland';
  const [showModal, setShowModal] = useState(false)
  const [showEvents, setShowEvents] = useState(true)
  const [events, setEvents] = useState([
    { id: 1, title: 'Im Mario!!!!' },
    { id: 2, title: 'Im Luigi!!!!' },
    { id: 3, title: 'Im Peach!!!!' }
  ])

  const handleClick = (clickedEventId) => {
    setEvents((previousEvents) => {
      return previousEvents.filter((event) => {
        return event.id !== clickedEventId
      })
    })
  }

  const toggleModal = () => {
    setShowModal(!showModal);
  }

  return (
    <div className="App">
      <Title tutle='Events in Your Area' subtitle={subtitle}/>
      <Title tutle='Another title' subtitle='Another subtitle'/>

      <div className='ShowModal'>
        <button onClick={toggleModal}>Show Modal</button>
        <br />
      </div>

      { !showEvents && (
        <button onClick={() => setShowEvents(true)} >Show events list</button>
      )}

      { showEvents && (
        <button onClick={() => setShowEvents(false)} >Hide events list</button>
      )}

      {showEvents && events.map((event, mapIndex) => (
        <div key={event.id} >
          <h2>{mapIndex} - { event.title }</h2>
          <button onClick={ ()=>{handleClick(event.id)} }>Delete Event</button>
        </div>
      )) }

      {showModal && (
        <Modal toggleModal={toggleModal}>
          <h2>100% Discount!!!</h2>
          <p>Use the 'NINJA! code at the checkout.</p>
        </Modal>
      )}

    </div>
  );
}

export default App;
