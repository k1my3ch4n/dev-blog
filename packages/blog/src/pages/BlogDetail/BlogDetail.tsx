import styles from './BlogDetail.module.scss';
import useGetMarkdown from '@src/hooks/useGetMarkdown';
import { useParams } from 'react-router-dom';
import MarkdownWrapper from '@src/components/MarkdownWrapper';
import { MAIN_POSTS } from '@src/constants/posts';
import { format } from 'date-fns';
import Tag from '@src/components/Tag';

const BlogDetail = () => {
  const { postId } = useParams();

  const { markdown } = useGetMarkdown(postId);

  const postData = MAIN_POSTS.filter(({ id }) => id === postId);

  // data 가 없는 경우 , 잘못된 경로인 경우 이동할 수 있도록 조치 필요
  if (postData.length < 1) {
    return null;
  }

  const { tags, title, createDate } = postData[0];

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>{title}</div>
      <div className={styles.tagWrapper}>
        {tags.map((tag, index) => {
          return <Tag key={index} tag={tag} />;
        })}
      </div>
      <div className={styles.createDate}>{format(createDate, 'yyyy-MM-dd')}</div>
      <MarkdownWrapper markdown={markdown} />;
    </div>
  );
};

export default BlogDetail;
