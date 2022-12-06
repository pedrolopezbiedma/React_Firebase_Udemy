import { useContext } from "react"

import { AuthenticationContext } from "../context/authenticationContext"

export const useAuthenticationContext = () => {
    const context = useContext(AuthenticationContext)

    if(!context){
        throw new Error('Using authentication context outside its scope. Check your configuration!')
    }

    return { ...context }
}