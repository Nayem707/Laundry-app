import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

export const TopNav = () => {
  return (
    <div className='hidden md:flex justify-between items-center px-24 py-5'>
      <div className=' flex gap-4 text-md font-semibold text-slate-600'>
        <a href='#'>
          <FaFacebook size={20} />
        </a>
        <a href='#'>
          <FaInstagram size={20} />
        </a>
        <a href='#'>
          <FaTwitter size={20} />
        </a>
      </div>

      <div>
        <img className='w-44' src='assets/logo.png' alt='logo' />
      </div>

      <div>
        <button className=' bg-blue-600 relative py-2 px-5 text-gray-100 text-base font-bold uppercase rounded-[50px] overflow-hidden transition-all duration-400 ease-in-out shadow-md hover:scale-105'>
          Join our Team
        </button>
      </div>
    </div>
  );
};

const Navbar = () => {
  return (
    <>
      <TopNav />
      <nav className='sticky top-0 z-10 backdrop-blur-2xl flex justify-between md:items-center md:px-24 shadow-sm border py-5'>
        <div className='px-5 cursor-pointer'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={2.5}
            stroke='currentColor'
            className='w-8 h-8 text-gray-600'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
            />
          </svg>
        </div>

        <div className=' uppercase font-bold text-md text-gray-800'>
          <ul className=' hidden md:flex gap-6 items-center'>
            <li>
              <a href='#home'>Home</a>
            </li>

            <li>
              <a href='#home'>About Us</a>
            </li>
            <li>
              <div className='flex items-center justify-center'>
                <div className='group relative cursor-pointer'>
                  <div className='flex gap-2 items-center justify-between '>
                    <a
                      className='uppercase font-bold text-md text-gray-800 '
                      onClick=''
                    >
                      Our Products
                    </a>
                    <span>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth='1.5'
                        stroke='currentColor'
                        className='h-6 w-6'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M19.5 8.25l-7.5 7.5-7.5-7.5'
                        />
                      </svg>
                    </span>
                  </div>
                  <div
                    className='invisible absolute z-50 flex text-sm px-3 space-y-5 text-blue-500 flex-col bg-gray-100 py-5 shadow-xl group-hover:visible'
                    onClick=''
                  >
                    <a className='block border-b border-gray-100 py-1 font-semibold hover:text-black md:mx-2'>
                      Product One
                    </a>

                    <a className='block border-b border-gray-100 py-1 font-semibold hover:text-black md:mx-2'>
                      Product Two
                    </a>
                    <a className='block border-b border-gray-100 py-1 font-semibold hover:text-black md:mx-2'>
                      Product One
                    </a>
                    <a className='block border-b border-gray-100 py-1 font-semibold hover:text-black md:mx-2'>
                      Product Four
                    </a>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <a href='#home'>App Store</a>
            </li>
            <li>
              <a href='#home'>Contact</a>
            </li>
          </ul>
        </div>

        <div className='px-5 md:px-0'>
          <button className=' border px-5 py-2 rounded-md uppercase font-bold text-md text-blue-500'>
            LOGIN
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
