import { useLocation } from 'react-router-dom'
import RecipeList from '../../components/RecipeList'

import { useFetch } from '../../hooks/useFetch'

import './Search.css'

export default function Search() {
  const location = useLocation().search
  const term = new URLSearchParams(location).get('query')

  const { data: filteredRecipes, isLoading, error } = useFetch('http://localhost:3000/recipes?q=' + term )

  return (
    <div>
      <h2 className='page-title'>Recipes including "{term}"</h2>
      { isLoading && ( <p className='loading'>Loading...</p>) }
      { error && ( <p className='error'>{ error }</p>) }

      { filteredRecipes && ( 
        <RecipeList recipes={filteredRecipes} />
      )}
    </div>
  )
}
