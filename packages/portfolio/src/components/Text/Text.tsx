import styles from './Text.module.scss';

const Text = ({ text }: { text: string }) => {
  return <div className={styles.text}>{text}</div>;
};

export default Text;
