import styles from './TableHeader.module.scss';
import TableCell from '@components/TableCell';

const TableHeader = ({ headers }: { headers: string[] }) => {
  return (
    <div className={styles.tableHeader}>
      {headers.map((header) => {
        return <TableCell>{header}</TableCell>;
      })}
    </div>
  );
};

export default TableHeader;
