import { useThemeContext } from '../hooks/useThemeContext'

import './ThemeSelector.css'

const themeColors = [ '#58249c', '#249c6b', '#b70233']

export default function ThemeSelector() {
    const { changeColor } = useThemeContext();
    return (
        <div className='theme-selector'>
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
