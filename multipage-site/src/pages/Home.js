import { Link } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch'

import './Home.css'

export default function Home() {
  const { data: articles, isLoading, error } = useFetch('http://localhost:3000/articles');

  return (
    <div className='home'>
      <h2>Articles</h2>
      { isLoading && ( <div>is loading...</div>)}
      { error && ( <div>{error}</div>)}
      { articles && articles.map((article) => (
        <div key={article.id} className='card'>
          <h2>{article.title}</h2>
          <p>{article.author}</p>
          <Link to={`/article/${article.id}`}>Read more...</Link>
        </div>
      ))}
    </div>
  )
}
