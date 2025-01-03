import styles from './Main.module.scss';
import { Header, Title, SplitGrid } from '@monorepo/core/components';

const Main = () => {
  return (
    <>
      <Title title="K1MY3CH4N" />
      <SplitGrid
        lhs={
          <>
            <Header size="m">질문하는 프론트엔드 개발자 입니다 .</Header>
            <Header size="m">질문하고 경험한 것들을 기록하고 공유합니다 .</Header>
          </>
        }
        rhs={<Header wrapperClassName={styles.header}>김예찬</Header>}
        rhsClassName={styles.rhs}
      />
      <Title title="프로젝트" />
      <Title title="블로그" />
      <Title title="ETC" />
    </>
  );
};

export default Main;
