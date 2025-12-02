'use client'

import { useState } from 'react'

type Category = 'All' | 'AI' | 'Automation' | 'Product' | 'Engineering'

interface BlogPost {
  id: number
  title: string
  excerpt: string
  category: Category
  date: string
  readTime: string
  image: string
  featured?: boolean
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'The Future of AI Automation in 2024',
    excerpt: 'Explore the cutting-edge trends and technologies shaping AI automation in the coming year.',
    category: 'AI',
    date: 'Nov 28, 2025',
    readTime: '5 min read',
    image: '/api/placeholder/800/400',
    featured: true,
  },
  {
    id: 2,
    title: 'How NexusAI Reduced Processing Time by 80%',
    excerpt: 'Learn how our optimization algorithms transformed data processing workflows.',
    category: 'Product',
    date: 'Nov 25, 2025',
    readTime: '7 min read',
    image: '/api/placeholder/400/300',
  },
  {
    id: 3,
    title: 'Building Scalable AI Workflows',
    excerpt: 'Best practices for designing AI systems that grow with your business needs.',
    category: 'Engineering',
    date: 'Nov 22, 2025',
    readTime: '6 min read',
    image: '/api/placeholder/400/300',
  },
  {
    id: 4,
    title: 'Introduction to Predictive Analytics',
    excerpt: 'Discover how predictive analytics can help you make data-driven decisions.',
    category: 'AI',
    date: 'Nov 20, 2025',
    readTime: '4 min read',
    image: '/api/placeholder/400/300',
  },
  {
    id: 5,
    title: 'Best Practices for AI Integration',
    excerpt: 'A comprehensive guide to seamlessly integrating AI into your existing systems.',
    category: 'Automation',
    date: 'Nov 18, 2025',
    readTime: '8 min read',
    image: '/api/placeholder/400/300',
  },
  {
    id: 6,
    title: 'Customer Success Story: TechCorp',
    excerpt: 'How TechCorp transformed their operations with NexusAI solutions.',
    category: 'Product',
    date: 'Nov 15, 2025',
    readTime: '5 min read',
    image: '/api/placeholder/400/300',
  },
]

const categories: Category[] = ['All', 'AI', 'Automation', 'Product', 'Engineering']

