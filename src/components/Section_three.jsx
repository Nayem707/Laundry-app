const Section_three = () => {
  return (
    <section className='px-28 py-32 flex gap-32 items-center border'>
      <div className=' space-y-5 '>
        <h1 className=' uppercase font-extrabold text-5xl'>
          Full Services{' '}
          <strong className='font-extrabold text-yellow-400 '>Launderer</strong>{' '}
          Room Management
        </h1>
        <p className='mt-4 max-w-lg sm:text-xl/relaxed'>
          Looking for top quality equipment for your laundry room without the
          upfront costs? We can help.
        </p>
        <div className='mt-8 flex flex-wrap gap-4 text-center'>
          <a
            href='#'
            className='block w-full rounded bg-white px-12 py-3 text-sm font-medium text-blue-600 shadow-md hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto'
          >
            Learn More
          </a>
        </div>
      </div>

      <div className=''>
        <div className='relative w-96 h-96 ring-8 ring-yellow-300 border-8 border-gray-100 shadow-lg bg-blue-100 '>
          <img className='absolute top-16' src='src/assets/img-2.png' alt='' />
        </div>
      </div>
    </section>
  );
};

export default Section_three;
