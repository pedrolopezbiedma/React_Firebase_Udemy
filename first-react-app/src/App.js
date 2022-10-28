import { useState } from 'react';
import './App.css';

import Title from './components/Title';
import Modal from "./components/Modal";
import EventList from './components/EventList';
import NewEventForm from './components/NewEventForm';

function App() {
  const subtitle = 'All the latest events in Marioland';
  const [showModal, setShowModal] = useState(false)
  const [showEvents, setShowEvents] = useState(true)
  const [events, setEvents] = useState([])

  const toggleModal = () => {
    setShowModal(!showModal);
  }

  const handleNewEvent = (newEvent) => {
    setEvents((prevEvents) => {
      return [...prevEvents, newEvent]
    })
    toggleModal();
  }

  const handleDeleteEvent = (clickedEventId) => {
    setEvents((previousEvents) => {
      return previousEvents.filter((event) => {
        return event.id !== clickedEventId
      })
    })
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
        <EventList events={events} handleDeleteEvent={handleDeleteEvent}/ >
      }

      <div className='showModal'>
        <br />
        <button onClick={toggleModal}>Add New Event</button>
        <br />
      </div>
      {showModal && (
        <Modal isSalesModal={true}>
          <NewEventForm handleNewEvent={handleNewEvent}/>
        </Modal>
      )}

    </div>
  );
}

export default App;
