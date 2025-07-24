import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className='h-16 bg-purple-700 flex justify-between px-4 md:px-8 items-center text-white sticky top-0 z-50 shadow-lg'>
      <div className="logo font-bold text-2xl md:text-3xl hover:text-purple-200 transition-colors duration-300">
        <Link href="/" className='flex items-center'>
          <span className='hidden sm:inline'>Quick</span>Links
          <span className='ml-2 text-purple-300 text-sm hidden md:inline'>URL Shortener</span>
        </Link>
      </div>
      
      <ul className='flex gap-4 md:gap-6 items-center'>
        <li className='hover:scale-105 transition-transform duration-200'>
          <Link href="/" className='px-2 py-1 rounded hover:bg-purple-600 transition-colors duration-300'>
            Home
          </Link>
        </li>
        <li className='hover:scale-105 transition-transform duration-200'>
          <Link href="/about" className='px-2 py-1 rounded hover:bg-purple-600 transition-colors duration-300'>
            About
          </Link>
        </li>
        <li className='hover:scale-105 transition-transform duration-200'>
          <Link 
            href="/shorten" 
            className='bg-purple-500 hover:bg-purple-400 px-3 py-1 rounded-md transition-colors duration-300 font-medium'
          >
            Shorten URL
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar