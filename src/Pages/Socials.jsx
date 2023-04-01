import React from 'react';

const Socials = () => {
  return (
    <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
      <div className='absolute top-0 left-0 w-full h-screen bg-[#04038f] flex flex-col justify-center items-center text-cyan-50'>
        <ul>
          <li className=' py-6 text-3xl static'>
            <div className='flex justify-between items-center'>
              Instagram
              <div class='h-[90px] ml-[-800px] hover:ml-[-90px] duration-300 bg-[#E1306C]'></div>
            </div>
          </li>
          <li className='py-6 text-3xl'>
            <div className=' h-[90px] flex justify-between items-center ml-[-800px] hover:ml-[-90px] duration-300 bg-[#E1306C]'>
              LinkedIn
            </div>
          </li>
          <li className='py-6 text-3xl'>GitHub</li>
          <li className='py-6 text-3xl'>StackOverflow</li>
        </ul>
        <div className=''></div>
      </div>
    </div>
  );
};

export default Socials;
