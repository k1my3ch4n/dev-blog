import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '@layout/MainLayout';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: MainLayout,
    children: [
      {
        path: '',
        Component: lazy(() => import('./pages/Main')),
      },
      {
        path: 'blog',
        Component: lazy(() => import('./pages/Blog')),
      },
    ],
  },
]);
