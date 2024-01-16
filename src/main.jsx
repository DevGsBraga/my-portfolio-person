import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './global.css'




import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// IMPORT DAS PÁGINAS
import { Home } from './pages/Home.jsx';
import { Projects } from './pages/Projects.jsx';
import { Contacts } from './pages/Contacts.jsx';


const meuRoteamento = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/projects',
        element: <Projects />
      },
      {
        path: '/contacts',
        element: <Contacts />
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={meuRoteamento} />
  </React.StrictMode>,
)
