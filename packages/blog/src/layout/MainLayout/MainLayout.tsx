import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import styles from './MainLayout.module.scss';
import Header from '@layout/Header';

const MainLayout = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.content}>
        <Suspense>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
};

export default MainLayout;
