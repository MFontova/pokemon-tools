import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { App } from './App'
import { TeamCreator } from './pages/TeamCreator';
import { TeamProvider } from './context/team';
import { MyTeam } from './pages/MyTeam';
import './index.css'
import { FiltersProvider } from './context/filters';

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
  },
  {
    path: '/my-team',
    element: <MyTeam />,
    label: 'My Team'
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <TeamProvider>
    <FiltersProvider>
      <RouterProvider router={router} />
    </FiltersProvider>
  </TeamProvider>
);
