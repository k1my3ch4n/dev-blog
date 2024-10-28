import { useState } from 'react';
import styles from './Blog.module.scss';
import useGetTagsQuery from '@apis/useGetTagsQuery';
import useGetPostsQuery from '@apis/useGetPostsQuery';
import { format } from 'date-fns';
import Tag from '@components/Tag';

const Blog = () => {
  const [selectedTag, setSelectedTag] = useState<string | undefined>(undefined);
  const { tagsData } = useGetTagsQuery();
  const { postsData } = useGetPostsQuery();

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
            <Tag
              key={id}
              onClick={handleTagClick}
              className={`${styles.tag} ${selectedTag === tag ? styles.isSelected : ''}`}
              tag={tag}
            />
          );
        })}
      </div>

      {/* post */}
      <div className={styles.postWrapper}>
        <div className={styles.postTitle}>게시글 {postsData?.length} 개</div>
        <div className={styles.postContent}>
          {postsData?.map((post) => {
            const { id, title, description, createDate, thumbnail } = post;

            return (
              <div key={id} className={styles.post}>
                <div className={styles.thumbnail}>{thumbnail}</div>
                <div>{title}</div>
                <div>{description}</div>
                <div>{format(createDate, 'yyyy-MM-dd')}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Blog;
