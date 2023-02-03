import React from 'react';

const Socials = () => {
  return (
    <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
      <div className='absolute top-0 left-0 w-full h-screen bg-[#04038f] flex flex-col justify-center items-center text-cyan-50'>
        <ul>
          <li className='py-6 text-3xl static'>
            <div className='w-full h-[80px] flex justify-between items-center ml-[-300px] hover:ml-[-10px] duration-300 bg-[#1d1bf9]'>
              <div>Instagram</div>
            </div>
          </li>
          <li className='py-6 text-3xl'>LinkedIn</li>
          <li className='py-6 text-3xl'>GitHub</li>
          <li className='py-6 text-3xl'>StackOverflow</li>
        </ul>
      </div>
    </div>
  );
};

export default Socials;
