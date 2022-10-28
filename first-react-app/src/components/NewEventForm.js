import { useState } from 'react';
import './NewEventForm.css'

export default function NewEventForm() {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');

  const handleChange = (event) => {
    console.log(event);
  }
  return (
    <form className='new-event-form'>
        <label>
            <span>Event Title:</span>
            <input type="text" onChange={(event) => {setTitle(event.target.value)}}/>
        </label>
        <label>
            <span>Event Date:</span>
            <input type="date" onChange={(event) => {setDate(event.target.value)}}/>
        </label>
        <br />
        <span>title - {title}</span>
        <br />
        <span>date - {date}</span>
        <br />
        <button>Submit Event</button>
    </form>
  )
}
