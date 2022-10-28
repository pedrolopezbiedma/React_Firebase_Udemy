import { useState } from 'react';
import './NewEventForm.css'

export default function NewEventForm({ handleNewEvent }) {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('Manchester')

  const handleSubmit = (event) => {
    event.preventDefault();
    const newEvent = {
      id: Math.floor(Math.random() * 10000),
      title: title,
      date: date,
      location: location
    }
    resetForm()
    handleNewEvent(newEvent)
  }

  const resetForm = () => {
    setTitle('')
    setDate('')
    setLocation('Manchester')
  }

  return (
    <form onSubmit={handleSubmit} className='new-event-form'>
        <label>
            <span>Event Title:</span>
            <input type="text" value={title} onChange={(event) => {setTitle(event.target.value)}}/>
        </label>
        <label>
            <span>Event Date:</span>
            <input type="date" value={date} onChange={(event) => {setDate(event.target.value)}}/>
        </label>
        <label>
            <span>Location:</span>
            <select onChange={(event) => setLocation(event.target.value)}>
              <option value="Manchester">Manchester</option>
              <option value="London">London</option>
              <option value="Cardiff">Cardiff</option>
            </select>
        </label>

        <button>Submit Event</button>
    </form>
  )
}
