import { useNavigate } from 'react-router-dom';
import styles from './Projects.module.scss';

import { Divider, Header, PageBox } from 'k1my3ch4n-core/components';

import { ReactComponent as TwinnyLogo } from '@images/twinnyLogo.svg';

const Projects = () => {
  const navigate = useNavigate();

  const handleClick = (projectName: string) => {
    navigate(`/project/${projectName}`);
    window.scrollTo(0, 0);
  };

  return (
    <>
      <Header>👩🏻‍💻 Projects</Header>
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
    </>
  );
};

export default Projects;
