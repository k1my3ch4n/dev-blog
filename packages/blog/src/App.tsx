import styles from './App.module.scss';
import MainLogo from './assets/images/main_logo.svg?react';

const App = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <MainLogo />
        <div>Dev Blog</div>
        <div>Coding Test</div>
      </div>
    </div>
  );
};

export default App;
