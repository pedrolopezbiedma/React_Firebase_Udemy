import { Link } from 'react-router-dom'
import { useThemeContext } from '../hooks/useThemeContext'

import SearchBar from './SearchBar'

import './Navbar.css'

export default function Navbar() {
  const { color } = useThemeContext();

  return (
    <div className='navbar' style={{ background: color }}>
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
