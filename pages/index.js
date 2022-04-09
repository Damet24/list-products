import Head from 'next/head'
import { useState, useEffect } from 'react'
import styles from '../styles/Home.module.css'
import { LogIn, OnAuthStateChanged, RegisterUser } from '../firebase'

export default function Home () {
  const [registerForm, setRegisterForm] = useState({ email: '', password: '' })
  const [loginForm, setLoginForm] = useState({ email: '', password: '' })

  useEffect(() => {
    OnAuthStateChanged()
      .then(user => {
        console.log('user', user)
      })
      .catch(error => console.error(error))
  }, [])

  const handleSubimtRegisterForm = e => {
    e.preventDefault()
    RegisterUser({ ...registerForm })
  }

  const handleSubmitLoginForm = e => {
    e.preventDefault()
    LogIn({ ...loginForm })
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>List products</title>
        <meta name="description" content="app for list products" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Register</h1>
      <form onSubmit={handleSubimtRegisterForm}>
        <input type='email' value={registerForm.email} onChange={e => setRegisterForm({ ...registerForm, email: e.target.value })} />
        <input type='password' value={registerForm.password} onChange={e => setRegisterForm({ ...registerForm, password: e.target.value })} />
        <button type='submit'>Register</button>
      </form>

      <form onSubmit={handleSubmitLoginForm}>
        <input type='email' value={loginForm.email} onChange={e => setLoginForm({ ...loginForm, email: e.target.value })} />
        <input type='password' value={loginForm.password} onChange={e => setLoginForm({ ...loginForm, password: e.target.value })} />
        <button type='submit'>LogIn</button>
      </form>
    </div>
  )
}
