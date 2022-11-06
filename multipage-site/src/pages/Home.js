import { useFetch } from '../hooks/useFetch'

import './Home.css'

export default function Home() {

  const { data: articles, isLoading, error } = useFetch('http://localhost:3000/articles');

  return (
    <div className='home'>
      { isLoading && ( <div>is loading...</div>)}
      { error && ( <div>{error}</div>)}
      { articles && articles.map((article) => (
        <div key={article.id} className='card'>
          <h2>{article.title}</h2>
          <p>{article.author}</p>
        </div>
      ))}
    </div>
  )
}
