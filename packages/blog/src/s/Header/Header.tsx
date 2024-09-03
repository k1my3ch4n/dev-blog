import styles from './Header.module.scss';

const Header = () => {
  return (
    <div className={styles.wrapper}>
      <div>로고</div>
      <div>Blog</div>
      <div></div>
    </div>
  );
};

export default Header;
