import { useState } from 'react'
import { useHistory } from 'react-router-dom'


import './SearchBar.css'

export default function SearchBar() {
    const [searchTerm, setSearchTerm] = useState('')
    const history = useHistory()
    
    const handleSubmit = (event) => {
        event.preventDefault();

        history.push(`/search?query=${searchTerm}`)
    }

  return (
    <div className='searchbar'>
        <form onSubmit={handleSubmit}>
            <label htmlFor='search'>Search:</label>
            <input id='search' type='text' onChange={(event) => setSearchTerm(event.target.value)}/>
        </form>
    </div>
  )
}
