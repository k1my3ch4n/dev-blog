import styles from './Highlight.module.scss';

const Highlight = ({ children }: { children: React.ReactNode }) => {
  return <span className={styles.highlight}>{children}</span>;
};

export default Highlight;
