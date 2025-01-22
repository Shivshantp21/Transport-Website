import React from 'react'
import Link from 'next/link'
import {IconBtns}  from '../../addons/iconBtns'

export const Header = () => {
  return (
    <div className='flex absolute justify-between top-8 w-full'>
        <h1 className='text-4xl ml-10 mr-16 '>FTC</h1>
        <div className='flex gap-10 text-xl'>
            <Link href='/' className='hover:text-red-700'>Home</Link> 
            <Link href='/about' className='hover:text-red-700'>About</Link> 
            <Link href='/service' className='hover:text-red-700'>Services</Link> 
            <Link href='/contact' className='hover:text-red-700'>Contact Us</Link> 
        </div>
        <IconBtns text2='Sign Up' text1='Login'/>
    </div>

  )
}
