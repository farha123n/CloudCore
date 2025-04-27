import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";  // Note: Importing from 'react-router-dom' instead of 'react-router'
import Root from './Pages/Root.jsx';
import Home from './Pages/Home.jsx';
import Order from './Components/Order.jsx';
import { Provider } from 'react-redux';
import store from './app/store.js';
import ProductDetails from './Pages/ProductDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />, // Root component
    children: [
      { index: true, element: <Home /> }, // Home component
      { path: "/orderedProduct", element: <Order /> }, // Order component
    {  path: '/product/:id',
      loader: () => fetch('https://admin.refabry.com/api/all/product/get').then(res => res.json()),
      Component:ProductDetails
    }
    ],
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
);
