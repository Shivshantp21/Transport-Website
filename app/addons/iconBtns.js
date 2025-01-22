import React from 'react';

export const IconBtns = ({ text1, text2 }) => {
  return (
    <div className='flex gap-5 mr-10'>
      <button className='bg-red-800 text-white rounded-md px-5 py-2 min-w-[100px] flex items-center justify-center hover:bg-red-600 hover:text-gray-100'>
        {text1}
      </button>
      <button className='bg-off-white text-black  rounded-md px-5 py-2 min-w-[100px] flex items-center justify-center hover:bg-black hover:text-white'>
        {text2}
      </button>

    </div>
  );
};
