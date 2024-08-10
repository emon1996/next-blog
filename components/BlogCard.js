import Link from 'next/link';

export default function BlogCard({ id, title, description, image, date, author = {}, comments = [] }) {
  const truncateText = (text, maxLength) => text.length > maxLength ? text.slice(0, maxLength) + '...' : text;

  return (
    <Link href={`/blog/${id}`} legacyBehavior>
      <a className="blog-card rounded-lg overflow-hidden transition-shadow duration-200 block bg-gray-800 text-white">
       
        <div className='card-img relative'>
          <img
            src={image || '/images/default-image.jpg'} 
            alt={title}
            className="w-full h-40 object-cover mb-4"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
        </div>

        <div className='card-content relative p-3 z-10 flex flex-col justify-between'>
          <div>
            <h2 className="text-xl font-bold mb-2">{title}</h2>
            <p className="text-gray-400 mb-2">August 5, 2024</p>
            <p className="text-gray-300 mb-2">{truncateText(description, 250)}</p>
          </div>

          <div className='flex blog-meta justify-between items-center mt-4'>
            <div className="flex items-center">
              {author.avatar ? (
                <img
                  src={author.avatar}
                  alt={author.name || 'Author'}
                  className="w-8 h-8 rounded-full mr-2"
                />
              ) : (
                <div className="w-6 h-6 rounded-full mr-2 text-sm bg-gray-400 flex items-center justify-center text-white">
                  <span>
                    <img src="/images/author.jpg"/>
                  </span>
                </div>
              )}
              <span className="font-normal text-sm">smitham.jany</span>
            </div>
            <span className='flex items-center'>
              4 
              <svg className="w-6 h-6 text-white ml-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7.556 8.5h8m-8 3.5H12m7.111-7H4.89a.896.896 0 0 0-.629.256.868.868 0 0 0-.26.619v9.25c0 .232.094.455.26.619A.896.896 0 0 0 4.89 16H9l3 4 3-4h4.111a.896.896 0 0 0 .629-.256.868.868 0 0 0 .26-.619v-9.25a.868.868 0 0 0-.26-.619.896.896 0 0 0-.63-.256Z"/>
              </svg>
            </span>
          </div>
        </div>
      </a>
    </Link>
  );
}
