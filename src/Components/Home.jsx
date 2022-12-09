import React from 'react';

export const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#04038f]'>
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <h1 className='text-4xl font-bold sm:text-7xl text-gray-300'>
          YeuHaw Teh / Jonathan
        </h1>
        <br />
        <h2 className='text-2xl sm:text-4xl font-bold text-[#8892b0]'>
          I'm a computer science major fresh graduate from
          <p className='text-gray-100'>
            {' '}
            <span className='text-red-600'>R</span>oyal{' '}
            <span className='text-red-600'>M</span>elbourne{' '}
            <span className='text-red-600'>I</span>nstitue of{' '}
            <span className='text-red-600'>T</span>echnology.
          </p>
        </h2>
      </div>
    </div>
  );
};
