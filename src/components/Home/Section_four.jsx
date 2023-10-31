const Section_four = () => {
  return (
    <section className=' px-24 bg-blue-600 py-32'>
      <div className='grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 text-center  gap-5 '>
        {/* item-1 */}
        <div className='text-center shadow-lg space-y-5 p-5 rounded-sm border-4 border-blue-200'>
          <div className=' flex justify-center'>
            <img className='w-20 ' src='assets/img-3.png' alt='' />
          </div>
          <div className=' space-y-2'>
            <h1 className='text-xl font-bold text-gray-300 '>
              Safely lit with 24/7 video monitoring
            </h1>
          </div>
        </div>

        {/* item-2 */}
        <div className='text-center shadow-lg space-y-5 p-5 rounded-sm border-4 border-blue-200'>
          <div className=' flex justify-center'>
            <img className='w-20 ' src='assets/icon-1.png' alt='' />
          </div>
          <div className=' space-y-2'>
            <h1 className='text-xl font-bold text-gray-300 '>
              Cleaner clothes with less detergent
            </h1>
          </div>
        </div>

        {/* item-3 */}
        <div className='text-center shadow-lg space-y-5 p-5 rounded-sm border-4 border-blue-200'>
          <div className=' flex justify-center'>
            <img className='w-20 ' src='assets/icon-3.png' alt='' />
          </div>
          <div className=' space-y-2'>
            <h1 className='text-xl font-bold text-gray-300'>
              Comfortable, convenient, & always clean
            </h1>
          </div>
        </div>

        {/* item-4 */}
        <div className='text-center shadow-lg space-y-5 p-5 rounded-sm border-4 border-blue-200'>
          <div className='flex justify-center'>
            <img className='w-20' src='assets/icon-3.png' alt='' />
          </div>
          <div className=' space-y-2'>
            <h1 className='text-xl font-bold text-gray-300 '>
              1-hour wash & dry plus express services
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section_four;
