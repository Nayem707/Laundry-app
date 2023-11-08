import { useEffect } from 'react';
import { useState } from 'react';

const Admin_views = () => {
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    const currentTime = new Date();
    const hours = currentTime.getHours();

    if (hours >= 5 && hours < 12) {
      setGreeting('Good morning');
    } else if (hours >= 12 && hours < 18) {
      setGreeting('Good afternoon');
    } else {
      setGreeting('Good evening');
    }

    // Set a timeout to remove the content after 10 seconds
    const timeoutId = setTimeout(() => {
      setGreeting('');
    }, 10000);

    // Cleanup the timeout when the component unmounts
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <section className=''>
      <div className='flex'>
        <div className=' grid content-between bg-white w-[312px] h-screen'>
          <div className='px-10'>
            <img className='py-5' src='img/nehar.png' alt='' width={100} />
          </div>

          {/* MORE ITEM ADD HERE .............. */}
          <div className='grid justify-items-center py-5'>
            <p className=' text-xs text-gray-500'>Devloped by</p>

            <img src='img/d-logo.png' alt='' width={120} />
          </div>
        </div>

        <div className='w-[100%] bg-slate-100 px-20 py-5  '>
          {/* item-1 */}
          <div className=' flex justify-end'>
            <div className=' flex items-center gap-2 '>
              <div className='rounded-full flex items-center justify-center'>
                <img
                  src='img/rita.png'
                  alt='Your Image'
                  className='w-10 h-10 rounded-full'
                />
              </div>

              <p className=' cursor-pointer flex gap-2 items-center font-semibold text-lg'>
                Rita singhol
                <span>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth='2'
                    stroke='currentColor'
                    className='w-5 h-5'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M19.5 8.25l-7.5 7.5-7.5-7.5'
                    />
                  </svg>
                </span>
              </p>
            </div>
          </div>

          {/* item-2 */}
          {greeting && (
            <div className=' py-10'>
              <div className='shadow space-y-1  p-5 h-28 bg-white rounded-lg border border-neutral-500 border-opacity-20'>
                <h1 className=' font-semibold text-2xl'>
                  {greeting}, <span className=' font-bold'> Rita!</span>
                </h1>

                <p className=' text-lg text-slate-500 font-light'>
                  Let’s add some new restaurants today.
                </p>
              </div>
            </div>
          )}

          {/* item-3 */}
          <div>
            <h1 className=' text-3xl font-bold py-5'>Things to do</h1>
            <div className=' flex gap-[55px] '>
              <div className='grid content-between shadow bg-white w-[50%] p-5 border rounded-md space-y-4'>
                <div className=' max-h-min space-y-2'>
                  <h1 className=' text-2xl font-bold'>Manage Restaurants</h1>
                  <p className='text-lg text-gray-500'>
                    Add, edit, remove restaurants from NEAR database.
                  </p>
                </div>

                <div className=''>
                  <button className=' bg-[#FF3131] text-slate-100 font-medium py-2 px-5 rounded-sm hover:bg-slate-500'>
                    Manage
                  </button>
                </div>
              </div>

              <div className='grid content-between shadow bg-white w-[50%] p-5 border rounded-md space-y-4'>
                <div className='space-y-2'>
                  <h1 className=' text-2xl font-bold'>Featured Restaurants</h1>
                  <p className=' text-lg text-gray-500'>
                    Add featured restaurants from just one click.
                  </p>
                </div>

                <div className=''>
                  <button className=' bg-[#FF3131] text-slate-100 font-medium py-2 px-5 rounded-sm hover:bg-slate-500'>
                    Manage Featured
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Admin_views;
