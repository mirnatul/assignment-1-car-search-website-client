import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import CarSearchWebsite from './pages/CarSearchWebsite/CarSearchWebsite';



const router = createBrowserRouter([
  {
    path: "/",
    element: <CarSearchWebsite></CarSearchWebsite>,
    loader: () => fetch(`car-details.json`)
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
