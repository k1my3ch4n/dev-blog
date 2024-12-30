import styles from './Main.module.scss';

import { Title } from '@monorepo/core/components';

import Header from '@components/Header';

import Skills from './Skills';
import Profile from './Profile';
import Projects from './Projects';
import Introduce from './Introduce';

const Main = () => {
  return (
    <>
      <Title title="🔥 질문을 '잘' 하는 프론트엔드 개발자 김예찬입니다." />
      <div className={styles.content}>
        <Introduce />
        <Profile />
        <Skills />
        <Projects />

        <Header>💫 About Me</Header>
      </div>
    </>
  );
};

export default Main;
