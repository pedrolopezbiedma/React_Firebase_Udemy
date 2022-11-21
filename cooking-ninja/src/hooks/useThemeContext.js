import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

export const useThemeContext = () => {
    const context = useContext(ThemeContext)

    if(context === undefined){
        throw new Error('ThemeContext is being used outside its scope. Please check your configuration!')
    }

    return context
}