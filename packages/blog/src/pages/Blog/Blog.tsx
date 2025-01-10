import styles from './Blog.module.scss';
import { useNavigate } from 'react-router-dom';
import { Divider, Header, Highlight, Title, ImageBox } from '@monorepo/core/components';
import { BLOG_POST_DATA } from '@constants/blog';

const Blog = () => {
  const navigate = useNavigate();

  return (
    <>
      <Title title="📘 K1MY3CH4N's Blog" />
      <Divider />

      {BLOG_POST_DATA.map(({ Thumbnail, title, tags, postId }, index) => {
        const handleClick = (projectName: string) => {
          navigate(`/blog/${projectName}`);
          window.scrollTo(0, 0);
        };

        return (
          <div className={styles.post} key={index} onClick={() => handleClick(postId)}>
            <ImageBox
              wrapperClassName={styles.imageWrapper}
              imageClassName={styles.image}
              Image={Thumbnail}
              width="200px"
              height="150px"
            />
            <div className={styles.title}>
              <Header size="m">{title}</Header>
              <div className={styles.tags}>
                {tags.map((tag) => (
                  <Highlight key={tag}>{tag}</Highlight>
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Blog;
