import { useState } from 'react'

import styles from './Signup.module.css'

export default function Signup() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [displayName, setDisplayName] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Event es --> ',email + ' , ' + password + ' , ' + displayName);
  }

  return (
    <form className={styles['signup-form']} onSubmit={handleSubmit}>
      <h2>Sign Up</h2>
      <label>
        <span>Email: </span>
        <input type='email' onChange={(event) => setEmail(event.target.value)}/>
      </label>
      <label>
        <span>Password: </span>
        <input type='password' onChange={(event) => setPassword(event.target.value)}/>
      </label>
      <label>
        <span>Display Name: </span>
        <input type='text' onChange={(event) => setDisplayName(event.target.value)}/>
      </label>
      <button className='btn'>Sign Up</button>
    </form>
  )
}
