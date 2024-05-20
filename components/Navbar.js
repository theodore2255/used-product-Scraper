import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isClick,setisClick]=useState(false);
  const [navbar,toggleNavbar] = useState(false);
    return (
<>
<nav className='bg-black'>
  <div className='max-w-8xl mx-auto px-4 sm:px-6s lg:px-16'>
    <div className='flex items-center justify-between h-16'>
      <div className='flex items-center'>
        <div className='flex-shrink-0'>
          <Link href="/" className='text-white'>
            Logo
            </Link>
        </div>
      </div>
      <div className='hidden md:block'>
          <div className='ml-4 flex items-center space-x-10'>
          <Link href="/" className='text-white hover:bg-white hover:text-black rounded-lg '>
          Home   
          </Link>
          <Link href="/about" className='text-white hover:bg-white hover:text-black rounded-lg '>
          About
          </Link>
          <Link href="/" className='text-white hover:bg-white hover:text-black rounded-lg '>
          Services
          </Link>
          <Link href="/contact" className='text-white hover:bg-white hover:text-black rounded-lg '>
          Contact
          </Link>
          </div>
      </div>
      <div className='md:hidden flex items-center'>
        <button
          className='inline-flex items-center justify-center p-2 rounded-md text-white md:text-white 
          hover:text-white focus:outline-none focus:ring-2 focus:ring-inset'
          onClick={toggleNavbar}
          >
        </button>
      </div>
    </div>
  </div>
</nav>
</>
  );
};

export default Navbar;
