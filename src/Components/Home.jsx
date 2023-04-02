import React, { useState } from 'react';
import Navbar from './Navbar';
import Skils from './Skils';
import Projects from './Projects';
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaStackOverflow,
} from 'react-icons/fa';

export const Home = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <div>
      <Navbar />
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
      <Skils />
      <Projects />
      <div class='fixed bottom-6 right-6'>
        <button
          onClick={handleClick}
          class=' relative z-30 lg:hidden peer h-14 w-14 rounded-full bg-cyan-500 hover:bg-cyan-600 focus:bg-cyan-600 active:bg-cyan-700 transition'
        >
          <span className='text-white '>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='16'
              height='16'
              fill='currentColor'
              class='w-6 m-auto'
              viewBox='0 0 16 16'
            >
              <path d='M2.5 3.5a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1h-11zm2-2a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1h-7zM0 13a1.5 1.5 0 0 0 1.5 1.5h13A1.5 1.5 0 0 0 16 13V6a1.5 1.5 0 0 0-1.5-1.5h-13A1.5 1.5 0 0 0 0 6v7zm1.5.5A.5.5 0 0 1 1 13V6a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-13z' />
            </svg>
          </span>
        </button>
      </div>
      <div
        className={
          nav
            ? 'lg:flex fixed flex-col top-[35%] left-0'
            : 'hidden lg:flex fixed flex-col top-[35%] left-0'
        }
      >
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#1d1bf9]'>
            <a
              className='flex justify-between items-center w-full text-gray-300 '
              href='https://www.linkedin.com/in/yeu-haw-teh-9a34ab222/'
            >
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a
              className='flex justify-between items-center w-full text-gray-300 '
              href='https://github.com/Kirixi'
            >
              GitHub <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[190px] h-[60px] flex justify-between items-center ml-[-130px] hover:ml-[-10px] duration-300 bg-[#E1306C]'>
            <a
              className='flex justify-between items-center w-full text-gray-300 '
              href='https://www.instagram.com/jonnoo.t/'
            >
              Instagram <FaInstagram size={30} />
            </a>
          </li>
          <li className='w-[240px] h-[60px] flex justify-between items-center ml-[-180px] hover:ml-[-10px] duration-300 bg-[#ef8236]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://stackoverflow.com/users/17212169/zemelon?tab=profile'
            >
              StackOverflow <FaStackOverflow size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
