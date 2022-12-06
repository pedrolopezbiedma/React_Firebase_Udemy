import { useState } from 'react'
import { projectAuthentication } from '../firebase/config'

import { useAuthenticationContext } from './useAuthenticationContext'

export const useSignup = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const { dispatch } = useAuthenticationContext();

    const signup = async (email, password, displayName) => {
        setError(null)
        setIsLoading(true)

        try {
            const response = await projectAuthentication.createUserWithEmailAndPassword(email, password);
            if(!response){
                throw new Error('Could not complete the signup');
            }
            await response.user.updateProfile({ displayName });
            
            console.log('Signed up user is --> ', response.user);
            dispatch({ type: 'LOG_IN', payload: response.user })

            setError(null);
            setIsLoading(false);
        
        } catch (error) {
            console.log(error.message);
            setError(error.message);
            setIsLoading(false);
        }
    }

    return { error, isLoading, signup }
}