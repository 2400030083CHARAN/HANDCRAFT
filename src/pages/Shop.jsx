import React, { useState } from 'react'
import ProductCard from '../components/ProductCard.jsx'
import { PRODUCTS, CATEGORIES } from '../data.js'
import './Shop.css'

export default function Shop({ addToCart }) {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('All')
  const [sort, setSort] = useState('default')

  let filtered = PRODUCTS.filter(p => {
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase()) ||
                        p.tribe.toLowerCase().includes(search.toLowerCase()) ||
                        p.artisan.toLowerCase().includes(search.toLowerCase())
    const matchCat = category === 'All' || p.category.toLowerCase() === category.toLowerCase()
    return matchSearch && matchCat
  })

  if (sort === 'price-asc') filtered = [...filtered].sort((a, b) => a.price - b.price)
  if (sort === 'price-desc') filtered = [...filtered].sort((a, b) => b.price - a.price)
  if (sort === 'rating') filtered = [...filtered].sort((a, b) => b.rating - a.rating)

  return (
    <div className="shop-page">
      <div className="shop-hero">
        <h1>Our Collection</h1>
        <p>Authentic tribal handicrafts from across India</p>
      </div>

      <div className="container">
        <div className="shop-filters">
          <input
            className="search-input"
            type="text"
            placeholder="Search by craft, tribe, or artisan..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          <div className="filter-tabs">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                className={`filter-tab ${category === cat ? 'active' : ''}`}
                onClick={() => setCategory(cat)}
              >{cat}</button>
            ))}
          </div>
          <select className="sort-select" value={sort} onChange={e => setSort(e.target.value)}>
            <option value="default">Sort: Default</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="rating">Highest Rated</option>
          </select>
        </div>

        <p className="results-count">{filtered.length} items found</p>

        {filtered.length > 0 ? (
          <div className="shop-grid">
            {filtered.map((p, i) => (
              <div key={p.id} style={{ animationDelay: `${i * 0.07}s` }}>
                <ProductCard product={p} addToCart={addToCart} />
              </div>
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <span>🏺</span>
            <p>No products found. Try a different search or category.</p>
          </div>
        )}
      </div>
    </div>
  )
}
