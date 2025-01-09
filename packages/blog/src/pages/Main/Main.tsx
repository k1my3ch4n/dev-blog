import styles from './Main.module.scss';
import { useNavigate } from 'react-router-dom';
import { MainLogo } from '@images/index';

import { Title, Divider, Link, PageBox } from '@monorepo/core/components';
import { BLOG_POST_DATA } from '@src/constants/blog';
import Introduce from './Introduce';

const Main = () => {
  const navigate = useNavigate();

  // todo : handleClick 수정 예정
  const handleClick = (postId: string) => {
    navigate(`/blog/${postId}`);
    window.scrollTo(0, 0);
  };

  const handleBlogClick = (link: string) => {
    window.open(link, '_blank');
  };

  const postData = BLOG_POST_DATA.slice(0, 4);

  return (
    <>
      <Introduce />
      <Title title="개인 프로젝트" />
      <Divider />
      <PageBox
        Thumbnail={MainLogo}
        title="Monorepo로 블로그 및 포트폴리오 페이지 생성"
        onClick={() => handleBlogClick('https://github.com/k1my3ch4n/dev-blog/blob/main/README.md')}
      />

      <div className={styles.blogTitle}>
        <Title title="블로그" />
        <Link link="/blog">전체보기</Link>
      </div>
      <Divider />
      <div className={styles.boxWrapper}>
        {postData.map((data, index) => {
          const { title, postId, Thumbnail } = data;

          return (
            <PageBox Thumbnail={Thumbnail} title={title} onClick={() => handleClick(postId)} />
          );
        })}
      </div>
      <Title title="ETC" />
    </>
  );
};

export default Main;
