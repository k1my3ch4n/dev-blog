import styles from './Header.module.scss';

const Header = ({ title }: { title: string }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>{title}</div>
    </div>
  );
};

export default Header;
