import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: '',
    Component: lazy(() => import('./pages/Main')),
  },
  {
    path: '/',
    children: [
      {
        path: 'project/:projectName',
        // Component: lazy(() => import('./pages/Project'))
      },
    ],
  },
]);
