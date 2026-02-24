import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import './Dashboard.css'
import './CustomerProfile.css'

export default function CustomerProfile({ cart, setCart, addToCart, wishlist, setWishlist, user }) {
  const [searchParams, setSearchParams] = useSearchParams()
  const initialSection = ['cart', 'orders', 'profile', 'wishlist'].includes(searchParams.get('tab'))
    ? searchParams.get('tab')
    : 'cart'
  const [section, setSection] = useState(initialSection)
  const [orderPlaced, setOrderPlaced] = useState(false)

  const total = cart.reduce((a, b) => a + b.price * b.qty, 0)

  const removeItem = (id) => setCart(cart.filter(i => i.id !== id))
  const removeFromWishlist = (id) => setWishlist(wishlist.filter(i => i.id !== id))
  const moveToCart = (item) => {
    addToCart(item)
    removeFromWishlist(item.id)
  }

  const handleSectionChange = (key) => {
    setSection(key)
    setSearchParams({ tab: key })
  }

  const handleCheckout = () => {
    setCart([])
    setOrderPlaced(true)
    setTimeout(() => setOrderPlaced(false), 4000)
  }

  return (
    <div className="dashboard-page">
      <div className="dash-hero" style={{ background: 'linear-gradient(135deg, #C9A84C 0%, #a07828 100%)' }}>
        <h1>🛒 My Account</h1>
        <p>{user ? `Welcome ${user.name} — your cart, orders, and profile` : 'Your cart, orders, and profile'}</p>
      </div>

      <div className="container">
        <div className="dash-layout">
          <aside className="dash-sidebar">
            {[
              { key: 'cart', icon: '🛒', label: 'Cart' },
              { key: 'orders', icon: '📦', label: 'My Orders' },
              { key: 'profile', icon: '👤', label: 'Profile' },
              { key: 'wishlist', icon: '❤️', label: 'Wishlist' },
            ].map(s => (
              <button key={s.key} className={`dash-nav-btn ${section === s.key ? 'active' : ''}`} onClick={() => handleSectionChange(s.key)}>
                {s.icon} {s.label} {s.key === 'cart' && cart.length > 0 ? `(${cart.length})` : ''}
                {s.key === 'wishlist' && wishlist.length > 0 ? `(${wishlist.length})` : ''}
              </button>
            ))}
          </aside>

          <main className="dash-main">
            {section === 'cart' && (
              <div>
                <h2 className="dash-title">Shopping Cart</h2>
                {orderPlaced && (
                  <div className="success-banner">✓ Order placed successfully! Thank you for supporting tribal artisans.</div>
                )}
                {cart.length === 0 && !orderPlaced ? (
                  <div style={{ textAlign: 'center', padding: '3rem', color: 'var(--smoke)' }}>
                    <span style={{ fontSize: '3rem', display: 'block', marginBottom: '1rem' }}>🛒</span>
                    <p>Your cart is empty. <a href="/shop" style={{ color: 'var(--clay)' }}>Browse products →</a></p>
                  </div>
                ) : cart.length > 0 && (
                  <>
                    <table className="cart-table">
                      <thead><tr><th>Item</th><th>Artisan</th><th>Price</th><th>Qty</th><th>Total</th><th></th></tr></thead>
                      <tbody>
                        {cart.map(item => (
                          <tr key={item.id}>
                            <td>{item.emoji} {item.name}</td>
                            <td style={{ color: 'var(--smoke)', fontSize: '0.85rem' }}>{item.artisan}</td>
                            <td>₹{item.price.toLocaleString()}</td>
                            <td>{item.qty}</td>
                            <td>₹{(item.price * item.qty).toLocaleString()}</td>
                            <td><button className="p-btn delete" onClick={() => removeItem(item.id)}>Remove</button></td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    <div className="cart-total">Total: ₹{total.toLocaleString()}</div>
                    <button className="checkout-btn" onClick={handleCheckout}>Proceed to Checkout →</button>
                  </>
                )}
              </div>
            )}

            {section === 'orders' && (
              <div>
                <h2 className="dash-title">My Orders</h2>
                {[
                  { id: '#TC-1099', item: 'Warli Hand-Painted Canvas', date: '12 Feb', status: 'delivered', amount: 2400 },
                  { id: '#TC-1045', item: 'Bastar Dhokra Bell', date: '01 Feb', status: 'delivered', amount: 1850 },
                ].map(o => (
                  <div key={o.id} className="order-item">
                    <div>
                      <strong>{o.id}</strong><p>{o.item} · {o.date}</p>
                    </div>
                    <div className="order-right">
                      <span className={`order-status ${o.status}`}>{o.status}</span>
                      <strong>₹{o.amount.toLocaleString()}</strong>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {section === 'profile' && (
              <div>
                <h2 className="dash-title">My Profile</h2>
                <div className="artisan-profile">
                  <div className="profile-row"><span>Name:</span><strong>{user?.name || 'Arjun Patel'}</strong></div>
                  <div className="profile-row"><span>Email:</span><strong>{user?.email || 'Not provided'}</strong></div>
                  <div className="profile-row"><span>Role:</span><strong>{user?.role || 'customer'}</strong></div>
                  <div className="profile-row"><span>Location:</span><strong>Mumbai, Maharashtra</strong></div>
                  <div className="profile-row"><span>Member Since:</span><strong>January 2024</strong></div>
                  <div className="profile-row"><span>Orders:</span><strong>2 completed</strong></div>
                  <div className="profile-row"><span>Reviews Written:</span><strong>5</strong></div>
                </div>
              </div>
            )}

            {section === 'wishlist' && (
              <div>
                <h2 className="dash-title">Saved for Later</h2>
                {wishlist.length === 0 ? (
                  <div style={{ textAlign: 'center', padding: '3rem', color: 'var(--smoke)' }}>
                    <span style={{ fontSize: '3rem', display: 'block', marginBottom: '1rem' }}>❤️</span>
                    <p>Your wishlist is empty. Save items you love while shopping.</p>
                  </div>
                ) : (
                  <div className="product-list">
                    {wishlist.map(item => (
                      <div key={item.id} className="product-list-item">
                        <span className="p-emoji">{item.emoji}</span>
                        <div className="p-info">
                          <strong>{item.name}</strong>
                          <p>by {item.artisan} · ₹{item.price.toLocaleString()}</p>
                        </div>
                        <div className="p-actions">
                          <button className="p-btn edit" onClick={() => moveToCart(item)}>Move to Cart</button>
                          <button className="p-btn delete" onClick={() => removeFromWishlist(item.id)}>Remove</button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  )
}
