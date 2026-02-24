import React, { useState } from 'react'
import { PRODUCTS, ARTISANS } from '../data.js'
import './Dashboard.css'

const myProducts = PRODUCTS.slice(0, 4)

export default function ArtisanDashboard({ user }) {
  if (user && user.role !== 'artisan') {
    return (
      <div className="dashboard-page">
        <div className="dash-hero" style={{ background: 'linear-gradient(135deg, #5A6B3A 0%, #3D4F22 100%)' }}>
          <h1>🤲 Artisan Dashboard</h1>
          <p>This dashboard is available for artisan accounts only.</p>
        </div>
      </div>
    )
  }

  const [activeSection, setActiveSection] = useState('overview')
  const [newProduct, setNewProduct] = useState({ name: '', price: '', category: '', description: '' })
  const [products, setProducts] = useState(myProducts)
  const [submitted, setSubmitted] = useState(false)

  const handleAddProduct = (e) => {
    e.preventDefault()
    const p = { ...newProduct, id: Date.now(), price: parseInt(newProduct.price), emoji: '🎨', color: '#F2DEC4', tribe: 'My Tribe', artisan: 'Me', rating: 5, reviews: 0, stock: 10, featured: false, category: newProduct.category || 'art' }
    setProducts([...products, p])
    setNewProduct({ name: '', price: '', category: '', description: '' })
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 2000)
  }

  return (
    <div className="dashboard-page">
      <div className="dash-hero" style={{ background: 'linear-gradient(135deg, #5A6B3A 0%, #3D4F22 100%)' }}>
        <h1>🤲 Artisan Dashboard</h1>
        <p>Welcome {user?.name || 'Artisan'} — manage your products, orders, and messages</p>
      </div>

      <div className="container">
        <div className="dash-layout">
          <aside className="dash-sidebar">
            {[
              { key: 'overview', icon: '📊', label: 'Overview' },
              { key: 'products', icon: '🏺', label: 'My Products' },
              { key: 'add', icon: '➕', label: 'Add Product' },
              { key: 'orders', icon: '📦', label: 'Orders' },
              { key: 'messages', icon: '💬', label: 'Messages' },
            ].map(s => (
              <button
                key={s.key}
                className={`dash-nav-btn ${activeSection === s.key ? 'active' : ''}`}
                onClick={() => setActiveSection(s.key)}
              >
                {s.icon} {s.label}
              </button>
            ))}
          </aside>

          <main className="dash-main">
            {activeSection === 'overview' && (
              <div>
                <h2 className="dash-title">Overview</h2>
                <div className="stats-grid">
                  <div className="stat-card">
                    <span className="stat-num">₹86,000</span>
                    <p>Total Earnings</p>
                  </div>
                  <div className="stat-card">
                    <span className="stat-num">{products.length}</span>
                    <p>Products Listed</p>
                  </div>
                  <div className="stat-card">
                    <span className="stat-num">142</span>
                    <p>Orders Completed</p>
                  </div>
                  <div className="stat-card">
                    <span className="stat-num">4.8 ★</span>
                    <p>Avg Rating</p>
                  </div>
                </div>
                <div className="artisan-profile">
                  <h3>Your Profile</h3>
                  <div className="profile-row"><span>Name:</span><strong>{user?.name || 'Kavitha Meher'}</strong></div>
                  <div className="profile-row"><span>Email:</span><strong>{user?.email || 'Not provided'}</strong></div>
                  <div className="profile-row"><span>Tribe:</span><strong>Odisha (Sambalpuri)</strong></div>
                  <div className="profile-row"><span>Location:</span><strong>Sambalpur, Odisha</strong></div>
                  <div className="profile-row"><span>Verified:</span><strong>✅ Verified Artisan</strong></div>
                </div>
              </div>
            )}

            {activeSection === 'products' && (
              <div>
                <h2 className="dash-title">My Products</h2>
                <div className="product-list">
                  {products.map(p => (
                    <div key={p.id} className="product-list-item">
                      <span className="p-emoji">{p.emoji}</span>
                      <div className="p-info">
                        <strong>{p.name}</strong>
                        <p>₹{p.price.toLocaleString()} · Stock: {p.stock} · ★{p.rating}</p>
                      </div>
                      <div className="p-actions">
                        <button className="p-btn edit">Edit</button>
                        <button className="p-btn delete" onClick={() => setProducts(products.filter(x => x.id !== p.id))}>Delete</button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeSection === 'add' && (
              <div>
                <h2 className="dash-title">Add New Product</h2>
                <form onSubmit={handleAddProduct} className="add-form">
                  <label>Product Name
                    <input type="text" value={newProduct.name} onChange={e => setNewProduct({ ...newProduct, name: e.target.value })} required placeholder="e.g. Hand-woven Ikat Saree" />
                  </label>
                  <label>Price (₹)
                    <input type="number" value={newProduct.price} onChange={e => setNewProduct({ ...newProduct, price: e.target.value })} required placeholder="e.g. 2500" />
                  </label>
                  <label>Category
                    <select value={newProduct.category} onChange={e => setNewProduct({ ...newProduct, category: e.target.value })} required>
                      <option value="">Select category</option>
                      <option value="art">Art</option>
                      <option value="textiles">Textiles</option>
                      <option value="metalwork">Metalwork</option>
                      <option value="woodwork">Woodwork</option>
                    </select>
                  </label>
                  <label>Description
                    <textarea rows={4} value={newProduct.description} onChange={e => setNewProduct({ ...newProduct, description: e.target.value })} placeholder="Describe the craft, materials, and cultural significance..." />
                  </label>
                  <button type="submit" className="submit-btn">{submitted ? '✓ Product Added!' : 'Add Product'}</button>
                </form>
              </div>
            )}

            {activeSection === 'orders' && (
              <div>
                <h2 className="dash-title">Recent Orders</h2>
                {[
                  { id: '#TC-1042', item: 'Sambalpuri Ikat Silk Dupatta', customer: 'Arjun P., Mumbai', date: '18 Feb', status: 'Processing', amount: 3200 },
                  { id: '#TC-1038', item: 'Sambalpuri Ikat Silk Dupatta', customer: 'Meena S., Delhi', date: '15 Feb', status: 'Shipped', amount: 3200 },
                  { id: '#TC-1031', item: 'Kondapalli Elephant', customer: 'David L., Bangalore', date: '10 Feb', status: 'Delivered', amount: 950 },
                ].map(o => (
                  <div key={o.id} className="order-item">
                    <div>
                      <strong>{o.id}</strong> — {o.item}
                      <p>{o.customer} · {o.date}</p>
                    </div>
                    <div className="order-right">
                      <span className={`order-status ${o.status.toLowerCase()}`}>{o.status}</span>
                      <strong>₹{o.amount.toLocaleString()}</strong>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeSection === 'messages' && (
              <div>
                <h2 className="dash-title">Messages</h2>
                {[
                  { from: 'Arjun P.', msg: 'Can you do a custom color for the dupatta?', time: '2h ago' },
                  { from: 'Dr. Priya Nair', msg: 'I would like to feature your work in our cultural exhibition.', time: '1 day ago' },
                ].map((m, i) => (
                  <div key={i} className="message-item">
                    <strong>{m.from}</strong> <span className="msg-time">{m.time}</span>
                    <p>{m.msg}</p>
                  </div>
                ))}
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  )
}
