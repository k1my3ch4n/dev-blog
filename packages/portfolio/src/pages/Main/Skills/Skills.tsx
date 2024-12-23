import styles from './Skills.module.scss';

import Header from '@components/Header';
import Divider from '@components/Divider';
import Highlight from '@components/Highlight';
import TableCell from '@components/TableCell';

const SKILL_HEADER = ['Category', '기능 구현에 자신이 있어요.', '지식은 있지만 , 경험은 부족해요.'];

const SKILL_FRONTEND = {
  highLevel: ['Typescript', 'React', 'Vite', 'Recoil', 'Sass', 'Apollo', 'Client', 'Storybook'],
  lowLevel: ['NextJs', 'Redux'],
};

const SKILL_BACKEND = {
  highLevel: ['GraphQL', 'Rest API'],
  lowLevel: ['AWS'],
};

const SKILL_TESTING = {
  highLevel: ['Jest', 'React Testing Library', 'MSW (Mock Service Worker)'],
  lowLevel: ['Vitest', 'Cypress'],
};

const SKILL_OTHERS = {
  highLevel: [
    'Git',
    'Github',
    'Github Actions',
    'Yarn PnP',
    'yarn workspaces',
    'monorepo',
    'Notion',
    'Figma',
  ],
  lowLevel: ['Docker'],
};

const Skills = () => {
  return (
    <>
      <Header>⚒️ Skills</Header>
      <Divider />
      <div className={styles.table}>
        <div className={styles.tableHeader}>
          {SKILL_HEADER.map((header) => {
            return <TableCell>{header}</TableCell>;
          })}
        </div>

        <div className={styles.tableBody}>
          <div className={styles.cell}>Frontend</div>
          {Object.values(SKILL_FRONTEND).map((skills, index) => {
            return (
              <TableCell key={index}>
                {skills.map((skill, index) => {
                  return (
                    <Highlight key={index} className={styles.highlight}>
                      {skill}
                    </Highlight>
                  );
                })}
              </TableCell>
            );
          })}
        </div>

        <div className={styles.tableBody}>
          <div className={styles.cell}>Backend</div>
          {Object.values(SKILL_BACKEND).map((skills, index) => {
            return (
              <TableCell key={index}>
                {skills.map((skill, index) => {
                  return (
                    <Highlight key={index} className={styles.highlight}>
                      {skill}
                    </Highlight>
                  );
                })}
              </TableCell>
            );
          })}
        </div>

        <div className={styles.tableBody}>
          <div className={styles.cell}>Testing</div>
          {Object.values(SKILL_TESTING).map((skills, index) => {
            return (
              <TableCell key={index}>
                {skills.map((skill, index) => {
                  return (
                    <Highlight key={index} className={styles.highlight}>
                      {skill}
                    </Highlight>
                  );
                })}
              </TableCell>
            );
          })}
        </div>

        <div className={styles.tableBody}>
          <div className={styles.cell}>Others</div>
          {Object.values(SKILL_OTHERS).map((skills, index) => {
            return (
              <TableCell key={index}>
                {skills.map((skill, index) => {
                  return (
                    <Highlight key={index} className={styles.highlight}>
                      {skill}
                    </Highlight>
                  );
                })}
              </TableCell>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Skills;
