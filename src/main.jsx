import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './Component/Root/Root'
import ErrorElement from './Component/ErrorElement/ErrorElement'
import Banner from './Component/Banner/Banner'
const siamRouter = createBrowserRouter(
  [
      {
          path:'/',
          element:<Root></Root>,
          errorElement:<ErrorElement></ErrorElement>,
          children:[
            {
                path:'/',
                element:<Banner></Banner>
            }
          ]
      }
  ]
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={siamRouter}></RouterProvider>
  </StrictMode>
)
