import styles from './Skills.module.scss';

import Header from '@components/Header';
import Divider from '@components/Divider';
import TableBody from '@components/TableBody';
import TableHeader from '@components/TableHeader';

const SKILL_HEADER = ['Category', '기능 구현에 자신이 있어요.', '지식은 있지만 , 경험은 부족해요.'];

const SKILL_FRONTEND = [
  ['Typescript', 'React', 'Vite', 'Recoil', 'Sass', 'Apollo', 'Client', 'Storybook'],
  ['NextJs', 'Redux'],
];

const SKILL_BACKEND = [['GraphQL', 'Rest API'], ['AWS']];

const SKILL_TESTING = [['Jest', 'React Testing Library', 'MSW (Mock Service Worker)'], ['Vitest']];

const SKILL_OTHERS = [
  ['Git', 'Github', 'Github Actions', 'Yarn PnP', 'yarn workspaces', 'monorepo', 'Notion', 'Figma'],
  ['Docker'],
];

const Skills = () => {
  return (
    <>
      <Header>⚒️ Skills</Header>
      <Divider />
      <div className={styles.table}>
        <TableHeader headers={SKILL_HEADER} />
        <TableBody columnHeader="Frontend" columnArrays={SKILL_FRONTEND} />
        <TableBody columnHeader="Backend" columnArrays={SKILL_BACKEND} />
        <TableBody columnHeader="Testing" columnArrays={SKILL_TESTING} />
        <TableBody columnHeader="Others" columnArrays={SKILL_OTHERS} />
      </div>
    </>
  );
};

export default Skills;
