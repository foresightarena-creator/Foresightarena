import { useState } from 'react'
import { supabase } from '../lib/supabaseClient'

export default function Login() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleLogin = async (e) => {
    e.preventDefault()
    const { error } = await supabase.auth.signInWithOtp({ email })
    if (error) setMessage('Error: ' + error.message)
    else setMessage('Check your email for a login link!')
  }

  return (
    <div style={{ textAlign: 'center', marginTop: '80px' }}>
      <h1>Login to ForesightArena</h1>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{ padding: '10px', width: '250px', marginBottom: '10px' }}
        />
        <br />
        <button
          type="submit"
          style={{
            background: '#0070f3',
            color: 'white',
            border: 'none',
            padding: '10px 20px',
            borderRadius: '8px',
          }}
        >
          Send Login Link
        </button>
      </form>
      <p>{message}</p>
    </div>
  )
}
