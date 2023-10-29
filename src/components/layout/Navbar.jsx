import React from 'react';

export const TopNav = () => {
  return (
    <div className=' flex justify-between items-center px-24 py-5'>
      <div className=' flex gap-4 text-md font-semibold text-slate-600'>
        <p>icon </p>
        <p>icon </p>
        <p>icon </p>
      </div>

      <div>
        {' '}
        <img className='w-44' src='src/assets/logo.png' alt='logo' />
        {/* <div className='box hidden md:block'>
          <div className='box-wrapper'>
            <div className=' bg-white rounded flex items-center w-full p-3 shadow-sm border border-gray-200'>
              <button className='outline-none focus:outline-none'>
                <svg
                  className=' w-5 text-gray-600 h-5 cursor-pointer'
                  fill='none'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'></path>
                </svg>
              </button>
              <input
                type='search'
                name=''
                id=''
                placeholder='search for products'
                className='w-full pl-4 text-sm outline-none focus:outline-none bg-transparent'
              />
            </div>
          </div>
        </div> */}
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
      <nav className='sticky top-0 z-10 backdrop-blur-2xl flex justify-between items-center px-24 shadow-sm border py-5'>
        <div className=''>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={2.5}
            stroke='currentColor'
            className='w-8 h-8 text-blue-500'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
            />
          </svg>
        </div>
        <div className=' uppercase font-bold text-md text-blue-500'>
          <ul className='flex gap-6 items-center'>
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
                      className='uppercase font-bold text-md text-blue-500 '
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
        <div className=''>
          <button className=' border px-5 py-2 rounded-md uppercase font-bold text-md text-blue-500'>
            LOGIN
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
