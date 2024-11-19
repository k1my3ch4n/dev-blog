import styles from './Text.module.scss';

const Text = ({ text }: { text: string }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.text}>{text}</div>
    </div>
  );
};

export default Text;
