import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/Home/Home';
import AddProduct from './Pages/AddProduct/AddProduct';
import MyCart from './Pages/MyCart/MyCart';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import MainLayout from './Layout/MainLayout';
import ShowCars from './Components/ShowCars/ShowCars';
import CarDetails from './Components/CarDetails/CarDetails';
import ErrorPage from './ErrorPage/ErrorPage';
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement : <ErrorPage></ErrorPage>,
    children : [
      {
        path : '/',
        element : <Home></Home>
      },
      {
        path : '/addProduct',
        element : <AddProduct></AddProduct>
      },
      {
        path : '/myCart',
        element : <MyCart></MyCart>
      },
      {
        path : '/login',
        element : <Login></Login>
      },
      {
        path : '/register',
        element : <Register></Register>
      },
      {
        path : '/showCars/:brand',
        element : <ShowCars></ShowCars>
      },
      {
        path : "/showCar/:id",
        element : <CarDetails></CarDetails>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
