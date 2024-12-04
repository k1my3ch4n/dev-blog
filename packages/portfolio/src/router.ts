import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Layout from '@components/Layout';

export const router = createBrowserRouter([
  {
    Component: Layout,
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
            // Component: lazy(() => import('./pages/Project'))
          },
        ],
      },
    ],
  },
]);
