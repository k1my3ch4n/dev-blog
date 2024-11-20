import styles from './Link.module.scss';

const Link = ({ link, text }: { link: string; text: string }) => {
  const handleClick = () => {
    window.open(link, '_blank');
  };

  return (
    <span className={styles.wrapper} onClick={handleClick}>
      {text}
    </span>
  );
};

export default Link;
