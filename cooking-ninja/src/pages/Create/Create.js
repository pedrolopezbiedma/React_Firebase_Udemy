import { projectFirestore } from '../../firebase/config'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import './Create.css'

export default function Create() {

  const [title, setTitle] = useState('')
  const [method, setMethod] = useState('')
  const [cookingTime, setCookingTime] = useState('')
  const [newIngredient, setNewIngredient] = useState('')
  const [ingredients, setIngredients] = useState([])
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    try {
      projectFirestore.collection('recipes').add({ title, ingredients, method, cookingTime: cookingTime + ' minutes' })
      history.push('/');

    } catch (error) {
      console.log('Error when submiting: ', error);
    }
    // postData({ title, ingredients, method, cookingTime })

  }

  const handleAddIngredient = (event) => {
    event.preventDefault();
    const ingredient = newIngredient.trim();

    if(ingredient && !ingredients.includes(ingredient)) {
      setIngredients((prevIngredients) => {
        return [...prevIngredients, ingredient]
      })
    }
    setNewIngredient('')


  }

  return (
    <div className='create'>
      <h2 className='pag-title'>Add a New Recipe.</h2>

      <form>
        <label>
          <span>Title:</span>
          <input type='text' value={title} onChange={(event) => setTitle(event.target.value)} required/>
        </label>

        <label>
          <span>Ingredients:</span>
          <div className='ingredients'>
            <input type='text' value={newIngredient} onChange={(event) => setNewIngredient(event.target.value)} />
            <button className='btn' onClick={handleAddIngredient}>Add</button>
          </div>
        </label>
        <p>Current Ingredients:
          { ingredients.map((ingredient) => (
            <em key={ingredient}>{ ingredient }, </em>
          ))}
        </p>
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
