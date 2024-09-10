import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import { worker } from './mock/browser';

worker.start({ onUnhandledRequest: 'bypass' });

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
