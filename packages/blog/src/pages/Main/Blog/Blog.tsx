import { Divider, Link, PageBox, Title } from '@monorepo/core/components';
import styles from './Blog.module.scss';
import { BLOG_POST_DATA } from '@constants/blog';
import { useNavigate } from 'react-router-dom';

const Blog = () => {
  const navigate = useNavigate();

  // todo : handleClick 수정 예정
  const handleClick = (postId: string) => {
    navigate(`/blog/${postId}`);
    window.scrollTo(0, 0);
  };

  const postData = BLOG_POST_DATA.slice(0, 4);

  return (
    <div className={styles.wrapper}>
      <div className={styles.blogTitle}>
        <Title title="블로그" />
        <Link link="/blog">전체보기</Link>
      </div>
      <Divider />
      <div className={styles.boxWrapper}>
        {postData.map((data, index) => {
          const { title, postId, Thumbnail } = data;

          return (
            <PageBox
              key={index}
              Thumbnail={Thumbnail}
              title={title}
              onClick={() => handleClick(postId)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Blog;
