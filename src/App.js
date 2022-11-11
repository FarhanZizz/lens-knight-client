
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from './Components/MainLayout';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Services from './Pages/Services';
import ServiceDetails from './Pages/ServiceDetails';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout></MainLayout>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/signup',
          element: <Signup></Signup>
        },
        {
          path: '/services',
          loader: () => {
            return fetch('http://localhost:5000/services')
          },
          element: <Services></Services>,
        },
        {
          path: '/service/:id',
          loader: ({ params }) => {
            return fetch(`http://localhost:5000/service/${params.id}`)
          },
          element: <ServiceDetails></ServiceDetails>
        }
      ]
    }
  ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
