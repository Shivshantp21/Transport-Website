"use client";
import React from 'react'
import BackgroundImage from '../addons/homeBackground'
import { Header } from '../components/header/page';
import { IconBtns } from '../addons/iconBtns';

export const Home = () => {
  return (
    <div>
      <section className='homepage '>
        <BackgroundImage/>
        <Header/>
        <div className='absolute inset-0 top-16 flex flex-col gap-5 justify-center items-center text-center text-white w-full'>
            <h1 className=' text-[49px] font-bold font-sans h1-slide-up'> Streamline Your Transport Management with Ease </h1>
            <h2 className='text-[36px]  font-sans h2-slide-up'> Efficient booking, seamless management, and real-time updates. </h2>
            <ul className='flex gap-5 justify-center text-2xl font-sans'>
                <li className='hover:text-red-700'>Trucks</li>
                <li className='hover:text-red-700'>Lorry</li>
                <li className='hover:text-red-700'>Carriers</li>
                <li className='hover:text-red-700'>Tempos</li>
            </ul>
            <div className='flex justify-center gap-5 mt-10'>
                <IconBtns text1={'Book Now'} text2={'Learn More'}/>
            </div>
        </div>
      </section>
      <section className='bg-white h-[100vh]'>
        <div>Hello</div>
      </section>
    </div>
  )
}
