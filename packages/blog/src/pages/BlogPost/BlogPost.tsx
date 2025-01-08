import { Highlight, Title } from '@monorepo/core/components';
import styles from './BlogPost.module.scss';

import MarkdownWrapper from '@src/components/MarkdownWrapper';
import { BLOG_POST_DATA } from '@src/constants/blog';
import useGetMarkdown from '@src/hooks/useGetMarkdown';
import { useParams } from 'react-router-dom';

const BlogPost = () => {
  const { postId } = useParams();

  const { markdown } = useGetMarkdown(postId);

  const postData = BLOG_POST_DATA.filter(({ postId }) => postId === postId);

  // 데이터가 없는 경우 , 에러
  if (postData.length < 1) {
    return null;
  }

  const { title, tags } = postData[0];

  return (
    <>
      <Title title={title} />
      <div className={styles.tags}>
        {tags.map((tag) => (
          <Highlight key={tag}>{tag}</Highlight>
        ))}
      </div>
      <MarkdownWrapper markdown={markdown} />;
    </>
  );
};

export default BlogPost;
