import { Link } from 'react-router-dom'

import SearchBar from './SearchBar'
import './Navbar.css'
import { useThemeContext } from '../hooks/useThemeContext'

export default function Navbar() {
  const { color, changeColor } = useThemeContext()

  return (
    <div className='navbar' style={{ background: color }}>
        <nav onClick={() => changeColor('pink')}>
            <Link to='/' className='brand'>
                <h1>Cooking Ninja</h1>
            </Link>
            <SearchBar />
            <Link to='/create'>Create</Link>
        </nav>
    </div>
  )
}
