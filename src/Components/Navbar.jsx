import React from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useState } from 'react';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleClick = () => setNav(!nav);

  return (
    <div className='fixed w-full h-[88px] flex justify-center items-center px-4 bg-[#04038f] text-gray-300'>
      <ul className='hidden md:flex'>
        <li>Home</li>
        <li>About</li>
        <li>Skills</li>
        <li>Projects</li>
      </ul>

      <div onClick={handleClick} className='md:hidden z-10'>
        <FaBars />
      </div>

      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-[#04038f] flex flex-col justify-center items-center'
        }
      >
        <li className='py-6 text-3xl'>Home</li>
        <li className='py-6 text-3xl'>About</li>
        <li className='py-6 text-3xl'>Skills</li>
        <li className='py-6 text-3xl'>Projects</li>
      </ul>
    </div>
  );
};

export default Navbar;
