import { Children } from 'react';
import styles from './NumberList.module.scss';

const NumberList = ({ children }: { children: React.ReactNode }) => {
  return Children.map(children, (child, index) => (
    <div className={styles.wrapper}>
      <div className={styles.number}>{index + 1}.</div>
      <div className={styles.text}>{child}</div>
    </div>
  ));
};

export default NumberList;
