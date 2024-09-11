import { useState } from 'react';
import styles from './Blog.module.scss';
import useGetTagsQuery from '@src/apis/useGetTagsQuery';
import useGetPostsQuery from '@src/apis/useGetPostsQuery';

const Blog = () => {
  const [selectedTag, setSelectedTag] = useState<string | undefined>(undefined);
  const { data: tagsData } = useGetTagsQuery();
  const { data: postsData } = useGetPostsQuery();

  return (
    <div className={styles.wrapper}>
      {/* tag */}
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

      {/* post */}
      <div className={styles.postWrapper}>posts</div>
    </div>
  );
};

export default Blog;
