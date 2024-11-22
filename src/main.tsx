import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Certificacao from './pages/Certificacao/index.tsx'
import Base from './Base.tsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    element: <Base/>,
    children: [
      {
        path: "/",
        element: <App />
      },
      {
        path: "/certificacao",
        element: <Certificacao />
      }
    ]
  }
 
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
