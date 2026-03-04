/**
 * Blog posts — add a new object to the top of this array,
 * then run `npm run deploy` to publish it to GitHub Pages.
 *
 * Fields:
 *   id          – unique number (just increment)
 *   title       – post title
 *   category    – 'tech' | 'project' | 'general'
 *   description – short preview shown on the blog listing
 *   date        – 'YYYY-MM-DD'
 *   body        – full post content in Markdown
 */

const posts = [
  {
    id: 2,
    title: 'Building DistribCache',
    category: 'project',
    description:
      'Started working on a distributed caching system. Exploring consistent hashing and replication strategies to achieve fault tolerance and horizontal scalability.',
    date: '2026-02-20',
    body: `## Overview

DistribCache is a distributed in-memory caching system built in Go. The goal is to explore the internals of systems like Redis and Memcached while adding my own spin on replication and fault tolerance.

## Key Concepts

### Consistent Hashing

Instead of using a simple modulo hash to route keys to nodes, consistent hashing places both keys and nodes on a virtual ring. This minimises the number of keys that need to be remapped when a node is added or removed.

\`\`\`go
type Ring struct {
    nodes   []int
    nodeMap map[int]string
}

func (r *Ring) AddNode(node string) {
    hash := int(crc32.ChecksumIEEE([]byte(node)))
    r.nodes = append(r.nodes, hash)
    r.nodeMap[hash] = node
    sort.Ints(r.nodes)
}
\`\`\`

### Replication

Each key is written to **N** successor nodes on the ring. Reads return the first successful response, and a background reconciler corrects stale replicas.

## Current Status

- [x] Consistent hashing ring
- [x] GET / SET / DELETE over TCP
- [ ] Replication (in progress)
- [ ] Eviction policies (LRU / LFU)
`,
  },
  {
    id: 1,
    title: 'Getting started with React Router',
    category: 'tech',
    description:
      'Learned how to add client-side routing to a React app using react-router-dom v7. Key concepts: BrowserRouter, Routes, Route, Link, and the useLocation hook.',
    date: '2026-03-04',
    body: `## Why React Router?

My personal site is a single-page React app deployed on GitHub Pages. I wanted to add a **/blog** section without a full rebuild, so React Router was the natural fit.

## Setup

Install the package:

\`\`\`bash
npm install react-router-dom
\`\`\`

Wrap the app in \`BrowserRouter\` inside \`main.jsx\`, then use \`Routes\` and \`Route\` to declare pages:

\`\`\`jsx
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/blog" element={<Blog />} />
  <Route path="/blog/:id" element={<BlogPost />} />
</Routes>
\`\`\`

## Key Hooks

| Hook | Purpose |
|---|---|
| \`useLocation\` | Read the current pathname |
| \`useParams\` | Extract URL params (e.g. \`:id\`) |
| \`useNavigate\` | Programmatic navigation |

## Gotcha on GitHub Pages

GitHub Pages serves a static 404 for unknown paths. The fix is to add a \`404.html\` that redirects back to \`index.html\` with the path encoded in the query string, then decode it on load.
`,
  },
]

export default posts
