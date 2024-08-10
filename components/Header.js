import Link from 'next/link';

const Header = () => {
  return (
    <header className="text-white p-4 shadow-xl">
      <nav className="container mx-auto flex justify-between items-center">
        {/* Search Bar */}
        {/* <div className="flex items-center">
          <input 
            type="text" 
            placeholder="Search..." 
            className="p-2 rounded text-white bg-dark-800 focus:outline-none"
          />
        </div> */}



        
<form class="flex items-center max-w-lg">   
  
    <div class="relative w-full">
        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            
        </div>
        <input type="text" class="bg-dark border-0 text-sm rounded-lg ps-10 p-2.5" placeholder="Search ..." required />
        
    </div>
    
</form>

        
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" legacyBehavior>
            <a className='main-logo-wrapper'>
              <img src="/images/logo.png" alt="Logo" className="logo drop-shadow-xl h-10 mx-auto" />
            </a>
          </Link>
        </div>
        
        {/* Login and Signup */}
        <div className="flex items-center space-x-4">
          <Link href="/login" legacyBehavior>

          <button type="button" class="text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 mb-2">
<svg class="w-5 h-5 me-2 -ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12H4m12 0-4 4m4-4-4-4m3-4h2a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3h-2"/>
</svg>
Login
</button>



          </Link>
          <Link href="/signup" legacyBehavior>
          

          <button type="button" class="text-white bg-gray-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 mb-2">

Sign up
</button>

          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
