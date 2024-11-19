import styles from './List.module.scss';

const List = ({ text }: { text: string }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.spot}>•</div>
      <div className={styles.text}>{text}</div>
    </div>
  );
};

export default List;
