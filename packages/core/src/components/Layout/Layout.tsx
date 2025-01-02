import styles from './Layout.module.scss';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <div className={styles.wrapper}>{children}</div>;
};

export default Layout;
