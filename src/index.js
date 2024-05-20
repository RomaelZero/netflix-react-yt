import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App';
import Main from "./components/Main";

import Login from './pages/Login';
import Signup from './pages/Signup';
import Account from './pages/Account';
import ProtectedRoute from './components/ProtectedRoute';

import './index.css';



const router = createBrowserRouter([
  {
    path:"/",
    element: <App/>,
    children: [{
      path:"/main",
      element: <Main/>,
    },{
      path:"/login",
      element:<Login/>
    },{
      path:"/signup",
      element:<Signup/>
    },{
      path:"/account",
      element:<ProtectedRoute><Account/></ProtectedRoute>
    }
  ]
  },
  
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


