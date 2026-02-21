import React, { useState } from 'react'
import { PRODUCTS, ARTISANS } from '../data.js'
import './Dashboard.css'

export default function AdminDashboard() {
  const [section, setSection] = useState('overview')
  const [artisans, setArtisans] = useState(ARTISANS)

  return (
    <div className="dashboard-page">
      <div className="dash-hero" style={{ background: 'linear-gradient(135deg, #3D2B1F 0%, #1a0e09 100%)' }}>
        <h1>🛡️ Admin Panel</h1>
        <p>Monitor and manage the TribalCraft platform</p>
      </div>

      <div className="container">
        <div className="dash-layout">
          <aside className="dash-sidebar">
            {[
              { key: 'overview', icon: '📊', label: 'Overview' },
              { key: 'artisans', icon: '🤲', label: 'Artisans' },
              { key: 'products', icon: '🏺', label: 'Products' },
              { key: 'transactions', icon: '💰', label: 'Transactions' },
              { key: 'issues', icon: '⚠️', label: 'Issues' },
            ].map(s => (
              <button key={s.key} className={`dash-nav-btn ${section === s.key ? 'active' : ''}`} onClick={() => setSection(s.key)}>
                {s.icon} {s.label}
              </button>
            ))}
          </aside>

          <main className="dash-main">
            {section === 'overview' && (
              <div>
                <h2 className="dash-title">Platform Overview</h2>
                <div className="stats-grid">
                  <div className="stat-card"><span className="stat-num">240</span><p>Artisans</p></div>
                  <div className="stat-card"><span className="stat-num">1,248</span><p>Products</p></div>
                  <div className="stat-card"><span className="stat-num">₹12.4L</span><p>Revenue</p></div>
                  <div className="stat-card"><span className="stat-num">3,842</span><p>Customers</p></div>
                </div>
                <h3 style={{ fontFamily: 'var(--font-display)', marginBottom: '1rem', color: 'var(--bark)' }}>Recent Activity</h3>
                {[
                  { event: 'New artisan registered', who: 'Pema Dorji (Nagaland)', time: '2h ago', type: 'green' },
                  { event: 'Order dispute opened', who: '#TC-1099 — Customer vs Artisan', time: '4h ago', type: 'red' },
                  { event: 'Product flagged for review', who: 'Cultural accuracy concern', time: '6h ago', type: 'yellow' },
                  { event: 'New cultural consultant joined', who: 'Dr. Rajesh Nayar', time: '1 day ago', type: 'green' },
                ].map((a, i) => (
                  <div key={i} className="order-item">
                    <div>
                      <strong style={{ color: a.type === 'red' ? '#c0392b' : a.type === 'yellow' ? '#856404' : 'var(--moss)' }}>{a.event}</strong>
                      <p>{a.who}</p>
                    </div>
                    <span style={{ fontSize: '0.8rem', color: 'var(--smoke)' }}>{a.time}</span>
                  </div>
                ))}
              </div>
            )}

            {section === 'artisans' && (
              <div>
                <h2 className="dash-title">Manage Artisans</h2>
                <table className="admin-table">
                  <thead>
                    <tr>
                      <th>Artisan</th><th>Tribe</th><th>Location</th><th>Products</th><th>Earnings</th><th>Status</th><th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {artisans.map(a => (
                      <tr key={a.id}>
                        <td>{a.emoji} {a.name}</td>
                        <td>{a.tribe}</td>
                        <td>{a.location}</td>
                        <td>{a.products}</td>
                        <td>₹{a.earnings.toLocaleString()}</td>
                        <td><span className={`order-status ${a.verified ? 'delivered' : 'processing'}`}>{a.verified ? 'Verified' : 'Pending'}</span></td>
                        <td>
                          <button className="p-btn edit" onClick={() => setArtisans(artisans.map(x => x.id === a.id ? { ...x, verified: true } : x))}>
                            {a.verified ? 'View' : 'Verify'}
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {section === 'products' && (
              <div>
                <h2 className="dash-title">All Products</h2>
                <table className="admin-table">
                  <thead>
                    <tr><th>Product</th><th>Artisan</th><th>Tribe</th><th>Price</th><th>Rating</th><th>Action</th></tr>
                  </thead>
                  <tbody>
                    {PRODUCTS.map(p => (
                      <tr key={p.id}>
                        <td>{p.emoji} {p.name}</td>
                        <td>{p.artisan}</td>
                        <td>{p.tribe}</td>
                        <td>₹{p.price.toLocaleString()}</td>
                        <td>★ {p.rating}</td>
                        <td><button className="p-btn edit">Review</button></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {section === 'transactions' && (
              <div>
                <h2 className="dash-title">Recent Transactions</h2>
                <table className="admin-table">
                  <thead>
                    <tr><th>Order ID</th><th>Customer</th><th>Product</th><th>Amount</th><th>Date</th><th>Status</th></tr>
                  </thead>
                  <tbody>
                    {[
                      { id: '#TC-1104', customer: 'Arjun P.', product: 'Warli Canvas', amount: 2400, date: '20 Feb', status: 'shipped' },
                      { id: '#TC-1103', customer: 'Sunita R.', product: 'Toda Shawl', amount: 4500, date: '19 Feb', status: 'delivered' },
                      { id: '#TC-1102', customer: 'David L.', product: 'Dhokra Bell', amount: 1850, date: '18 Feb', status: 'processing' },
                    ].map(t => (
                      <tr key={t.id}>
                        <td>{t.id}</td><td>{t.customer}</td><td>{t.product}</td>
                        <td>₹{t.amount.toLocaleString()}</td><td>{t.date}</td>
                        <td><span className={`order-status ${t.status}`}>{t.status}</span></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {section === 'issues' && (
              <div>
                <h2 className="dash-title">Reported Issues</h2>
                {[
                  { title: 'Order dispute', desc: 'Customer claims product different from listing', status: 'Open', priority: 'High' },
                  { title: 'Cultural accuracy concern', desc: 'Product description may misrepresent tribal heritage', status: 'Review', priority: 'Medium' },
                  { title: 'Payment delay', desc: 'Artisan payment not received for 10 days', status: 'Resolved', priority: 'Low' },
                ].map((issue, i) => (
                  <div key={i} className="order-item" style={{ flexDirection: 'column', alignItems: 'flex-start', gap: '0.5rem' }}>
                    <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between', alignItems: 'center' }}>
                      <strong style={{ color: 'var(--bark)' }}>{issue.title}</strong>
                      <div style={{ display: 'flex', gap: '0.5rem' }}>
                        <span className={`order-status ${issue.status === 'Resolved' ? 'delivered' : issue.status === 'Review' ? 'shipped' : 'processing'}`}>{issue.status}</span>
                        <span style={{ fontSize: '0.75rem', color: issue.priority === 'High' ? '#c0392b' : 'var(--smoke)' }}>{issue.priority}</span>
                      </div>
                    </div>
                    <p style={{ fontSize: '0.85rem', color: 'var(--smoke)' }}>{issue.desc}</p>
                    <button className="p-btn edit">Resolve</button>
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
