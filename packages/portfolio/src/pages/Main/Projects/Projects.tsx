import { useNavigate } from 'react-router-dom';
import styles from './Projects.module.scss';

import Header from '@components/Header';
import Divider from '@components/Divider';

const Projects = () => {
  const navigate = useNavigate();

  const handleClick = (projectName: string) => {
    navigate(`/project/${projectName}`);
  };

  return (
    <>
      <Header>👩🏻‍💻 Projects</Header>
      <Divider />
      <div className={styles.box} onClick={() => handleClick('1')}>
        1
      </div>
      <div className={styles.box} onClick={() => handleClick('2')}>
        2
      </div>
    </>
  );
};

export default Projects;
