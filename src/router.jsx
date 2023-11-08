import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Home from './views/home/Home';
import About from './views/about/About';
import Login from './views/auth/Login';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/login',
        element: <Login />,
      },
    ],
  },
]);

export default router;
