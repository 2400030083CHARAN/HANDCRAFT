import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { PRODUCTS } from '../data.js'
import './ProductDetail.css'

export default function ProductDetail({ addToCart, toggleWishlist, wishlist }) {
  const { id } = useParams()
  const product = PRODUCTS.find(p => p.id === parseInt(id))
  const [qty, setQty] = useState(1)
  const [added, setAdded] = useState(false)
  const [activeTab, setActiveTab] = useState('description')
  const [review, setReview] = useState('')
  const [reviews, setReviews] = useState([
    { name: 'Arjun P.', rating: 5, text: 'Absolutely stunning piece. The craftsmanship is unbelievable.' },
    { name: 'Sunita R.', rating: 4, text: 'Beautiful work. Arrived safely packaged. Will buy again.' },
  ])

  if (!product) return <div className="not-found container">Product not found. <Link to="/shop">← Back</Link></div>

  const isWishlisted = wishlist.some(item => item.id === product.id)

  const handleAddToCart = () => {
    for (let i = 0; i < qty; i++) addToCart(product)
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  const handleReview = (e) => {
    e.preventDefault()
    if (review.trim()) {
      setReviews([...reviews, { name: 'You', rating: 5, text: review }])
      setReview('')
    }
  }

  return (
    <div className="product-detail">
      <div className="container">
        <Link to="/shop" className="back-link">← Back to Shop</Link>

        <div className="detail-grid">
          <div className="detail-image">
            <div className="big-image" style={{ background: product.color }}>
              {product.image ? (
                <img
                  src={product.image}
                  alt={product.name}
                  className="detail-product-image"
                />
              ) : (
                <span>{product.emoji}</span>
              )}
            </div>
            {product.featured && <span className="detail-badge">✦ Featured Piece</span>}
          </div>

          <div className="detail-info">
            <div className="detail-meta">
              <span className="detail-tribe">{product.tribe} Tradition</span>
              <span className="detail-rating">★ {product.rating} ({product.reviews} reviews)</span>
            </div>
            <h1 className="detail-title">{product.name}</h1>
            <p className="detail-artisan">Crafted by <strong>{product.artisan}</strong></p>
            <p className="detail-price">₹{product.price.toLocaleString()}</p>
            <p className="detail-stock">🟢 {product.stock} in stock</p>

            <div className="qty-row">
              <button onClick={() => setQty(Math.max(1, qty - 1))}>−</button>
              <span>{qty}</span>
              <button onClick={() => setQty(Math.min(product.stock, qty + 1))}>+</button>
            </div>

            <button className={`buy-btn ${added ? 'added' : ''}`} onClick={handleAddToCart}>
              {added ? '✓ Added to Cart!' : 'Add to Cart'}
            </button>

            <button
              className={`save-btn ${isWishlisted ? 'saved' : ''}`}
              onClick={() => toggleWishlist(product)}
            >
              {isWishlisted ? '♥ Saved for later' : '♡ Save for later'}
            </button>

            <div className="detail-tags">
              <span>🌿 Natural Materials</span>
              <span>🤝 Fair Trade</span>
              <span>📦 Free Shipping ₹2000+</span>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="detail-tabs">
          {['description', 'heritage', 'reviews'].map(tab => (
            <button
              key={tab}
              className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >{tab.charAt(0).toUpperCase() + tab.slice(1)}</button>
          ))}
        </div>

        <div className="tab-content">
          {activeTab === 'description' && (
            <div className="tab-panel">
              <p>{product.description}</p>
              <p>Each piece is handcrafted and may vary slightly — a mark of its authenticity.</p>
            </div>
          )}
          {activeTab === 'heritage' && (
            <div className="tab-panel">
              <h3>About the {product.tribe} Tradition</h3>
              <p>The {product.tribe} craft tradition is a living heritage passed through generations of skilled artisans. This particular craft form dates back centuries and represents the unique worldview, mythology, and natural environment of the community.</p>
              <p>Supporting this purchase directly contributes to the preservation of this cultural heritage and provides sustainable income to the artisan and their community.</p>
            </div>
          )}
          {activeTab === 'reviews' && (
            <div className="tab-panel">
              {reviews.map((r, i) => (
                <div key={i} className="review-item">
                  <div className="review-header">
                    <strong>{r.name}</strong>
                    <span>{'★'.repeat(r.rating)}</span>
                  </div>
                  <p>{r.text}</p>
                </div>
              ))}
              <form onSubmit={handleReview} className="review-form">
                <textarea
                  placeholder="Write your review..."
                  value={review}
                  onChange={e => setReview(e.target.value)}
                  rows={3}
                />
                <button type="submit" className="buy-btn" style={{ width: 'auto', padding: '0.7rem 1.5rem' }}>
                  Post Review
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
