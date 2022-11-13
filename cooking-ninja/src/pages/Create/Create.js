import { useState } from 'react'
import './Create.css'

export default function Create() {
  const [title, setTitle] = useState('')
  const [method, setMethod] = useState('')
  const [cookingTime, setCookingTime] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(title, method, cookingTime);

  }

  return (
    <div className='create'>
      <h2 className='pag-title'>Add a New Recipe.</h2>

      <form>
        <label>
          <span>Title:</span>
          <input type='text' value={title} onChange={(event) => setTitle(event.target.value)} required/>
        </label>

      {/* Ingredientes */ }

        <label>
          <span>Method:</span>
          <textarea type='text' value={method} onChange={(event) => setMethod(event.target.value)} required/>
        </label>

        <label>
          <span>Cooking Time (in Minutes):</span>
          <input type='number' value={cookingTime} onChange={(event) => setCookingTime(event.target.value)} required/>
        </label>

        <button className='btn' onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  )    
}
