import React from 'react'
import { Link } from 'react-router-dom'
import ProductCard from '../components/ProductCard.jsx'
import { PRODUCTS } from '../data.js'
import './Home.css'

export default function Home({ addToCart }) {
  const featured = PRODUCTS.filter(p => p.featured).slice(0, 4)

  return (
    <div className="home">
      {/* Hero */}
      <section className="hero">
        <div className="hero-bg">
          <div className="hero-pattern"></div>
        </div>
        <div className="hero-content container">
          <p className="hero-eyebrow">FSAD-PS02 · Tribal Heritage Platform</p>
          <h1 className="hero-title">
            <span>Handcrafted</span>
            <em>with</em>
            <span>Soul</span>
          </h1>
          <p className="hero-sub">
            Discover authentic tribal handicrafts made by artisans across India.<br />
            Every purchase preserves a tradition and empowers a community.
          </p>
          <div className="hero-cta">
            <Link to="/shop" className="btn-primary">Explore Crafts</Link>
            <Link to="/cultural-hub" className="btn-outline">Cultural Stories</Link>
          </div>
          <div className="hero-stats">
            <div className="stat"><span>240+</span><p>Artisans</p></div>
            <div className="stat"><span>18</span><p>Tribal Communities</p></div>
            <div className="stat"><span>1,200+</span><p>Products</p></div>
          </div>
        </div>
        <div className="hero-scroll-hint">↓</div>
      </section>

      {/* Categories */}
      <section className="categories section">
        <div className="container">
          <div className="section-header">
            <h2>Explore by Craft</h2>
            <em className="section-sub">Ancient traditions, living today</em>
          </div>
          <div className="cat-grid">
            {[
              { label: 'Tribal Art', emoji: '🎨', desc: 'Warli, Gond, Madhubani' },
              { label: 'Textiles', emoji: '🧣', desc: 'Ikat, Tie-dye, Embroidery' },
              { label: 'Metalwork', emoji: '🔔', desc: 'Dhokra, Bronze Casting' },
              { label: 'Woodcraft', emoji: '🐘', desc: 'Kondapalli, Channapatna' },
            ].map(cat => (
              <Link to={`/shop?cat=${cat.label.toLowerCase()}`} key={cat.label} className="cat-card">
                <span className="cat-emoji">{cat.emoji}</span>
                <h3>{cat.label}</h3>
                <p>{cat.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="featured section">
        <div className="container">
          <div className="section-header">
            <h2>Featured Pieces</h2>
            <em className="section-sub">Curated by our Cultural Consultants</em>
          </div>
          <div className="products-grid">
            {featured.map((p, i) => (
              <div key={p.id} style={{ animationDelay: `${i * 0.1}s` }}>
                <ProductCard product={p} addToCart={addToCart} />
              </div>
            ))}
          </div>
          <div className="section-cta">
            <Link to="/shop" className="btn-primary">View All Products →</Link>
          </div>
        </div>
      </section>

      {/* Artisan Stories */}
      <section className="artisan-strip section">
        <div className="container">
          <div className="strip-inner">
            <div className="strip-text">
              <h2>Empowering the Makers</h2>
              <p>
                TribalCraft gives tribal artisans a direct channel to global markets.
                No middlemen. Fair pricing. Cultural respect. Our platform helps preserve
                centuries-old traditions while providing sustainable livelihoods.
              </p>
              <Link to="/artisan" className="btn-outline">Artisan Dashboard →</Link>
            </div>
            <div className="strip-visual">
              {['🧵', '🪴', '🏺', '🎋', '🔔', '🎨'].map((e, i) => (
                <span key={i} className="strip-emoji" style={{ animationDelay: `${i * 0.3}s` }}>{e}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Roles Overview */}
      <section className="roles section">
        <div className="container">
          <div className="section-header">
            <h2>Platform Roles</h2>
            <em className="section-sub">Everyone has a part to play</em>
          </div>
          <div className="roles-grid">
            {[
              { role: 'Admin', icon: '🛡️', desc: 'Manage platform content, monitor transactions, resolve disputes and ensure quality.' },
              { role: 'Artisan', icon: '🤲', desc: 'Create product listings, manage orders, communicate with customers and grow your business.' },
              { role: 'Customer', icon: '🛒', desc: 'Explore unique handicrafts, purchase directly from artisans, review and join promotions.' },
              { role: 'Cultural Consultant', icon: '📚', desc: 'Ensure content authentically represents tribal traditions, crafts and heritage.' },
            ].map(r => (
              <div key={r.role} className="role-card">
                <span className="role-icon">{r.icon}</span>
                <h3>{r.role}</h3>
                <p>{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
