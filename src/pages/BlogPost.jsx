import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
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

export default function BlogPost() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [exiting, setExiting] = useState(false)
  const post = posts.find(p => p.id === Number(id))

  function handleBack(e) {
    e.preventDefault()
    setExiting(true)
    setTimeout(() => navigate('/blog'), 280)
  }

  if (!post) {
    return (
      <div className='blog-post-page'>
        <div className='blog-post-not-found'>
          <h1>Post not found</h1>
          <button onClick={handleBack} className='blog-back-link'>← Back to Blog</button>
        </div>
      </div>
    )
  }

  return (
    <div className={`blog-post-page${exiting ? ' page-exit' : ' page-enter'}`}>
      <div className='blog-post-container'>
        <button onClick={handleBack} className='blog-back-link'>← Back to Blog</button>

        <header className='blog-post-header'>
          <div className='blog-post-meta'>
            <span className='blog-tag'>{getCategoryInfo(post.category).label}</span>
            <time className='blog-card-date'>{formatDate(post.date)}</time>
          </div>
          <h1 className='blog-post-title'>{post.title}</h1>
          <p className='blog-post-description'>{post.description}</p>
        </header>

        <hr className='blog-post-divider' />

        <div className='blog-post-body'>
          <ReactMarkdown>{post.body}</ReactMarkdown>
        </div>
      </div>
    </div>
  )
}
