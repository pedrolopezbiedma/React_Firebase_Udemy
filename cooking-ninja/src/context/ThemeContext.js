import { createContext, useReducer } from "react";

// Creating the context
export const ThemeContext = createContext()

// Creating the state
const initialState = {
    color: 'blue'
}
const reducer = (state, action) => {
    switch (action.type) {
        case 'CHANGE_COLOR':
            return { ...state, color: action.payload}
    
        default:
            return state
    }
}

export function ThemeProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState)

  const changeColor = (color) => {
    dispatch({ type: 'CHANGE_COLOR', payload: color })
  }

  return (
    <ThemeContext.Provider value={{ ...state, changeColor}}>
        { children }
    </ThemeContext.Provider>
  )
}
