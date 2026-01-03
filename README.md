# Markdown-Powered Blog

A clean, minimal blog inspired by thinkingmachines.ai's design. Simply add markdown files to publish new blog posts.

## Features

- **Markdown-Powered**: Write your blog posts in markdown format
- **Clean Design**: Minimal, readable layout inspired by thinkingmachines.ai
- **Responsive**: Mobile-friendly design that works on all devices
- **Easy to Use**: Just add markdown files and update the post list
- **Fast**: Built with React for optimal performance

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm start
```

The blog will open at [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
```

## Adding a New Blog Post

### Step 1: Create a Markdown File

Create a new markdown file in `public/blogs/` with your post content:

```markdown
---
title: Your Post Title
author: Your Name
date: 2026-01-03
slug: your-post-slug
excerpt: A brief description of your post that appears on the listing page.
---

# Your Post Title

Your content goes here. You can use all standard markdown features:

- Lists
- **Bold text**
- *Italic text*
- Code blocks
- Links
- Images
- And more!
```

### Step 2: Update the Blog List

Open `src/BlogList.js` and add your new post to the `blogPosts` array:

```javascript
const blogPosts = [
  {
    title: 'Your Post Title',
    author: 'Your Name',
    date: '2026-01-03',
    slug: 'your-post-slug',
    excerpt: 'A brief description of your post.'
  },
  // ... other posts
];
```

### Step 3: View Your Post

Your new post will appear on the homepage and be accessible at `/blog/your-post-slug`

## Markdown File Format

Each markdown file should have frontmatter at the top:

```markdown
---
title: Post Title
author: Author Name
date: YYYY-MM-DD
slug: url-friendly-slug
excerpt: Brief description
---

Your content here...
```

### Frontmatter Fields

- **title**: The title of your blog post
- **author**: Your name or the author's name
- **date**: Publication date in YYYY-MM-DD format
- **slug**: URL-friendly identifier (used in the URL)
- **excerpt**: Brief description shown on the blog listing page

## Customization

### Change Blog Title

Edit `src/Header.js` and update the logo text:

```javascript
<h1>YOUR BLOG NAME</h1>
```

Also update `public/index.html`:

```html
<title>Your Blog Name</title>
```

### Modify Colors

Edit the CSS variables in `src/App.css`:

```css
:root {
  --bg-color: #ffffff;
  --text-color: #1a1a1a;
  --text-secondary: #666666;
  --border-color: #e5e5e5;
  --link-color: #0066cc;
  --link-hover: #0052a3;
  --max-width: 800px;
}
```

### Change Layout Width

Adjust the `--max-width` variable in `src/App.css` to make the content wider or narrower.

## Project Structure

```
Blog/
├── public/
│   ├── blogs/              # Your markdown blog posts go here
│   │   ├── welcome-to-my-blog.md
│   │   ├── getting-started-with-react.md
│   │   └── the-future-of-web-development.md
│   └── index.html
├── src/
│   ├── App.js              # Main app component with routing
│   ├── App.css             # All styles
│   ├── Header.js           # Navigation header
│   ├── BlogList.js         # Blog listing page
│   └── BlogPost.js         # Individual blog post page
└── package.json
```

## Deployment

After building with `npm run build`, deploy the `build/` folder to any static hosting service:

- GitHub Pages
- Netlify
- Vercel
- AWS S3
- Firebase Hosting

## Tech Stack

- **React** - UI framework
- **React Router** - Navigation and routing
- **React Markdown** - Markdown rendering
- **CSS Variables** - Easy theming

## License

Feel free to use this template for your own blog!

## Sample Posts

The blog comes with three sample posts to demonstrate the markdown features:

1. **Welcome to My Blog** - Introduction post
2. **Getting Started with React** - Technical tutorial with code examples
3. **The Future of Web Development** - Opinion piece with lists and headings

You can delete these and add your own posts following the same format.
