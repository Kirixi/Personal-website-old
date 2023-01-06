import React from 'react';
import pacman from '../images/pacman.png';
import LAN from '../images/Agile-loop-now.png';
import bookeroo from '../images/Bookeroo.png';
import personal from '../images/personal.png';

const Projects = () => {
  return (
    <div
      name='projects'
      className='w-full md:h-screen bg-[#04038f] text-gray-200'
    >
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
          <p className='text-4xl font-bold inline border-b-4 border-red-600 '>
            Projects
          </p>
          <h2 className='py-4 text-2xl'>
            Check out some of my work from the past:{' '}
          </h2>
          <br />
        </div>
        {/** list of projects goes here */}

        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
          <div
            style={{ backgroundImage: `url(${pacman})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            <div className='opacity-0 group-hover:opacity-100 '>
              <span className='text-xl font-bold text-white tracking-wider'>
                {' '}
                Pacman AI Tournament
              </span>
              <div className='pt-8 text-center'>
                <a
                  href='https://github.com/Kirixi/Pacman-CTF-AI'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>

                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                  Deatils
                </button>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${LAN})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            <div className='opacity-0 group-hover:opacity-100 '>
              <span className='text-2xl font-bold text-white tracking-wider'>
                {' '}
                Agile-Loop-Now
              </span>
              <div className='pt-8 text-center'>
                <a
                  href='https://github.com/rmit-fwp-s2-2022/Agile-Loop-Now'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>

                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                  Deatils
                </button>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${bookeroo})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            <div className='opacity-0 group-hover:opacity-100 '>
              <span className='text-2xl font-bold text-white tracking-wider text-center'>
                {' '}
                Bookeroo (JS)
              </span>
              <div className='pt-8 text-center'>
                <a
                  href='https://github.com/s3813866/Thu1930-Dipto-Group8'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>

                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                  Deatils
                </button>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${personal})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            <div className='opacity-0 group-hover:opacity-100 '>
              <h3 className='text-2xl font-bold text-white tracking-wider text-center'>
                Portfolio
              </h3>
              <div className='pt-8 text-center'>
                <a
                  href='https://github.com/Kirixi/Personal-website'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>

                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                  Deatils
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
