import styles from './PageBox.module.scss';

const PageBox = ({
  Thumbnail,
  title,
  onClick,
}: {
  Thumbnail: React.FC<React.SVGProps<SVGSVGElement>>;
  title: string;
  onClick: () => void;
}) => {
  return (
    <div className={styles.box} onClick={onClick}>
      <Thumbnail className={styles.thumbnail} />
      <div className={styles.title}>{title}</div>
    </div>
  );
};

export default PageBox;
