import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="container mx-auto flex justify-between items-center">
        {/* Search Bar */}
        <div className="flex items-center">
          <input 
            type="text" 
            placeholder="Search..." 
            className="p-2 rounded bg-gray-700 text-white focus:outline-none"
          />
        </div>
        
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" legacyBehavior>
            <a>
              <img src="/images/logo.png" alt="Logo" className="drop-shadow-xl h-9 mx-auto" />
            </a>
          </Link>
        </div>
        
        {/* Login and Signup */}
        <div className="flex items-center space-x-4">
          <Link href="/login" legacyBehavior>
            <a className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Login</a>
          </Link>
          <Link href="/signup" legacyBehavior>
            <a className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Signup</a>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
