import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Layout } from 'k1my3ch4n-core/components';

const MainLayout = () => {
  return (
    <Layout>
      <Suspense>
        <Outlet></Outlet>
      </Suspense>
    </Layout>
  );
};

export default MainLayout;
