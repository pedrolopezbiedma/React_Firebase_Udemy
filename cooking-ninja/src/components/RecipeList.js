import { projectFirestore } from '../firebase/config'
import { Link } from 'react-router-dom'
import { useThemeContext } from '../hooks/useThemeContext'
import trashcan from '../assets/trashcan.svg'

import './RecipeList.css'

export default function RecipeList({ recipes }) {
  const { mode } = useThemeContext()

  const handleDelete = (id) => {
    projectFirestore.collection('recipes').doc(id).delete();

  }
  return (
    <div className='recipe-list'>
        { recipes.map((recipe) => (
            <div className={`card ${mode}`} key={recipe.id}>
                <h3>{ recipe.title }</h3>
                <p>{ recipe.cookingTime } to make</p>
                <div>{ recipe.method.substring(0,100) + '...' }</div>
                <Link to={`/recipe/${recipe.id}`}>Cook this</Link>
                <img 
                  className='delete'
                  alt='delete icon'
                  src={trashcan}
                  onClick={() => handleDelete(recipe.id)}
                />
            </div>
        )) }
    </div>
  )
}
