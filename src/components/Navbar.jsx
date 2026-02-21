import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'

export default function Navbar({ user, setUser, cart, onLoginClick }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => setMenuOpen(false), [location])

  const cartCount = cart.reduce((a, b) => a + b.qty, 0)

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-inner container">
        <Link to="/" className="nav-logo">
          <span className="logo-icon">◈</span>
          <span className="logo-text">TribalCraft</span>
        </Link>

        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <Link to="/shop" className="nav-link">Shop</Link>
          <Link to="/cultural-hub" className="nav-link">Cultural Hub</Link>
          {user?.role === 'artisan' && <Link to="/artisan" className="nav-link">Dashboard</Link>}
          {user?.role === 'admin' && <Link to="/admin" className="nav-link">Admin</Link>}
        </div>

        <div className="nav-actions">
          <Link to="/profile" className="cart-btn">
            🛒 {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
          </Link>
          {user ? (
            <div className="user-chip">
              <span>{user.name}</span>
              <button onClick={() => setUser(null)} className="logout-btn">✕</button>
            </div>
          ) : (
            <button className="btn-primary-sm" onClick={onLoginClick}>Sign In</button>
          )}
          <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>
    </nav>
  )
}
