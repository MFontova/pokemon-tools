import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { App } from './App'
import { TeamCreator } from './pages/TeamCreator';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    label: 'Home'

  },
  {
    path: '/team-creator',
    element: <TeamCreator/>,
    label: 'Team creator'
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);
