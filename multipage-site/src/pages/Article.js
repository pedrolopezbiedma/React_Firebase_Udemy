import { useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom' 
import { useFetch } from '../hooks/useFetch'

export default function Article() {
    const { id } = useParams();
    const history = useHistory();
    const url = 'http://localhost:3000/articles/' + id;
    const { data: article, isLoading, error } = useFetch(url)

    useEffect(() => {
        if(error){
            setTimeout(() => {
                history.push('/')
            }, 2000);
        }
    }, [error, history])
    
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
