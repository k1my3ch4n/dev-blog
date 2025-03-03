import { useNavigate } from 'react-router-dom';
import styles from './Projects.module.scss';

import { Divider, Header, PageBox } from 'k1my3ch4n-core/components';

import { TwinnyLogo, MainLogo, Github } from '@images';

const GITHUB_LINK = 'https://github.com/k1my3ch4n';
const BLOG_LINK = 'https://blog.k1my3ch4n.xyz/';

const Projects = () => {
  const navigate = useNavigate();

  const handleClick = (projectName: string) => {
    navigate(`/project/${projectName}`);
    window.scrollTo(0, 0);
  };

  const handleLinkClick = (link: string) => {
    window.open(link, '_blank');
  };

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

      <Header>💫 About Me</Header>
      <Divider />
      <div className={styles.boxWrapper}>
        <PageBox
          Thumbnail={Github}
          title="Github"
          onClick={() => handleLinkClick(GITHUB_LINK)}
          width="400px"
          height="300px"
        />
        <PageBox
          Thumbnail={MainLogo}
          title="Blog"
          onClick={() => handleLinkClick(BLOG_LINK)}
          width="400px"
          height="300px"
        />
      </div>
    </>
  );
};

export default Projects;
