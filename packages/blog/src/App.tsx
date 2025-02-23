import { RouterProvider } from 'react-router-dom';
import { router } from './router';

// ! worker 사용하고 싶을 때 주석 해제
// import { worker } from './mocks/browser';

// worker.start({ onUnhandledRequest: 'bypass' });

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
