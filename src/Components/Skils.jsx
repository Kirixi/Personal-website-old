import React from 'react';
import NODE from '../images/node.png';
import CSHARP from '../images/C#.png';
import JS from '../images/javascript.png';
import JAVA from '../images/java.ico';
import PY from '../images/python.jpg';
import AWS from '../images/aws.png';
import CPP from '../images/Cplusplus.png';
import TW from '../images/tailwind.jpeg';
import RE from '../images/logo-react-icon.png';
import DOCKER from '../images/docker.jpeg';
import CCI from '../images/circleci.png';

const Skils = () => {
  return (
    <div name='skills' className='bg-[#04038f] text-gray-200 h-screen'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
          <p className='text-4xl font-bold inline border-b-4 border-red-600 '>
            Experience
          </p>
          <h2 className='py-4 text-2xl'>Technologies I have worked with: </h2>
        </div>
        <br />
        <br />
        <br />
        <div className='flex flex-wrap space-x-4 gap-y-3 justify-center'>
          <div class='w-24 h-24 transition duration-500 hover:scale-125'>
            <img
              class='rounded-full border border-gray-100 shadow-sm'
              src={JS}
              alt='Javascript icon'
            />
          </div>

          <div class='w-24 h-24 transition duration-500 hover:scale-125'>
            <img
              class='rounded-full border border-gray-100 shadow-sm '
              src={CSHARP}
              alt='C# icon'
            />
          </div>

          <div class='w-24 h-24 transition duration-500 hover:scale-125'>
            <img
              class='rounded-full border border-gray-100 shadow-sm bg-slate-200'
              src={JAVA}
              alt='Java icon'
            />
          </div>

          <div class='w-24 h-24 transition duration-500 hover:scale-125'>
            <img
              class='rounded-full border border-gray-100 bg-white shadow-sm'
              src={NODE}
              alt='Node icon'
            />
          </div>

          <div class='w-24 h-24 transition duration-500 hover:scale-125'>
            <img
              class='rounded-full border border-gray-100 shadow-sm'
              src={CPP}
              alt='C++ icon'
            />
          </div>

          <div class='w-24 h-24 transition duration-500 hover:scale-125'>
            <img
              class='rounded-full border border-gray-100 shadow-sm'
              src={PY}
              alt='Python icon'
            />
          </div>

          <div class='w-24 h-24 transition duration-500 hover:scale-125'>
            <img
              class='rounded-full border border-gray-100 shadow-sm'
              src={RE}
              alt='React icon'
            />
          </div>

          <div class='w-24 h-24 transition duration-500 hover:scale-125'>
            <img
              class='rounded-full border border-gray-100 shadow-sm'
              src={TW}
              alt='Tailwind icon'
            />
          </div>

          <div class='w-24 h-24 transition duration-500 hover:scale-125'>
            <img
              class='rounded-full border border-gray-100 shadow-sm'
              src={AWS}
              alt='AWS icon'
            />
          </div>

          <div class='w-24 h-24 transition duration-500 hover:scale-125'>
            <img
              class='rounded-full border border-gray-100 shadow-sm'
              src={DOCKER}
              alt='Docker icon'
            />
          </div>

          <div class='w-24 h-24 transition duration-500 hover:scale-125'>
            <img
              class='rounded-full border border-gray-100 shadow-sm'
              src={CCI}
              alt='CircleCI icon'
            />
          </div>
        </div>
      </div>
      {/* <div className='transform h-64 bg-blue-400 w-80 transition duration-500 hover:scale-125 hover:bg-blue-600 flex justify-center items-center'>
        <p className='text-lg'>Hover over me! </p>
      </div> */}
    </div>
  );
};

export default Skils;
