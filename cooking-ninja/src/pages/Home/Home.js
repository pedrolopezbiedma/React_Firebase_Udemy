import { projectFirestore } from '../../firebase/config'
import { useState, useEffect } from 'react'

import RecipeList from '../../components/RecipeList'
import './Home.css'

export default function Home() {
  const [recipes, setRecipes] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    setIsLoading(true);

    projectFirestore.collection('recipes').get()
    .then((snapshot) => {
      console.log('snapshot -->', snapshot)
      if(snapshot.empty) {
        setError('No recipes to load');

      } else {
        let recipes = [];
        snapshot.docs.forEach((document) => {
          recipes.push({ id: document.id, ...document.data() })
        })
        setRecipes(recipes);
        
      }

      setIsLoading(false);
    })
    .catch((error) => {
      setError(error);
      setIsLoading(false);
    })
  }, [])
  
  return (
    <div className='home'>
      { isLoading && ( <p className='loading'>Loading...</p>) }
      { error && ( <p className='error'>{ error }</p>) }
      
      { recipes && (
        <RecipeList recipes={recipes}/>
      )}
    </div>
  )
}
