import React from 'react'
import { Link } from 'react-router-dom'
import './ProductCard.css'

export default function ProductCard({ product, addToCart, toggleWishlist, isWishlisted }) {
  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`} className="card-image-wrap">
        <div className="card-image" style={{ background: product.color }}>
          {product.image ? (
            <img
              src={product.image}
              alt={product.name}
              className="card-product-image"
              loading="lazy"
            />
          ) : (
            <span className="card-emoji">{product.emoji}</span>
          )}
        </div>
        <div className="card-overlay">
          <span>View Details</span>
        </div>
        {product.featured && <span className="badge">Featured</span>}
      </Link>
      <div className="card-body">
        <div className="card-meta">
          <span className="card-tribe">{product.tribe}</span>
          <div className="card-actions-mini">
            <span className="card-rating">★ {product.rating}</span>
            <button
              className={`like-btn ${isWishlisted ? 'saved' : ''}`}
              onClick={() => toggleWishlist(product)}
              aria-label={isWishlisted ? 'Remove from wishlist' : 'Save to wishlist'}
              title={isWishlisted ? 'Saved' : 'Save for later'}
            >
              {isWishlisted ? '♥' : '♡'}
            </button>
          </div>
        </div>
        <h3 className="card-title">{product.name}</h3>
        <p className="card-artisan">by {product.artisan}</p>
        <div className="card-footer">
          <span className="card-price">₹{product.price.toLocaleString()}</span>
          <button className="add-to-cart" onClick={() => addToCart(product)}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}
