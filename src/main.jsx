import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './Component/Root/Root'
import ErrorElement from './Component/ErrorElement/ErrorElement'
import Banner from './Component/Banner/Banner'
import BookDetails from './Component/BookDetails/BookDetails'
import ListedBooks from './Component/ListedBooks/ListedBooks'
import PagesToRead from './Component/PagesToRead/PagesToRead'
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
            },
            {
                path:'/:url',
                element:<BookDetails></BookDetails>,
                loader: async ()=>
                    {
                        try
                          {
                              const res = await fetch("AllBooks.json");
                              const data = await res.json();
                              return data;
                          }
                        catch(e)
                          {
                            return console.log(e);
                          }
                    }
            },
            {
                path:'/listed-books',
                element:<ListedBooks></ListedBooks>
            },
            {
                path:'/pages-to-read',
                element:<PagesToRead></PagesToRead>
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
