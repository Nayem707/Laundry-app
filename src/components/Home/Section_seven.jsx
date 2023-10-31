import ScrollAnimation from 'react-animate-on-scroll';

const Section_seven = () => {
  return (
    <section className='md:px-28 md:py-16 py-16 space-y-16  bg-gray-200'>
      <div className='text-center'>
        <ScrollAnimation animateIn='fadeIn' animateOut='fadeOut'>
          <h1 className=' uppercase font-extrabold text-3xl md:text-5xl'>
            OUR Letest{' '}
            <strong className='font-extrabold text-blue-400 '>Blog</strong>{' '}
          </h1>
        </ScrollAnimation>
      </div>

      <div className='grid grid-cols-1 p-5 md:p-0 md:grid-cols-4 gap-10'>
        {/* item-1 */}
        <div className='rounded-xl  ring-8 ring-gray-300 shadow-md cursor-pointer group overflow-hidden relative text-gray-50 hover:duration-700 duration-700'>
          <div className=''>
            <img className='' src='assets/img-11.png' alt='logo' />
          </div>

          <div className='absolute text-center text-gray-900 bg-gray-100 bg-opacity-90 -bottom-36 w-100 p-2 px-3 flex flex-col gap-2 group-hover:-bottom-0 group-hover:duration-600 duration-500'>
            <span className='font-bold text-sm'>Published: 24 Sep, 2023</span>
            <span className='font-bold text-lg'></span>
            <p>
              Lorem ipsum dolor sit amet, consectetur elit the in adipiscing...
            </p>

            <button className='border rounded-md p-2 bg-slate-100 text-slate-800 hover:bg-blue-500 hover:text-slate-200'>
              + Read More
            </button>
          </div>
        </div>

        {/* item-2 */}
        <div className='rounded-xl  ring-8 ring-gray-300 shadow-md cursor-pointer group overflow-hidden relative text-gray-50 hover:duration-700 duration-700'>
          <div className=''>
            <img className='' src='assets/img-7.png' alt='logo' />
          </div>

          <div className='absolute text-center text-gray-900 bg-gray-100 bg-opacity-90 -bottom-36 w-100 p-2 px-3 flex flex-col gap-2 group-hover:-bottom-0 group-hover:duration-600 duration-500'>
            <span className='font-bold text-sm'>Published: 24 Sep, 2023</span>
            <span className='font-bold text-lg'></span>
            <p>
              Lorem ipsum dolor sit amet, consectetur elit the in adipiscing...
            </p>

            <button className='border rounded-md p-2 bg-slate-100 text-slate-800 hover:bg-blue-500 hover:text-slate-200'>
              + Read More
            </button>
          </div>
        </div>

        {/* item-3 */}
        <div className='rounded-xl ring-8 ring-gray-300 shadow-md cursor-pointer group overflow-hidden relative text-gray-50 hover:duration-700 duration-700'>
          <div className=''>
            <img className='' src='assets/img-9.jpg' alt='logo' />
          </div>

          <div className='absolute text-center text-gray-900 bg-gray-100 bg-opacity-90 -bottom-36 w-100 p-2 px-3 flex flex-col gap-2 group-hover:-bottom-0 group-hover:duration-600 duration-500'>
            <span className='font-bold text-sm'>Published: 24 Sep, 2023</span>
            <span className='font-bold text-lg'></span>
            <p>
              Lorem ipsum dolor sit amet, consectetur elit the in adipiscing...
            </p>

            <button className='border rounded-md p-2 bg-slate-100 text-slate-800 hover:bg-blue-500 hover:text-slate-200'>
              + Read More
            </button>
          </div>
        </div>

        {/* item-4 */}
        <div className='rounded-xl  ring-8 ring-gray-300 shadow-md cursor-pointer group overflow-hidden relative text-gray-50 hover:duration-700 duration-700'>
          <div className=''>
            <img className='' src='assets/img-10.jpg' alt='logo' />
          </div>

          <div className='absolute text-center text-gray-900 bg-gray-100 bg-opacity-90 -bottom-36 w-100 p-2 px-3 flex flex-col gap-2 group-hover:-bottom-0 group-hover:duration-600 duration-500'>
            <span className='font-bold text-sm'>Published: 24 Sep, 2023</span>
            <span className='font-bold text-lg'></span>
            <p>
              Lorem ipsum dolor sit amet, consectetur elit the in adipiscing...
            </p>

            <button className='border rounded-md p-2 bg-slate-100 text-slate-800 hover:bg-blue-500 hover:text-slate-200'>
              + Read More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section_seven;
