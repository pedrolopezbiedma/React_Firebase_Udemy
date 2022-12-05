import { projectFirestore } from '../../firebase/config'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';

import { useThemeContext } from '../../hooks/useThemeContext';
import './Recipe.css'

export default function Recipe() {
  const { id } = useParams();
  const { mode } = useThemeContext()

  const [recipe, setRecipe] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null)

  useEffect(() => {
    setIsLoading(true);

    projectFirestore.collection('recipes').doc(id).get()
    .then((document) => {
      if(!document.exists){
        setError('Could not find that recipe.')
      } else {
        setRecipe(document.data())
      }

      setIsLoading(false)

    })
    .catch((error) => {
      setError(error);
      setIsLoading(false);

    })
  }, [id])
  

  return (
    <div>
      { error && ( <p className='error'>{ error }</p>)}
      { isLoading && ( <p className='loading'>Loading...</p>)}

      { recipe && (
        <div className={`recipe ${mode}`}>
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
