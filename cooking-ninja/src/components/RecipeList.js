import { Link } from 'react-router-dom'
import { useThemeContext } from '../hooks/useThemeContext'
import './RecipeList.css'

export default function RecipeList({ recipes }) {
  const { mode } = useThemeContext()

  return (
    <div className='recipe-list'>
        { recipes.map((recipe) => (
            <div className={`card ${mode}`} key={recipe.id}>
                <h3>{ recipe.title }</h3>
                <p>{ recipe.cookingTime } to make</p>
                <div>{ recipe.method.substring(0,100) + '...' }</div>
                <Link to={`/recipe/${recipe.id}`}>Cook this</Link>
            </div>
        )) }
    </div>
  )
}
