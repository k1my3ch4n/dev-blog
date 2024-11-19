import styles from './Header.module.scss';

const Header = ({ title, size = 'l' }: { title: string; size?: 'l' | 'm' | 's' }) => {
  return (
    <div className={`${styles.wrapper} ${styles[size]}`}>
      <div className={styles.title}>{title}</div>
    </div>
  );
};

export default Header;
