import { Highlight } from '@monorepo/core/components';

import styles from './TableBody.module.scss';
import TableCell from '@components/TableCell';

// todo : 현재는 한 페이지에서만 사용되어서 그에 맞춰서 적용. 수정 예정

const TableBody = ({
  columnHeader,
  columnArrays,
}: {
  columnHeader?: string;
  columnArrays: Array<string[]>;
}) => {
  return (
    <div className={styles.tableBody}>
      {columnHeader && <TableCell>{columnHeader}</TableCell>}
      {Object.values(columnArrays).map((columnArray, index) => {
        return (
          <TableCell key={index}>
            {columnArray.map((columnData, index) => {
              return (
                <Highlight key={index} className={styles.highlight}>
                  {columnData}
                </Highlight>
              );
            })}
          </TableCell>
        );
      })}
    </div>
  );
};

export default TableBody;
