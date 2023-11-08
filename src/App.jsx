import './App.css';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';

import { Loading } from './components/common/Loading';
import Login from './views/auth/Login';
import Admin_views from './page/Admin_views';

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(true);
    }, 4000);
  }, []);

  return (
    <>
      <Admin_views />
      {/* {user ? (
        <>
          <Navbar />
          <Outlet />
          <Footer />
        </>
      ) : (
        <Login setUser={setUser} />
      )}

      {isLoading ? (
        <>
          <Navbar />
          <Home />
          <Footer />
        </>
      ) : (
        <div className='py-28'>
          <Loading />
        </div>
      )} */}
    </>
  );
}

export default App;
