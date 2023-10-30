import ScrollAnimation from 'react-animate-on-scroll';

const Section_five = () => {
  return (
    <section className=' px-24 py-20'>
      <ScrollAnimation animateIn='fadeIn' animateOut='fadeOut'>
        <h1 className=' uppercase py-5 text-center text-5xl font-bold'>
          Why You Will Love{' '}
          <strong className=' text-blue-300'> yarpacom</strong>
        </h1>
      </ScrollAnimation>

      <div className='grid grid-cols-4 gap-10 text-center pt-16 '>
        {/* item-1 */}
        <div className='space-y-5'>
          <div className=' flex justify-center'>
            <img className='w-20 ' src='assets/img-3.png' alt='' />
          </div>
          <div className=' space-y-2'>
            <h1 className='text-2xl font-bold'>Trustworthy</h1>
            <p className=''>
              Our locations are safe and monitored around the clock for your
              peace of mind.
            </p>
          </div>
        </div>

        {/* item-1 */}
        <div className='space-y-5'>
          <div className=' flex justify-center'>
            <img className='w-20 ' src='assets/icon-1.png' alt='' />
          </div>
          <div className=' space-y-2'>
            <h1 className='text-2xl font-bold'>Convenient</h1>
            <p className=''>
              Our locations are safe and monitored around the clock for your
              peace of mind.
            </p>
          </div>
        </div>

        {/* item-1 */}
        <div className='space-y-5'>
          <div className=' flex justify-center'>
            <img className='w-20 ' src='assets/icon-3.png' alt='' />
          </div>
          <div className=' space-y-2'>
            <h1 className='text-2xl font-bold'>Quality</h1>
            <p className=''>
              Our locations are safe and monitored around the clock for your
              peace of mind.
            </p>
          </div>
        </div>

        {/* item-1 */}
        <div className='space-y-5'>
          <div className=' flex justify-center pt-4'>
            <img className='w-24 ' src='assets/icon-4.png' alt='' />
          </div>
          <div className=' space-y-2'>
            <h1 className='text-2xl font-bold'>Community</h1>
            <p className=''>
              Our locations are safe and monitored around the clock for your
              peace of mind.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section_five;
