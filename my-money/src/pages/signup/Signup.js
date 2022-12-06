import { useState } from 'react'
import { useSignup } from '../../hooks/useSignup'

import styles from './Signup.module.css'

export default function Signup() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [displayName, setDisplayName] = useState('')
  const { signup, isLoading, error } = useSignup();

  const handleSubmit = (event) => {
    event.preventDefault();
    signup(email, password, displayName);
  }

  return (
    <form className={styles['signup-form']} onSubmit={handleSubmit}>
      <h2>Sign Up</h2>
      <label>
        <span>Email: </span>
        <input type='email' autoComplete='username' onChange={(event) => setEmail(event.target.value)}/>
      </label>
      <label>
        <span>Password: </span>
        <input type='password' autoComplete='current-password' onChange={(event) => setPassword(event.target.value)}/>
      </label>
      <label>
        <span>Display Name: </span>
        <input type='text' onChange={(event) => setDisplayName(event.target.value)}/>
      </label>

      { !isLoading && (
        <button className='btn'>Sign Up</button>
      )}
      { isLoading && (
        <button className='btn' disabled>loading...</button>
      )}
      { error && (
        <p>{ error }</p>
      )}
    </form>
  )
}