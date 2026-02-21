import React, { useState } from 'react'
import './LoginModal.css'

const DEMO_USERS = [
  { id: 1, name: 'Admin User', email: 'admin@tribal.com', password: 'admin123', role: 'admin' },
  { id: 2, name: 'Meera Devi', email: 'artisan@tribal.com', password: 'artisan123', role: 'artisan' },
  { id: 3, name: 'Ravi Kumar', email: 'customer@tribal.com', password: 'cust123', role: 'customer' },
  { id: 4, name: 'Dr. Priya Nair', email: 'consultant@tribal.com', password: 'cult123', role: 'consultant' },
]

export default function LoginModal({ setUser, onClose }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleLogin = (e) => {
    e.preventDefault()
    const found = DEMO_USERS.find(u => u.email === email && u.password === password)
    if (found) {
      setUser(found)
      onClose()
    } else {
      setError('Invalid credentials. Try demo accounts below.')
    }
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
        <div className="demo-accounts">
          <p>Demo Accounts:</p>
          {DEMO_USERS.map(u => (
            <button key={u.id} className="demo-btn"
              onClick={() => { setEmail(u.email); setPassword(u.password) }}>
              {u.role} — {u.email}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
