import './App.css';
import Navbar from './components/layout/Navbar';
import Home from './views/home/Home';
import Footer from './components/layout/Footer';
import { useEffect, useState } from 'react';
import { Loading } from './components/common/Loading';

function App() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(true);
    }, 4000);
  }, []);

  return (
    <>
      {isLoading ? (
        <>
          <Navbar />
          <Home />
          <Footer />
        </>
      ) : (
        <div className='md:py-80 py-20'>
          <Loading />
        </div>
      )}
    </>
  );
}

export default App;
