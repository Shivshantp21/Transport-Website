"use client";
import React from 'react'
import BackgroundImage from '../addons/homeBackground'

import { IconBtns } from '../addons/iconBtns';
import Image from 'next/image';
import { IoIosArrowDropright } from "react-icons/io";
import {MdKeyboardArrowRight} from "react-icons/md";

export const Home = () => {
  return (
    <div>
      <section className='homepage '>
        <BackgroundImage/>
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
      <section className='bg-white h-[100vh] flex '>
        <div className='w-full relative'>
          <Image src='/images/polygon.png' alt='section1' objectFit='cover' width={803} height={380}/>
          
          <div className=' w-1/2 '>
            <div className='absolute inset-0 mt-5 flex justify-center items-center w-1/2'>
            <Image src='/images/darkPolygon.png' alt='section2' width={1000} height={380} objectFit='cover'/>
            </div>

            {/* <div className='absolute -left-24 inset-0 mt-5 flex justify-center items-center w-1/2'>
            <Image src='/images/lightPolygon.png' alt='section2' width={500} height={280} objectFit='cover'/>
            </div> */}

            <div className='absolute inset-0 -left-10 flex justify-center items-center w-1/2'>
              <Image src='/images/info-dm.jpg' alt='info-delivery' width={450} height={500} objectFit='contain' className='max-w-full'/>
            </div>
          </div>

          <div className=' absolute gap-7 inset-0 flex-col left-[50%] justify-center  flex '>
            <p className='text-blue-900 text-4xl font-bold font-sans '>WHY CHOOSE US??</p>
            <p className='text-5xl font-bold font-sans text-yellow-800 mb-4'>We Are Professional Logistics & cargo Agency</p>
            <ul className='text-lg transform -translate-x-5 text-black font-sans gap-3 flex flex-col list-with-icons'>
              <li className='flex' > <MdKeyboardArrowRight  className='mt-1 mr-2 size-6' />  We take pride in serving our customers safely. together with passion.</li>
              <li className='flex' > <MdKeyboardArrowRight  className='mt-1 mr-2 size-6' /> Go beyond logistics, make the world go round and revolutionize .</li>
              <li className='flex' > <MdKeyboardArrowRight  className='mt-1 mr-2 size-6' />  Logistics through innovation, dedication, and technology.</li>
              <li className='flex' > <MdKeyboardArrowRight  className='mt-1 mr-2 size-6' />   Imagination what we can easily see is only a small percentage.</li>
              <li className='flex' > <MdKeyboardArrowRight  className='mt-1 mr-2 size-6' />   Quality never goes out of style. safety, quality, professionalism.</li>
              <li className='flex' > <MdKeyboardArrowRight  className='mt-1 mr-2 size-6' />   The quality shows in every move we make where business lives.</li>
            </ul>
            <button className='flex justify-center items-center gap-4 bg-black text-white rounded-md w-[180px] h-12 transform translate-x-48 mt-3 hover:bg-slate-700  active:transform active:scale-95 transition-transform duration-150 ease-in-out' >Know More <IoIosArrowDropright className='size-5' /> </button>

          </div>
        </div>
      </section>
      <section className='h-[100vh]'>
        <div className='text-white'>
          Hello 
        </div>
      </section>
    </div>
  )
}
