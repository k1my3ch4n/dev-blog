import styles from './TableCell.module.scss';

const TableCell = ({ children }: { children: React.ReactNode }) => {
  return <div className={styles.cell}>{children}</div>;
};

export default TableCell;
