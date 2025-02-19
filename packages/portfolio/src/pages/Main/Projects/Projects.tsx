import { useNavigate } from 'react-router-dom';
import styles from './Projects.module.scss';

import { Divider, Header, PageBox } from '@monorepo/core/components';

import { TwinnyLogo, MainLogo } from '@images';

const Projects = () => {
  const navigate = useNavigate();

  const handleClick = (projectName: string) => {
    navigate(`/project/${projectName}`);
    window.scrollTo(0, 0);
  };

  // todo : 분리해야 하나 ? 고민

  return (
    <>
      <Header>👩🏻‍💻 Career Projects</Header>
      <Divider />
      <div className={styles.boxWrapper}>
        <PageBox
          Thumbnail={TwinnyLogo}
          title="🤖 유저용 작업 관제 웹 프로젝트 ( 오더피킹 )"
          onClick={() => handleClick('userRobot')}
          width="400px"
          height="300px"
        />
        <PageBox
          Thumbnail={TwinnyLogo}
          title="🤖 관리자용 로봇 관제 웹 프로젝트"
          onClick={() => handleClick('managerRobot')}
          width="400px"
          height="300px"
        />
      </div>

      <Header>👩🏻‍💻 Personal Projects</Header>
      <Divider />
      <div className={styles.boxWrapper}>
        <PageBox
          Thumbnail={MainLogo}
          title="📖 Monorepo로 블로그 및 포트폴리오 페이지 생성"
          onClick={() => handleClick('blog')}
          width="400px"
          height="300px"
        />
      </div>
    </>
  );
};

export default Projects;
