import styles from './SplitGrid.module.scss';

const SplitGrid = ({ lhs, rhs }: { lhs: React.ReactNode; rhs: React.ReactNode }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.lhs}>{lhs}</div>
      <div className={styles.rhs}>{rhs}</div>
    </div>
  );
};

export default SplitGrid;
