import { Highlight, HomeButton, Title } from '@monorepo/core/components';
import styles from './BlogPost.module.scss';

import MarkdownWrapper from '@components/MarkdownWrapper';
import { BLOG_POST_DATA } from '@constants/blog';
import useGetMarkdown from '@hooks/useGetMarkdown';
import { useNavigate, useParams } from 'react-router-dom';

const BlogPost = () => {
  const navigate = useNavigate();

  const { postId } = useParams();

  const { markdown } = useGetMarkdown(postId);

  const postData = BLOG_POST_DATA.filter(({ postId }) => postId === postId);

  const handleClick = () => {
    navigate('/blog');
  };

  // 데이터가 없는 경우 , 에러
  if (postData.length < 1) {
    return null;
  }

  const { title, tags } = postData[0];

  return (
    <>
      <HomeButton onClick={handleClick} />
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
