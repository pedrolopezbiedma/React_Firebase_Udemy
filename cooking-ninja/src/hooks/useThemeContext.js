import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

export const useThemeContext = () => {
    const context = useContext(ThemeContext)

    if(context === undefined){
        throw new Error('Trying to use the context outside its scope! Check your context configuration.')
    }

    return context
}