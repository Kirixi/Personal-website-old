import React from 'react';
import {
  FaBars,
  FaTimes,
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaStackOverflow,
} from 'react-icons/fa';
import { useState } from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleClick = () => setNav(!nav);

  return (
    <div className='fixed w-full h-[88px] flex justify-center items-center px-4 bg-[#04038f] text-gray-300'>
      <ul className='hidden md:flex'>
        <li>
          <Link to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        {/* <li>About</li> */}
        <li>
          <Link to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link to='projects' smooth={true} duration={500}>
            Projects
          </Link>
        </li>
      </ul>

      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
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
        <li className='py-6 text-3xl'>Socials</li>
      </ul>

      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
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

export default Navbar;
