import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import Router from './Router';
// import { Routes } from 'react-router-dom';

import App from './App';
import { BrowserRouter, createBrowserRouter, RouterProvider } from "react-router-dom";
import Welcome from './Welcome';
import Login from './Login';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    path: 'welcome',
    element: <Welcome />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />  
  </React.StrictMode>
);

