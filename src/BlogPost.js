import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

function BlogPost() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`/blogs/${slug}.md`)
      .then(response => response.text())
      .then(text => {
        const lines = text.split('\n');
        let frontmatterEnd = -1;
        let frontmatterStart = -1;

        for (let i = 0; i < lines.length; i++) {
          if (lines[i].trim() === '---') {
            if (frontmatterStart === -1) {
              frontmatterStart = i;
            } else {
              frontmatterEnd = i;
              break;
            }
          }
        }

        let metadata = {
          title: '',
          author: '',
          date: '',
          excerpt: ''
        };

        if (frontmatterStart !== -1 && frontmatterEnd !== -1) {
          const frontmatter = lines.slice(frontmatterStart + 1, frontmatterEnd);
          frontmatter.forEach(line => {
            const [key, ...valueParts] = line.split(':');
            const value = valueParts.join(':').trim();
            if (key && value) {
              metadata[key.trim()] = value;
            }
          });
        }

        const content = lines.slice(frontmatterEnd + 1).join('\n');

        setPost({
          ...metadata,
          content
        });
        setLoading(false);
      })
      .catch(error => {
        console.error('Error loading blog post:', error);
        setLoading(false);
      });
  }, [slug]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (loading) {
    return <div className="blog-post-container">Loading...</div>;
  }

  if (!post) {
    return <div className="blog-post-container">Post not found</div>;
  }

  return (
    <article className="blog-post">
      <div className="blog-post-container">
        <header className="blog-post-header">
          <h1 className="blog-post-title">{post.title}</h1>
          <div className="blog-post-meta">
            <span className="blog-post-author">{post.author}</span>
            <span className="blog-post-date">{formatDate(post.date)}</span>
          </div>
        </header>
        <div className="blog-post-content">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>
      </div>
    </article>
  );
}

export default BlogPost;
