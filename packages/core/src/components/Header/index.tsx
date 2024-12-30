import styles from './Header.module.scss';

export const Header = ({
  children,
  size = 'l',
}: {
  children: React.ReactNode;
  size?: 'l' | 'm' | 's';
}) => {
  return (
    <div className={`${styles.wrapper} ${styles[size]}`}>
      <div className={styles.title}>{children}</div>
    </div>
  );
};
