import styles from './Blog.module.scss';
import { useNavigate } from 'react-router-dom';
import { Divider, Header, Highlight, Title } from '@monorepo/core/components';
import { ReactComponent as TwinnyLogo } from '@images/twinnyLogo.svg';

const BLOG_POST_DATA = [
  {
    thumbnail: '',
    title: '포스트 제목 포스트 제목 포스트 제목 포스트 제목',
    tags: ['태그 1', '태그 2'],
  },
  {
    thumbnail: '',
    title: '포스트 제목 포스트 제목 포스트 제목 포스트 제목',
    tags: ['태그 1', '태그 2'],
  },
  {
    thumbnail: '',
    title: '포스트 제목 포스트 제목 포스트 제목 포스트 제목',
    tags: ['태그 1', '태그 2'],
  },
];

const Blog = () => {
  const navigate = useNavigate();

  const handleClick = (projectName: string) => {
    navigate(`/blog/${projectName}`);
    window.scrollTo(0, 0);
  };

  return (
    <>
      <Title title="📘 K1MY3CH4N's Blog" />
      <Divider />

      {BLOG_POST_DATA.map(({ thumbnail, title, tags }, index) => {
        return (
          <div className={styles.post} key={index} onClick={() => handleClick('test')}>
            <div className={styles.thumbnail}>{thumbnail}</div>
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
