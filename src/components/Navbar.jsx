import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'

export default function Navbar({ user, setUser, cart, wishlist, onLoginClick }) {
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
  const wishlistCount = wishlist.length

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
          {user && <Link to="/dashboard" className="nav-link">{user.role} Dashboard</Link>}
        </div>

        <div className="nav-actions">
          <Link to="/profile?tab=wishlist" className="cart-btn" title="Saved for Later">
            ♡ {wishlistCount > 0 && <span className="cart-count">{wishlistCount}</span>}
          </Link>
          <Link to="/profile" className="cart-btn">
            🛒 {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
          </Link>
          {user ? (
            <div className="user-chip">
              <Link to="/dashboard" className="user-chip-name">{user.name}</Link>
              <span className="user-role">{user.role}</span>
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
