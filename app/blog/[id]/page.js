// app/blog/[id]/page.js
'use client'

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { blogs } from '@/lib/blogs';
import { notFound } from 'next/navigation';

export default function BlogPost({ params }) {
  const { id } = params;

  const blog = blogs.find((blog) => blog.id === parseInt(id));

  if (!blog) {
    return notFound(); // Returns a 404 page if the blog is not found
  }

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Header />
      <main className="container mx-auto p-4">
        <article className="max-w-3xl mx-auto">
          {blog.image && (
            <img 
              src={blog.image} 
              alt={blog.title} 
              className="w-full h-80 object-cover mb-4 rounded-lg" 
            />
          )}
          <h1 className="text-3xl font-bold mb-2">{blog.title}</h1>
          <p className="text-gray-400 mb-4">{blog.date}</p>
          <p className="text-gray-300 mb-4">{blog.description}</p>
          <div className="flex items-center mb-4">
            {blog.author.avatar && (
              <img 
                src={blog.author.avatar} 
                alt={blog.author.name} 
                className="w-10 h-10 rounded-full mr-3" 
              />
            )}
            <p className="font-semibold">{blog.author.name}</p>
          </div>
          <section>
            <h2 className="text-xl font-semibold mb-2">Comments</h2>
            <div>
              {blog.comments.map((comment, index) => (
                <div key={index} className="border-t border-gray-700 pt-2 mt-2">
                  <p className="font-semibold">{comment.author}</p>
                  <p className="text-gray-400">{comment.text}</p>
                </div>
              ))}
            </div>
          </section>
        </article>
      </main>
      <Footer />
    </div>
  );
}
