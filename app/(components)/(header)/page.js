'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import {IconBtns} from '../../addons/iconBtns'

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 0;
      setIsScrolled(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`flex fixed justify-between w-full z-50 px-4 transition-all duration-300 ease-in-out
      ${isScrolled ? 'bg-black/95 backdrop-blur-sm py-6  top-0' : 'bg-transparent py-6  top-0'}`}>
      <h1 className='text-4xl ml-10 mr-16 text-white'>FTC</h1>
      <div className='flex gap-10 text-xl text-white mt-2'>
        <Link href='/' className='hover:text-red-700'>Home</Link> 
        <Link href='/about' className='hover:text-red-700'>About</Link> 
        <Link href='/service' className='hover:text-red-700'>Services</Link> 
        <Link href='/contact' className='hover:text-red-700'>Contact Us</Link> 
      </div>
      <IconBtns text2='Sign Up' text1='Login' link1={'/login'} link2={'/signup'} />
    </div>
  )
}

export default Header