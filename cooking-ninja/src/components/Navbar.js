import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import { Link } from 'react-router-dom'

import SearchBar from './SearchBar'
import './Navbar.css'

export default function Navbar() {
  const { color } = useContext(ThemeContext)

  return (
    <div className='navbar' style={ {background: color} }>
        <nav>
            <Link to='/' className='brand'>
                <h1>Cooking Ninja</h1>
            </Link>
            <SearchBar />
            <Link to='/create'>Create</Link>
        </nav>
    </div>
  )
}
