import React from 'react';

const HroSection = () => {
  return (
    <section className='relative bg-[url(https://res.cloudinary.com/nayem490/image/upload/v1698581405/hero-1_qleqa1.jpg)] bg-cover bg-center bg-no-repeat'>
      <div className='absolute inset-0 bg-white/70 sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l'></div>

      <div className='flex justify-between'>
        <div className='relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8'>
          <div className='max-w-xl ltr:sm:text-left rtl:sm:text-right'>
            <h1 className='text-3xl font-extrabold sm:text-5xl'>
              Your Personal
              <strong className='block font-extrabold text-blue-700'>
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
          <span className='relative flex h-14 w-14 top-60'>
            <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75'></span>
            <span className='relative inline-flex rounded-full h-14 w-14 bg-blue-500'></span>
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
