import React, { useState } from 'react'
import './CulturalHub.css'

const STORIES = [
  {
    id: 1, title: 'The Lost-Wax Secret', tribe: 'Bastar / Dhokra', emoji: '🔔',
    author: 'Dr. Priya Nair', date: 'Feb 15, 2024', category: 'technique',
    excerpt: 'The Dhokra casting technique predates recorded history. Artisans from Bastar have kept this 4,000-year-old process alive through an unbroken chain of apprenticeship.',
    content: `The Dhokra process begins with a clay core, around which beeswax is hand-rolled into intricate patterns. This wax model is then covered again in clay and fired — the wax melts away (cire perdue, or "lost wax"), leaving a cavity that is filled with molten bronze. The result is unique and can never be exactly duplicated.

Dhokra artisans from Chhattisgarh, West Bengal, Jharkhand, Odisha, and Telangana each have distinct regional styles. The Bastar Dhokra is known for its tribal figures and animal motifs inspired by forest life.

Today, fewer than 200 Dhokra artisan families remain. Platforms like TribalCraft give them direct access to buyers worldwide, making their survival not just possible, but dignified.`
  },
  {
    id: 2, title: 'Warli: Geometry of Life', tribe: 'Warli / Maharashtra', emoji: '🎨',
    author: 'Dr. Rajesh Nayar', date: 'Feb 10, 2024', category: 'culture',
    excerpt: 'Using only circles, triangles and squares, Warli artists depict the entire human experience — from weddings to harvests, from myth to everyday village life.',
    content: `Warli painting originated with the Warli tribe in Maharashtra, one of the largest tribal communities in India. Unlike classical Indian art forms, Warli painting was never taught in institutions — it was passed from mother to daughter as a form of ritual communication.

The primary motif is the Chaukhudi (marriage dance), depicted as humans forming a human chain around a tree, symbolizing the energy of life. Rice paste on mud walls was the original medium; today, artists use cloth and paper to reach global audiences.

What is remarkable is that despite their simplicity, Warli paintings capture extraordinary complexity — social structures, agricultural cycles, spiritual beliefs, and ecological relationships are all encoded in these basic geometric shapes.`
  },
  {
    id: 3, title: 'The Toda Embroidery Code', tribe: 'Toda / Nilgiris', emoji: '🧵',
    author: 'Dr. Priya Nair', date: 'Feb 5, 2024', category: 'heritage',
    excerpt: 'Among the Toda people of the Nilgiris, only women embroider, and each pattern carries meaning that outsiders rarely decode. The craft is both art and sacred language.',
    content: `The Toda people of the Blue Mountains (Nilgiris) have a population of under 2,000 people. Their embroidery — called pukhoor — is worked exclusively by women on hand-loomed cotton fabric, using a single needle and red and black threads.

Each geometric pattern has a name and meaning — mountains, buffaloes (sacred to the Toda), rivers, and clan symbols. The shawl worn by a Toda woman communicates her social status, clan affiliation, and life stage.

With urbanization threatening the community's traditional way of life, Toda embroidery has become both a cultural anchor and an economic lifeline. The shawls listed on TribalCraft are among the most rare and precious items on the platform.`
  },
]

export default function CulturalHub() {
  const [selected, setSelected] = useState(null)
  const [filter, setFilter] = useState('all')

  const filtered = filter === 'all' ? STORIES : STORIES.filter(s => s.category === filter)

  if (selected) {
    return (
      <div className="cultural-hub">
        <div className="story-hero" style={{ paddingTop: '8rem' }}>
          <p className="story-eyebrow">{selected.tribe}</p>
          <h1>{selected.title}</h1>
          <p className="story-meta">By {selected.author} · {selected.date}</p>
        </div>
        <div className="story-body container">
          <button className="back-link" onClick={() => setSelected(null)}>← Back to Cultural Hub</button>
          <div className="story-lead">{selected.emoji} {selected.excerpt}</div>
          {selected.content.split('\n\n').map((para, i) => (
            <p key={i} className="story-para">{para}</p>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="cultural-hub">
      <div className="cultural-hero">
        <p className="story-eyebrow">Cultural Consultant Stories</p>
        <h1>Living Heritage</h1>
        <p>Deep dives into tribal traditions, verified by our Cultural Consultants</p>
      </div>

      <div className="container">
        <div className="hub-filters">
          {['all', 'technique', 'culture', 'heritage'].map(f => (
            <button key={f} className={`filter-tab ${filter === f ? 'active' : ''}`} onClick={() => setFilter(f)}>
              {f.charAt(0).toUpperCase() + f.slice(1)}
            </button>
          ))}
        </div>

        <div className="stories-grid">
          {filtered.map(story => (
            <div key={story.id} className="story-card" onClick={() => setSelected(story)}>
              <div className="story-emoji">{story.emoji}</div>
              <div className="story-cat">{story.category}</div>
              <h2>{story.title}</h2>
              <p className="story-tribe">{story.tribe}</p>
              <p className="story-excerpt">{story.excerpt}</p>
              <div className="story-footer">
                <span>{story.author}</span>
                <span>{story.date}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="consultant-cta">
          <h2>Are You a Cultural Expert?</h2>
          <p>Join as a Cultural Consultant and help ensure the authentic representation of tribal heritage on our platform.</p>
          <button className="btn-primary">Apply as Consultant</button>
        </div>
      </div>
    </div>
  )
}
