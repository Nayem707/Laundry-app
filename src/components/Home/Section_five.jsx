import ScrollAnimation from 'react-animate-on-scroll';

const Section_five = () => {
  return (
    <section className='px-5 py-10 md:px-24 md:py-20'>
      <ScrollAnimation animateIn='fadeIn' animateOut='fadeOut'>
        <h1 className='uppercase font-extrabold text-3xl text-center md:text-center md:text-5xl'>
          Why You Will Love{' '}
          <strong className=' text-blue-300'> yarpacom</strong>
        </h1>
      </ScrollAnimation>

      <div className='grid md:grid-cols-4 gap-10 text-center pt-16 '>
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

        {/* item-2 */}
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

        {/* item-3 */}
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

        {/* item-4 */}
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
