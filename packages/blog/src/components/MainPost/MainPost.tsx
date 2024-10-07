import Tag from '@src/components/Tag';
import styles from './MainPost.module.scss';

interface MainPostProps {
  onClick: () => void;
  thumbnail?: string;
  title?: string;
  tags: string[];
}

const MainPost = ({ onClick, thumbnail, title, tags }: MainPostProps) => {
  return (
    <div className={styles.wrapper} onClick={onClick}>
      <img className={styles.thumbnail} src={thumbnail} alt="" />
      <p className={styles.title}>{title}</p>
      <div className={styles.tagWrapper}>
        {tags.map((tag, index) => {
          return <Tag key={index} tag={tag} />;
        })}
      </div>
    </div>
  );
};

export default MainPost;
