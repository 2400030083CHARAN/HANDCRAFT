import React, { useState } from 'react'
import './LoginModal.css'

export default function LoginModal({ setUser, onClose }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleLogin = (e) => {
    e.preventDefault()
    if (!email || !password) {
      setError('Please enter both email and password.')
      return
    }

    const name = email.split('@')[0]
      .split(/[._-]/)
      .filter(Boolean)
      .map(part => part.charAt(0).toUpperCase() + part.slice(1))
      .join(' ')

    setUser({
      id: Date.now(),
      name: name || 'Customer',
      email,
      role: 'customer',
    })
    onClose()
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>✕</button>
        <div className="modal-header">
          <span className="modal-logo">◈</span>
          <h2>Welcome Back</h2>
          <p>Sign in to TribalCraft</p>
        </div>
        <form onSubmit={handleLogin} className="modal-form">
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
          {error && <p className="modal-error">{error}</p>}
          <button type="submit" className="modal-submit">Sign In</button>
        </form>
      </div>
    </div>
  )
}
