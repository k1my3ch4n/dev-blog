import { Highlight, HomeButton, ScrollToTopButton, Title } from 'k1my3ch4n-core/components';
import styles from './BlogPost.module.scss';

import MarkdownWrapper from '@components/MarkdownWrapper';
import useGetMarkdown from '@hooks/useGetMarkdown';
import { useNavigate, useParams } from 'react-router-dom';
import useGetPostWithKey from '@apis/useGetPostWithKey';

const BlogPost = () => {
  const navigate = useNavigate();
  const { postKey } = useParams();

  const { postData } = useGetPostWithKey(postKey);
  const { markdown } = useGetMarkdown(postKey);

  const handleClick = () => {
    navigate('/blog');
  };

  // 데이터가 없는 경우 , 에러
  if (!postData) {
    return null;
  }

  const { title, tags } = postData;

  return (
    <>
      <HomeButton onClick={handleClick} />
      <Title title={title} />
      <div className={styles.tags}>
        {tags.map((tag) => (
          <Highlight key={tag}>{tag}</Highlight>
        ))}
      </div>
      <MarkdownWrapper markdown={markdown} />
      <ScrollToTopButton />
    </>
  );
};

export default BlogPost;
