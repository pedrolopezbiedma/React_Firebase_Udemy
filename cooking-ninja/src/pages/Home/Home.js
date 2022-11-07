import { useFetch } from '../../hooks/useFetch'

import './Home.css'

export default function Home() {
const { data: recipes, isLoading, error } = useFetch('http://localhost:3000/recipes')

  return (
    <div className='home'>
      { isLoading && ( <p className='loading'>Loading...</p>) }
      { error && ( <p className='error'>{ error }</p>) }
      
      { recipes && recipes.map((recipe) => (
        <h2>{ recipe.title }</h2>
      ))}
    </div>
  )
}
