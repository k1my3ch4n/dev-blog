import styles from './Bold.module.scss';

export const Bold = ({ children }: { children: React.ReactNode }) => {
  return <span className={styles.bold}>{children}</span>;
};
