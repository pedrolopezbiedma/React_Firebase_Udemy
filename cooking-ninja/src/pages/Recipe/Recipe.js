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
          <h2 className='page-title'>{ recipe.title }</h2>
          <p> {recipe.cookingTime } to cook.</p>
          <ul>
            { recipe.ingredients.map((ingredient) => (
              <li key={ingredient}>{ ingredient }</li>
            ))}
          </ul>
          <p className='method'>{ recipe.method }</p>
        </div>
      )}
    </div>
  )
}
