import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import NoPage from './pages/NoPage';
import Perspectiva from "./pages/Perspectiva";
import Porque from './pages/Porque';
import Local from './pages/Local';
import Acesso from './pages/Acesso';
import Planta from './pages/Planta';
import Info from './pages/Info';
import Caracter from './pages/Caracter';
import Contato from './pages/Contato';

import { createBrowserRouter,RouterProvider,} from "react-router-dom";
const router = createBrowserRouter([
  {
    path:"/",
    element:<App />,
    errorElement:<NoPage/>,
    children:[
          {
            path:"/",
            element:<Perspectiva />,
          },
          {
              path:"/0012",
            element:<Porque />,
          },
          {
            path:"/0013",
            element:<Local />,
          },
          {
            path:"/0014",
            element:<Acesso />,
          },
          {
            path:"/0015",
            element:<Planta />,
          },
          {
            path:"/0016",
            element:<Info />,
          },
          {
            path:"/0017",
            element:<Caracter />,
          },
          {
            path:"/0018",
            element:<Contato />,
          },
    ]
 },




])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>,
)