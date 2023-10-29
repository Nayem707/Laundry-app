import React from 'react';

const HroSection = () => {
  return (
    <section className='relative bg-[url(https://res.cloudinary.com/nayem490/image/upload/v1698581405/hero-1_qleqa1.jpg)] bg-cover bg-center bg-no-repeat'>
      <div className='absolute inset-0 bg-white/60 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l'></div>

      <div className='flex justify-between'>
        <div className='relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8'>
          <div className='max-w-xl ltr:sm:text-left rtl:sm:text-right'>
            <h1 className='font-extrabold text-6xl'>
              Your Personal{' '}
              <strong className='font-extrabold text-blue-700'>
                Launderer
              </strong>
            </h1>

            <p className='mt-4 max-w-lg sm:text-xl/relaxed text-justify'>
              Yarpacom USA is ready to pick up your laundry at your Home, Office
              or Airport Laundry Stations and return them at your desired time.
            </p>

            <div className='mt-8 flex flex-wrap gap-4 text-center'>
              <a
                href='#'
                className='block w-full rounded bg-blue-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto'
              >
                Get Started
              </a>

              <a
                href='#'
                className='block w-full rounded bg-white px-12 py-3 text-sm font-medium text-blue-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto'
              >
                Learn More
              </a>
            </div>
          </div>
        </div>

        <div className=' mx-auto max-w-screen-xl gap-5 flex'>
          <span className='relative flex h-24 w-24 top-60 '>
            <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75'></span>
            <span className='relative inline-flex rounded-full h-24 w-24 cursor-pointer bg-blue-500'>
              <span className=' absolute top-7 left-7 '>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={2}
                  stroke='white'
                  className='w-10 h-10'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z'
                  />
                </svg>
              </span>
            </span>
          </span>

          <span className='relative flex h-8 w-8 top-60'>
            <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75'></span>
            <span className='relative inline-flex rounded-full h-8 w-8 bg-blue-500'></span>
          </span>

          <span className='relative flex h-5 w-5 top-60'>
            <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-800 opacity-75'></span>
            <span className='relative inline-flex rounded-full h-5 w-5 bg-blue-800'></span>
          </span>

          <span className='relative flex h-2 w-2 top-60'>
            <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-gray-800 opacity-75'></span>
            <span className='relative inline-flex rounded-full h-2 w-2 bg-gray-800'></span>
          </span>
        </div>
      </div>
    </section>
  );
};

export default HroSection;
