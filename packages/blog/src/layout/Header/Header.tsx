import MainLogo from './assets/images/main_logo.svg?react';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.logo}>
        <MainLogo />
      </div>
      <div className={styles.item}>Dev Blog</div>
      <div className={styles.item}>Coding Test</div>
      <div className={styles.item}>Portfolio</div>
      <div className={styles.profile}>Who Am I</div>
    </div>
  );
};

export default Header;
