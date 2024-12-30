import styles from './Text.module.scss';

export const Text = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.text}>{children}</div>
    </div>
  );
};
