import { projectAuthentication } from '../firebase/config'
import { useState } from 'react'

export const useSignup = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    const signup = async (email, password, displayName) => {
        setError(null)
        setIsLoading(true)

        try {
            const response = await projectAuthentication.createUserWithEmailAndPassword(email, password);
            if(!response){
                throw new Error('Could not complete the signup');
            }
            console.log(response);

            await response.user.updateProfile({ displayName });

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