const categoryColors: Record<Category, string> = {
  All: 'bg-gray-600',
  AI: 'bg-purple-600',
  Automation: 'bg-blue-600',
  Product: 'bg-green-600',
  Engineering: 'bg-orange-600',
}

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<Category>('All')
  const [currentPage, setCurrentPage] = useState(1)
  const postsPerPage = 6

  const filteredPosts = blogPosts.filter(
    (post) => selectedCategory === 'All' || post.category === selectedCategory
  )

  const featuredPost = blogPosts.find((post) => post.featured)
  const regularPosts = filteredPosts.filter((post) => !post.featured)

  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = regularPosts.slice(indexOfFirstPost, indexOfLastPost)
  const totalPages = Math.ceil(regularPosts.length / postsPerPage)

  return (
    <main className="min-h-screen bg-nexus-dark">
      {/* Header */}
      <header className="border-b border-nexus-gray">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-nexus-purple to-nexus-blue rounded-lg flex items-center justify-center">
                <span className="text-2xl font-bold">N</span>
              </div>
              <span className="text-2xl font-bold">NexusAI</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-300 hover:text-white transition">Home</a>
              <a href="#" className="text-gray-300 hover:text-white transition">Blog</a>
              <a href="#" className="text-gray-300 hover:text-white transition">About</a>
              <a href="#" className="text-gray-300 hover:text-white transition">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-nexus-gray to-nexus-dark">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-nexus-purple to-nexus-blue bg-clip-text text-transparent">
            NexusAI Blog
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            AI Insights & Updates
          </p>
          <p className="text-gray-400 mt-4 max-w-3xl mx-auto">
            Stay informed with the latest trends in artificial intelligence, automation, and cutting-edge technology
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 border-b border-nexus-gray">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setSelectedCategory(category)
                  setCurrentPage(1)
                }}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-nexus-purple to-nexus-blue text-white shadow-lg'
                    : 'bg-nexus-gray text-gray-300 hover:bg-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {selectedCategory === 'All' && featuredPost && (
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="bg-nexus-gray rounded-2xl overflow-hidden shadow-2xl hover:shadow-nexus-purple/20 transition-all duration-300 transform hover:-translate-y-1">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-64 md:h-auto bg-gradient-to-br from-nexus-purple/20 to-nexus-blue/20 flex items-center justify-center">
                  <div className="text-6xl">🚀</div>
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`px-4 py-1 rounded-full text-sm font-medium text-white ${categoryColors[featuredPost.category]}`}>
                      {featuredPost.category}
                    </span>
                    <span className="px-4 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-sm font-medium">
                      Featured
                    </span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 hover:text-nexus-purple transition">
                    {featuredPost.title}
                  </h2>
                  <p className="text-gray-300 mb-6 text-lg">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center gap-6 text-sm text-gray-400 mb-6">
                    <span>{featuredPost.date}</span>
                    <span>•</span>
                    <span>{featuredPost.readTime}</span>
                  </div>
                  <button className="bg-gradient-to-r from-nexus-purple to-nexus-blue text-white px-8 py-3 rounded-lg font-medium hover:shadow-lg hover:shadow-nexus-purple/50 transition-all duration-200 w-fit">
                    Read Article
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentPosts.map((post) => (
              <article
                key={post.id}
                className="bg-nexus-gray rounded-xl overflow-hidden shadow-lg hover:shadow-nexus-purple/20 transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative h-48 bg-gradient-to-br from-nexus-purple/20 to-nexus-blue/20 flex items-center justify-center">
                  <div className="text-5xl">
                    {post.category === 'AI' && '🤖'}
                    {post.category === 'Automation' && '⚙️'}
                    {post.category === 'Product' && '📦'}
                    {post.category === 'Engineering' && '🔧'}
                  </div>
                </div>
                <div className="p-6">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium text-white ${categoryColors[post.category]}`}>
                    {post.category}
                  </span>
                  <h3 className="text-xl font-bold mt-4 mb-3 hover:text-nexus-purple transition cursor-pointer">
                    {post.title}
                  </h3>
                  <p className="text-gray-400 mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center gap-2 mt-12">
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="px-4 py-2 rounded-lg bg-nexus-gray text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-700 transition"
              >
                Previous
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`px-4 py-2 rounded-lg transition ${
                    currentPage === page
                      ? 'bg-gradient-to-r from-nexus-purple to-nexus-blue text-white'
                      : 'bg-nexus-gray text-white hover:bg-gray-700'
                  }`}
                >
                  {page}
                </button>
              ))}
              <button
                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="px-4 py-2 rounded-lg bg-nexus-gray text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-700 transition"
              >
                Next
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gradient-to-br from-nexus-purple/10 to-nexus-blue/10">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-gray-400 mb-8">
              Get the latest AI insights and updates delivered straight to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-6 py-3 rounded-lg bg-nexus-gray text-white border border-gray-700 focus:border-nexus-purple focus:outline-none flex-1 max-w-md"
              />
              <button className="px-8 py-3 bg-gradient-to-r from-nexus-purple to-nexus-blue text-white rounded-lg font-medium hover:shadow-lg hover:shadow-nexus-purple/50 transition-all duration-200">
                Subscribe
              </button>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              No spam, unsubscribe at any time
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-nexus-gray">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-nexus-purple to-nexus-blue rounded-lg flex items-center justify-center">
                  <span className="text-lg font-bold">N</span>
                </div>
                <span className="text-xl font-bold">NexusAI</span>
              </div>
              <p className="text-gray-400 text-sm">
                Empowering businesses with cutting-edge AI solutions
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition">Features</a></li>
                <li><a href="#" className="hover:text-white transition">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition">Enterprise</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition">About</a></li>
                <li><a href="#" className="hover:text-white transition">Careers</a></li>
                <li><a href="#" className="hover:text-white transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition">Terms</a></li>
                <li><a href="#" className="hover:text-white transition">Security</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-nexus-gray mt-8 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2025 NexusAI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
