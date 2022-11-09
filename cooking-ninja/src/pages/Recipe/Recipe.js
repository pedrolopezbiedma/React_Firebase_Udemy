import { useParams } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'
import './Recipe.css'

export default function Recipe() {
  const { id } = useParams();
  const { data: recipe, isLoading, error } = useFetch('http://localhost:3000/recipes/' + id)

  return (
    <div>
      { error && ( <p className='error'>{ error }</p>)}
      { isLoading && ( <p className='loading'>Loading...</p>)}

      { recipe && (
        <div className='recipe'>
          <h1>{ recipe.title }</h1>
        </div>
      )}
    </div>
  )
}
