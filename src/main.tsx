import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Certificacao from './pages/Certificacao/index.tsx'
import Base from './Base.tsx'
import Sobre from './pages/Sobre/index.tsx'
import Auditores from './pages/auditores/index.tsx'
import CheckList from './pages/CheckList/index.tsx'

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
      },
      {
        path: "/sobre",
        element: <Sobre/>,
      },
      {
        path: "/auditores",
        element: <Auditores/>,
      },
      {
        path: "/checklist",
        element: <CheckList/>,
      },
    ]
  }
 
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
