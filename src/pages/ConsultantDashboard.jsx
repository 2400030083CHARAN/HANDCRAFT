import React, { useState } from 'react'
import './Dashboard.css'

export default function ConsultantDashboard({ user }) {
  const [section, setSection] = useState('overview')

  return (
    <div className="dashboard-page">
      <div className="dash-hero" style={{ background: 'linear-gradient(135deg, #4f6f8f 0%, #2b4561 100%)' }}>
        <h1>📚 Consultant Dashboard</h1>
        <p>Preserve authenticity and guide cultural storytelling</p>
      </div>

      <div className="container">
        <div className="dash-layout">
          <aside className="dash-sidebar">
            {[
              { key: 'overview', icon: '🧭', label: 'Overview' },
              { key: 'reviews', icon: '✅', label: 'Content Reviews' },
              { key: 'stories', icon: '📝', label: 'Story Drafts' },
              { key: 'requests', icon: '💬', label: 'Consult Requests' },
            ].map(s => (
              <button key={s.key} className={`dash-nav-btn ${section === s.key ? 'active' : ''}`} onClick={() => setSection(s.key)}>
                {s.icon} {s.label}
              </button>
            ))}
          </aside>

          <main className="dash-main">
            {section === 'overview' && (
              <div>
                <h2 className="dash-title">Welcome, {user?.name || 'Cultural Consultant'}</h2>
                <div className="stats-grid">
                  <div className="stat-card"><span className="stat-num">28</span><p>Entries Reviewed</p></div>
                  <div className="stat-card"><span className="stat-num">7</span><p>Pending Verifications</p></div>
                  <div className="stat-card"><span className="stat-num">14</span><p>Stories Published</p></div>
                  <div className="stat-card"><span className="stat-num">4.9 ★</span><p>Quality Score</p></div>
                </div>
                <div className="artisan-profile">
                  <h3>Consultant Profile</h3>
                  <div className="profile-row"><span>Name:</span><strong>{user?.name || 'Dr. Priya Nair'}</strong></div>
                  <div className="profile-row"><span>Email:</span><strong>{user?.email || 'Not provided'}</strong></div>
                  <div className="profile-row"><span>Specialization:</span><strong>Folk Art & Tribal Anthropology</strong></div>
                  <div className="profile-row"><span>Region Focus:</span><strong>Central & South India</strong></div>
                </div>
              </div>
            )}

            {section === 'reviews' && (
              <div>
                <h2 className="dash-title">Content Reviews</h2>
                {[
                  { title: 'Bastar Dhokra Bell description', status: 'Pending', priority: 'High' },
                  { title: 'Toda Embroidery origin note', status: 'In Review', priority: 'Medium' },
                  { title: 'Warli festival context article', status: 'Approved', priority: 'Low' },
                ].map((item, i) => (
                  <div key={i} className="order-item">
                    <div>
                      <strong>{item.title}</strong>
                      <p>Cultural accuracy and historical context check</p>
                    </div>
                    <div className="order-right">
                      <span className={`order-status ${item.status === 'Approved' ? 'delivered' : item.status === 'In Review' ? 'shipped' : 'processing'}`}>{item.status}</span>
                      <strong>{item.priority}</strong>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {section === 'stories' && (
              <div>
                <h2 className="dash-title">Story Drafts</h2>
                <div className="product-list">
                  {[
                    { title: 'The Symbolism of Gond Trees', date: 'Last edited: Today' },
                    { title: 'How Ikat Patterns Encode Memory', date: 'Last edited: Yesterday' },
                    { title: 'Ritual Geometry in Warli Murals', date: 'Last edited: 3 days ago' },
                  ].map((story, i) => (
                    <div key={i} className="product-list-item">
                      <span className="p-emoji">📜</span>
                      <div className="p-info">
                        <strong>{story.title}</strong>
                        <p>{story.date}</p>
                      </div>
                      <div className="p-actions">
                        <button className="p-btn edit">Edit</button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {section === 'requests' && (
              <div>
                <h2 className="dash-title">Consult Requests</h2>
                {[
                  { from: 'Admin Team', msg: 'Please review 5 new artisan bios for cultural sensitivity.', time: '3h ago' },
                  { from: 'Artisan: Kavitha Meher', msg: 'Need help writing authentic product heritage section.', time: '1 day ago' },
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
