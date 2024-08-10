// app/page.js
import Header from '../components/Header';
import Footer from '../components/Footer';
import BlogCard from '../components/BlogCard';
import { blogs } from '../lib/blogs';

export default function Home() {
  return (
    <div>
      <Header />
      <main className="container mx-auto p-4">
        <h1 className="text-3xl font-bold underline mb-4 hidden">Welcome to My Blog</h1>
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} id={blog.id} title={blog.title} description={blog.description} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
