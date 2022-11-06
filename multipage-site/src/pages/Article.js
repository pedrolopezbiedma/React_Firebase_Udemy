import { useParams } from 'react-router-dom' 
import { useFetch } from '../hooks/useFetch'

export default function Article() {
    const { id } = useParams();
    const url = 'http://localhost:3000/articles/' + id;
    const { data: article, isLoading, error } = useFetch(url)

    return (
        <div>
            { isLoading && ( <div>is loading...</div>)}
            { error && ( <div>{error}</div>)}
            { article && (
                <div>
                    <h2>{article.title}</h2>
                    <p>{article.author}</p>
                    <p>{article.body}</p>
                </div>
            )}
        </div>
    )
}
