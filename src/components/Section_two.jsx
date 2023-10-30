const Section_two = () => {
  return (
    <section className='px-28 py-32 flex gap-44 items-center'>
      <div className=''>
        <div className='relative w-96 h-96 ring-8 ring-blue-100 border-8 border-gray-100 rounded-full bg-blue-600'>
          <img className='absolute top-0 ' src='src/assets/img-1.png' alt='' />
        </div>
      </div>

      <div className=' space-y-5'>
        <h1 className=' uppercase font-extrabold text-5xl'>
          Full Services{' '}
          <strong className='font-extrabold text-blue-700'>Launderer</strong>{' '}
          Room Management
        </h1>
        <p className='mt-4 max-w-lg sm:text-xl/relaxed text-justify'>
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
    </section>
  );
};

export default Section_two;
