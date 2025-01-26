import Link from 'next/link';
import React from 'react';

export const IconBtns = ({ text1, text2, link1, link2 }) => {
  return (
    <div className='flex gap-5 mr-10'>
      <Link href={`${link1}`} >
        <button className='bg-red-800 text-white rounded-md px-5 py-2 min-w-[100px] flex items-center justify-center hover:bg-red-600 hover:text-gray-100 active:transform active:scale-95 transition-transform duration-150 ease-in-out'>
          {text1}
        </button>
      </Link>
      <Link href={`${link2}`} >
        <button className='bg-off-white text-black rounded-md px-5 py-2 min-w-[100px] flex items-center justify-center hover:bg-black hover:text-white active:transform active:scale-95 transition-transform duration-150 ease-in-out'>
          {text2}
        </button>
      </Link>
    </div>
  );
};
