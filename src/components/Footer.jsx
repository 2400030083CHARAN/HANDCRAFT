import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner container">
        <div className="footer-brand">
          <span className="footer-logo">◈ TribalCraft</span>
          <p>Bridging heritage and the world — one handcrafted piece at a time.</p>
        </div>
        <div className="footer-links">
          <div className="footer-col">
            <h4>Shop</h4>
            <Link to="/shop">All Products</Link>
            <Link to="/shop?cat=pottery">Pottery</Link>
            <Link to="/shop?cat=textiles">Textiles</Link>
            <Link to="/shop?cat=jewellery">Jewellery</Link>
          </div>
          <div className="footer-col">
            <h4>Platform</h4>
            <Link to="/cultural-hub">Cultural Hub</Link>
            <Link to="/artisan">Artisan Portal</Link>
            <Link to="/admin">Admin Panel</Link>
          </div>
          <div className="footer-col">
            <h4>FSAD-PS02</h4>
            <p>Supporting tribal artisans through technology and global outreach.</p>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 TribalCraft · Preserving Culture, Empowering Artisans</p>
      </div>
    </footer>
  )
}
