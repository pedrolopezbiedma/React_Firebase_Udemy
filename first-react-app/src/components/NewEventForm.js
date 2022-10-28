import { useState } from 'react';
import './NewEventForm.css'

export default function NewEventForm() {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const newEvent = {
      id: Math.floor(Math.random() * 10000),
      title: title,
      date: date
    }
    resetForm()

    console.log('El evento nuevo es -> ', newEvent);
  }

  const resetForm = () => {
    setTitle('')
    setDate('')
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

        <button>Submit Event</button>
    </form>
  )
}
