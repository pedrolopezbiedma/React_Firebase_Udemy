import { createContext, useReducer } from 'react'

export const AuthenticationContext = createContext();
const initialState = {
    user: null
};
const reducer = (state, action) => {
    switch (action.type) {
        case 'LOG_IN':
            return { ...state, user: action.payload }
        default:
            return { ...state };
    }
}

export function AuthenticationContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState)

  console.log('Authentication state is --> ', state);
  return (
    <AuthenticationContext.Provider value={{ ...state, dispatch }}>
        { children }
    </AuthenticationContext.Provider>
  )
}
