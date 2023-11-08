const Login = () => {
  return (
    <section>
      <div className='md:flex inline-block'>
        <div className='sm:w-[60%] md:h-screen bg-indigo-500'>
          <img
            className=' p-5 md:mx-auto md:w-[500px] sm:pt-64'
            src='/assets/logo.png'
            alt=''
          />
        </div>

        <div className=' p-5 md:px-10 sm:px-10 sm:pt-32 sm:w-[40%]'>
          <header>
            <h1 className='text-4xl text-center font-bold mb-10'>Login</h1>
          </header>

          <main>
            <form action='' className='space-y-10'>
              <div className='space-y-2'>
                <label
                  className='block text-gray-700 text-md font-semibold'
                  htmlFor='username'
                >
                  Username
                </label>
                <input
                  className='px-3 text-md h-10 shadow rounded-lg md:w-96 hover:border-none'
                  id='username'
                  type='text'
                  placeholder='Username'
                />
              </div>

              <div className='space-y-2'>
                <label
                  className='block text-gray-700 text-md font-semibold'
                  htmlFor='username'
                >
                  Password
                </label>
                <input
                  className='px-3 text-md h-10 shadow rounded-lg md:w-96 hover:border-none'
                  id='username'
                  type='password'
                  placeholder='*****'
                />
              </div>

              <div className='flex gap-10 items-center'>
                <button className='px-5 py-2 border bg-blue-600 text-white font-medium rounded-md hover:bg-transparent hover:border hover:text-slate-800'>
                  Submit
                </button>
              </div>
            </form>
          </main>
        </div>
      </div>
    </section>
  );
};

export default Login;
