// pages/index.js (or wherever you display the blog list)
import BlogCard from '../components/BlogCard';
import { blogs } from '../lib/blogs';

export default function HomePage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Blog Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {blogs.map(blog => (
          <BlogCard
            key={blog.id}
            id={blog.id}
            title={blog.title}
            description={blog.description}
            image={blog.image}
            date={blog.date}
            author={blog.author}
            comments={blog.comments}
          />
        ))}
      </div>
    </div>
  );
}
