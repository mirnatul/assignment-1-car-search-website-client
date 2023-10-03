import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import CarSearchWebsite from './pages/CarSearchWebsite/CarSearchWebsite';
import Main from './Layout/Main';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>
  },
  {
    path: "/page/:page",
    element: <CarSearchWebsite></CarSearchWebsite>,
    loader: () => fetch('/car-details.json')
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
