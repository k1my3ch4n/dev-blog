import styles from './Main.module.scss';
import { useNavigate } from 'react-router-dom';
import { MainLogo, MainPhoto } from '@images/index';

import { Header, Title, SplitGrid, Text, Divider, Link, PageBox } from '@monorepo/core/components';
import { BLOG_POST_DATA } from '@src/constants/blog';

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
      <Title title="📘 K1MY3CH4N's Blog" />
      <Divider />
      <SplitGrid
        lhs={
          <>
            <MainPhoto className={styles.mainPhoto} />
            <Text>🔥 김예찬</Text>
            <Text>✉️ k1my3ch4n@gmail.com</Text>
            <Text>📱 010-2695-7092</Text>
            <Text>🏠 경기 성남시 분당구</Text>
          </>
        }
        rhs={
          <>
            <Header size="m">질문하는 프론트엔드 개발자 입니다 .</Header>
            <Header size="m">질문하고 경험한 것들을 기록하고 공유합니다 .</Header>
            <Header size="m">
              <Link link="">저에 대해서 더 알고 싶으시다면 클릭 !</Link>
            </Header>
          </>
        }
        rhsClassName={styles.rhs}
      />
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
