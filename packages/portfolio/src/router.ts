import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '@components/MainLayout';

export const router = createBrowserRouter([
  {
    Component: MainLayout,
    children: [
      {
        path: '',
        Component: lazy(() => import('./pages/Main')),
      },
      {
        path: '/',
        children: [
          {
            path: 'project/:projectName',
            Component: lazy(() => import('./pages/Project')),
          },
        ],
      },
    ],
  },
]);
