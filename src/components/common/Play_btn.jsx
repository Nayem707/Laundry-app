const Play_btn = () => {
  return (
    <div className='md:mx-auto md:max-w-screen-xl gap-5 flex'>
      <span className='relative flex h-24 w-24 '>
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

      <span className='relative hidden  md:flex h-8 w-8 top-40'>
        <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75'></span>
        <span className='relative inline-flex rounded-full h-8 w-8 bg-yellow-100'></span>
      </span>

      <span className='relative hidden  md:flex h-5 w-5 top-20'>
        <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-300 opacity-75'></span>
        <span className='relative inline-flex rounded-full h-5 w-5 bg-red-100'></span>
      </span>

      <span className='relative hidden  md:flex h-10 w-10 top-70'>
        <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-gray-300 opacity-75'></span>
        <span className='relative inline-flex rounded-full h-10 w-10 bg-green-100'></span>
      </span>

      <span className='relative hidden  md:flex h-10 w-10 top-10 left-10'>
        <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-gray-300 opacity-75'></span>
        <span className='relative inline-flex rounded-full h-10 w-10 bg-sky-100'></span>
      </span>
    </div>
  );
};

export default Play_btn;
