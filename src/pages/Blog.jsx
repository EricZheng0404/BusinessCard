import { useState } from 'react'
import { Link } from 'react-router-dom'
import posts from '../data/posts'

const CATEGORIES = [
  { value: 'tech', label: '🛠 Tech Learned' },
  { value: 'project', label: '🚀 New Project' },
  { value: 'general', label: '📝 General' },
]

function formatDate(dateStr) {
  const d = new Date(dateStr + 'T12:00:00')
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}

function getCategoryInfo(value) {
  return CATEGORIES.find(c => c.value === value) || CATEGORIES[2]
}

export default function Blog() {
  const [filter, setFilter] = useState('all')

  const filtered = filter === 'all' ? posts : posts.filter(p => p.category === filter)

  return (
    <div className='blog-page page-enter'>
      <div className='blog-header'>
        <div>
          <h1 className='blog-title'>Blog</h1>
          <p className='blog-subtitle'>Things I'm learning, building, and thinking about.</p>
        </div>
      </div>

      <div className='blog-filters'>
        <button
          className={`blog-filter-btn${filter === 'all' ? ' active' : ''}`}
          onClick={() => setFilter('all')}
        >
          All
        </button>
        {CATEGORIES.map(c => (
          <button
            key={c.value}
            className={`blog-filter-btn${filter === c.value ? ' active' : ''}`}
            onClick={() => setFilter(c.value)}
          >
            {c.label}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <div className='blog-empty'>
          <p>No posts in this category yet.</p>
        </div>
      ) : (
        <div className='blog-grid'>
          {filtered.map(post => (
            <Link key={post.id} to={`/blog/${post.id}`} className='blog-card-link'>
              <article className='blog-card'>
                <div className='blog-card-top'>
                  <span className='blog-tag'>{getCategoryInfo(post.category).label}</span>
                  <time className='blog-card-date'>{formatDate(post.date)}</time>
                </div>
                <h2 className='blog-card-title'>{post.title}</h2>
                <p className='blog-card-desc'>{post.description}</p>
                <span className='blog-read-more'>Read more →</span>
              </article>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
