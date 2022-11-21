import { useThemeContext } from '../hooks/useThemeContext'

import './ThemeSelector.css'
import modeIcon from '../assets/mode-icon.svg'
const themeColors = [ '#58249c', '#249c6b', '#b70233']

export default function ThemeSelector() {
    const { changeColor, changeMode, mode } = useThemeContext();

    const toggleMode = () => {
        changeMode(mode === 'dark' ? 'light' : 'dark' )
    }

    console.log('Mode es -->', mode )
    return (
        <div className='theme-selector'>
            <div className='mode-toggle'>
                <img
                    src={modeIcon}
                    alt='dark / light toggle mode'
                    onClick = { toggleMode }
                    style={{ filter: mode === 'dark' ? 'invert(100%)' : 'invert(20%)' }}
                    />
            </div>
            <div className='theme-buttons'>
                { themeColors.map((themeColor) => {
                    return(
                        <div key={ themeColor } onClick={() => changeColor( themeColor )} style={{ background: themeColor }} />
                    )
                })}
            </div>
        </div>
  )
}
