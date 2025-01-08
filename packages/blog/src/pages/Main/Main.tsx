import styles from './Main.module.scss';
import { useNavigate } from 'react-router-dom';
import { MainPhoto, TwinnyLogo } from '@images/index';

import { Header, Title, SplitGrid, Text, Divider, Link, PageBox } from '@monorepo/core/components';

const Main = () => {
  const navigate = useNavigate();

  const handleClick = (projectName: string) => {
    navigate(`/project/${projectName}`);
    window.scrollTo(0, 0);
  };

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
        Thumbnail={TwinnyLogo}
        title="Monorepo로 블로그 및 포트폴리오 페이지 생성"
        // 블로그 github 주소 추가 예정
        // https://github.com/k1my3ch4n/dev-blog
        onClick={() => handleClick('userRobot')}
      />

      <div className={styles.blogTitle}>
        <Title title="블로그" />
        <Link link="/blog">전체보기</Link>
      </div>
      <Divider />
      <div className={styles.boxWrapper}>
        <PageBox Thumbnail={TwinnyLogo} title="테스트용" onClick={() => handleClick('userRobot')} />
        <PageBox Thumbnail={TwinnyLogo} title="테스트용" onClick={() => handleClick('userRobot')} />
        <PageBox Thumbnail={TwinnyLogo} title="테스트용" onClick={() => handleClick('userRobot')} />
        <PageBox Thumbnail={TwinnyLogo} title="테스트용" onClick={() => handleClick('userRobot')} />
      </div>
      <Title title="ETC" />
    </>
  );
};

export default Main;
