import styles from './Main.module.scss';

import { useNavigate } from 'react-router-dom';
import Header from '@components/Header';
import Title from '@components/Title';
import Introduce from './Introduce';
import Profile from './Profile';

const Main = () => {
  const navigate = useNavigate();

  const handleClick = (projectName: string) => {
    navigate(`/project/${projectName}`);
  };

  return (
    <>
      <Title title="🔥 질문을 '잘' 하는 프론트엔드 개발자 김예찬입니다." />
      <div className={styles.content}>
        <Introduce />
        <Profile />

        {/* Skill */}
        <Header>⚒️ Skills</Header>
        <div className={styles.table}>
          <div className={styles.tableHeader}>
            <div className={styles.cell}>Category</div>
            <div className={styles.cell}>기능 구현에 자신이 있어요.</div>
            <div className={styles.cell}>지식은 있지만 , 경험은 부족해요.</div>
          </div>

          <div className={styles.tableBody}>
            <div className={styles.cell}>Frontend</div>
            <div className={styles.cell}>
              Typescript React Vite Recoil Sass Apollo Client Storybook
            </div>
            <div className={styles.cell}>NextJs Redux</div>
          </div>

          <div className={styles.tableBody}>
            <div className={styles.cell}>Backend</div>
            <div className={styles.cell}>GraphQL Rest API</div>
            <div className={styles.cell}>AWS</div>
          </div>

          <div className={styles.tableBody}>
            <div className={styles.cell}>Testing</div>
            <div className={styles.cell}>Jest React Testing Library MSW (Mock Service Worker)</div>
            <div className={styles.cell}>Vitest</div>
          </div>

          <div className={styles.tableBody}>
            <div className={styles.cell}>Tools / ETC</div>
            <div className={styles.cell}>
              Git Github Github Actions Yarn PnP yarn workspaces monorepo Notion Figma
            </div>
            <div className={styles.cell}>Docker</div>
          </div>
        </div>

        {/* Projects */}
        <Header>👩🏻‍💻 Projects</Header>
        <div className={styles.box} onClick={() => handleClick('1')}>
          1
        </div>
        <div className={styles.box} onClick={() => handleClick('2')}>
          2
        </div>

        <Header>💫 About Me</Header>
      </div>
    </>
  );
};

export default Main;
