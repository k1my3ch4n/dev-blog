import styles from './App.module.scss';
import MainLogo from './assets/images/main_logo.svg?react';

const App = () => {
  return (
    <>
      <div className={styles.wrapper}>
        {/* todo: header 분리 예정 */}
        <div className={styles.header}>
          <div className={styles.logo}>
            <MainLogo />
          </div>
          <div className={styles.item}>Dev Blog</div>
          <div className={styles.item}>Coding Test</div>
          <div className={styles.item}>Portfolio</div>
          <div className={styles.profile}>Who Am I</div>
        </div>

        <div className={styles.outlet}>안녕</div>
      </div>
    </>
  );
};

export default App;
