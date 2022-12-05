import { useState } from 'react'

import styles from './Login.module.css'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('State es ->', email + ' , ' + password )
  }

  return (
    <form className={styles['login-form']} onSubmit={handleSubmit}>
      <h2>Login</h2>
      <label>
        <span>Email: </span>
        <input type='email' onChange={(event) => setEmail(event.target.value)}/>
      </label>
      <label>
        <span>Password: </span>
        <input type='password' onChange={(event) => setPassword(event.target.value)} />
      </label>
      <button className='btn'>Login</button>
    </form>
  )
}
