import styles from './Tag.module.scss';

const Tag = ({ tag }: { tag: string }) => {
  return <div className={styles.wrapper}>{tag}</div>;
};

export default Tag;
