import { useFetch } from '../../hooks/useFetch'
import RecipeList from '../../components/RecipeList'

import './Home.css'

export default function Home() {
const { data: recipes, isLoading, error } = useFetch('http://localhost:3000/recipes')

  return (
    <div className='home'>
      { isLoading && ( <p className='loading'>Loading...</p>) }
      { error && ( <p className='error'>{ error }</p>) }
      
      { recipes && (
        <RecipeList recipes={recipes}/>
      )}
      { /* 
      { recipes && recipes.map((recipe) => (
        <h2>{ recipe.title }</h2>
      ))}
      */}
    </div>
  )
}
