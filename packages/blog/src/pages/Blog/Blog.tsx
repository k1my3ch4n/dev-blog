import { useState } from 'react';
import styles from './Blog.module.scss';
import useGetTagsQuery from '@src/apis/useGetTagsQuery';

const Blog = () => {
  const [selectedTag, setSelectedTag] = useState<string | undefined>(undefined);
  const { data: tagsData } = useGetTagsQuery();

  return (
    <div className={styles.wrapper}>
      <div className={styles.tagsWrapper}>
        {tagsData?.map(({ id, tag }: { id: string; tag: string }) => {
          const handleTagClick = () => {
            if (selectedTag === tag) {
              setSelectedTag(undefined);
            } else {
              setSelectedTag(tag);
            }
          };

          return (
            <div
              key={id}
              onClick={handleTagClick}
              className={`${styles.tag} ${selectedTag === tag ? styles.isSelected : ''}`}
            >
              {tag}
            </div>
          );
        })}
      </div>

      <div>posts</div>
    </div>
  );
};

export default Blog;
