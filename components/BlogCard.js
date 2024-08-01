// components/BlogCard.js
import Link from 'next/link';

export default function BlogCard({ id, title, description, image, date, author = {}, comments = [] }) {
  const truncateText = (text, maxLength) => text.length > maxLength ? text.slice(0, maxLength) + '...' : text;

  return (
    <Link href={`/blog/${id}`} legacyBehavior>
      <a className="border p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-200 block bg-gray-800 text-white">
        <img
          src={image || '/images/default-image.jpg'} 
          alt={title}
          className="w-full h-40 object-cover mb-4 rounded"
        />
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="text-gray-400 mb-2">{date}</p>
        <p className="text-gray-300 mb-2">{truncateText(description, 250)}</p>
        <div className="flex items-center mb-2">
          {author.avatar ? (
            <img
              src={author.avatar}
              alt={author.name || 'Author'}
              className="w-8 h-8 rounded-full mr-2"
            />
          ) : (
            <div className="w-8 h-8 rounded-full mr-2 bg-gray-600 flex items-center justify-center text-white">
              <span>NA</span>
            </div>
          )}
          <span className="font-semibold">{author.name || 'Unknown Author'}</span>
        </div>
        <span>{comments.length} Comments</span>
      </a>
    </Link>
  );
}
