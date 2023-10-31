// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Autoplay } from 'swiper/modules';
import Play_btn from './Play_btn';

export default function Slider() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        // pagination={{
        //   clickable: true,
        // }}
        // navigation={true}
        modules={[Autoplay]}
        className='mySwiper'
      >
        {/* item 1 */}
        <SwiperSlide>
          <section className='relative bg-[url(https://res.cloudinary.com/nayem490/image/upload/v1698581405/hero-1_qleqa1.jpg)] bg-cover bg-center bg-no-repeat'>
            <div className='absolute inset-0 bg-white/60 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l'></div>

            <div className='md:flex items-center'>
              <div className='relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8'>
                <div className='max-w-xl ltr:sm:text-left rtl:sm:text-right'>
                  <h1 className=' uppercase font-extrabold text-4xl md:text-6xl'>
                    Your Personal{' '}
                    <strong className='font-extrabold text-blue-700'>
                      Launderer
                    </strong>
                  </h1>

                  <p className='mt-4 max-w-lg sm:text-xl/relaxed text-justify'>
                    Yarpacom USA is ready to pick up your laundry at your Home,
                    Office or Airport Laundry Stations and return them at your
                    desired time.
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

              <div className='px-16 py-16'>
                <Play_btn />
              </div>
            </div>
          </section>
        </SwiperSlide>

        {/* item 2 */}
        <SwiperSlide>
          <section className='relative bg-[url(https://res.cloudinary.com/nayem490/image/upload/v1674736526/samples/people/bicycle.jpg)] bg-cover bg-center bg-no-repeat'>
            <div className='absolute inset-0 bg-white/60 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l'></div>

            <div className='md:flex items-center'>
              <div className='relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8'>
                <div className='max-w-xl ltr:sm:text-left rtl:sm:text-right'>
                  <h1 className=' uppercase font-extrabold md text-4xl :md:text-6xl'>
                    Your Personal{' '}
                    <strong className='font-extrabold text-blue-700'>
                      Launderer
                    </strong>
                  </h1>

                  <p className='mt-4 max-w-lg sm:text-xl/relaxed text-justify'>
                    Yarpacom USA is ready to pick up your laundry at your Home,
                    Office or Airport Laundry Stations and return them at your
                    desired time.
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

              <div className='px-16 py-16 md:px-0 md:py-0'>
                <Play_btn />
              </div>
            </div>
          </section>
        </SwiperSlide>

        {/* item 3 */}

        <SwiperSlide>
          <section className='relative bg-[url(https://res.cloudinary.com/nayem490/image/upload/v1698647332/unrecognizable-man-ironing-shirt_wsz53q.jpg)] bg-cover bg-center bg-no-repeat'>
            <div className='absolute inset-0 bg-white/60 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l'></div>

            <div className='md:flex items-center'>
              <div className='relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8'>
                <div className='max-w-xl ltr:sm:text-left rtl:sm:text-right'>
                  <h1 className=' uppercase font-extrabold text-4xl md:text-6xl'>
                    Your Personal{' '}
                    <strong className='font-extrabold text-blue-700'>
                      Launderer
                    </strong>
                  </h1>

                  <p className='mt-4 max-w-lg sm:text-xl/relaxed text-justify'>
                    Yarpacom USA is ready to pick up your laundry at your Home,
                    Office or Airport Laundry Stations and return them at your
                    desired time.
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

              <div className='px-16 py-16'>
                <Play_btn />
              </div>
            </div>
          </section>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

//
//
