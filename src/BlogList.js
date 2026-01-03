import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function BlogList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const blogPosts = [
      {
        title: 'Welcome to My Blog',
        author: 'Your Name',
        date: '2026-01-03',
        slug: 'welcome-to-my-blog',
        excerpt: 'This is the first post on my new blog. Learn about what I\'ll be writing about and what to expect.'
      },
      {
        title: 'Getting Started with React',
        author: 'Your Name',
        date: '2026-01-02',
        slug: 'getting-started-with-react',
        excerpt: 'A comprehensive guide to getting started with React development, covering the basics and best practices.'
      },
      {
        title: 'The Future of Web Development',
        author: 'Your Name',
        date: '2026-01-01',
        slug: 'the-future-of-web-development',
        excerpt: 'Exploring emerging trends and technologies that are shaping the future of web development.'
      }
    ];
    setPosts(blogPosts);
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="blog-list">
      <div className="blog-list-container">
        {posts.map((post) => (
          <article key={post.slug} className="blog-item">
            <Link to={`/blog/${post.slug}`} className="blog-item-link">
              <h2 className="blog-item-title">{post.title}</h2>
            </Link>
            <div className="blog-item-meta">
              <span className="blog-item-author">{post.author}</span>
              <span className="blog-item-date">{formatDate(post.date)}</span>
            </div>
            <p className="blog-item-excerpt">{post.excerpt}</p>
          </article>
        ))}
      </div>
    </div>
  );
}

export default BlogList;
