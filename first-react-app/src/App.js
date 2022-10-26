import { useState } from 'react';
import './App.css';

import Title from './components/Title';
import Modal from "./components/Modal";
import EventList from './components/EventList';

function App() {
  const subtitle = 'All the latest events in Marioland';
  const [showModal, setShowModal] = useState(false)
  const [showEvents, setShowEvents] = useState(true)
  const [events, setEvents] = useState([
    { id: 1, title: 'Im Mario!!!!' },
    { id: 2, title: 'Im Luigi!!!!' },
    { id: 3, title: 'Im Peach!!!!' }
  ])

  const handleClickedEvent = (clickedEventId) => {
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
      <Title title='Events in Your Area' subtitle={subtitle}/>

      { !showEvents && (
        <button onClick={() => setShowEvents(true)} >Show events list</button>
      )}

      { showEvents && (
        <button onClick={() => setShowEvents(false)} >Hide events list</button>
      )}

      { showEvents &&
        <EventList events={events} handleClickedEvent={handleClickedEvent}/ >
      }

      <div className='showModal'>
        <br />
        <button onClick={toggleModal}>Show Modal</button>
        <br />
      </div>
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
