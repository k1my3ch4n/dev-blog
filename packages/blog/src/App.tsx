import styles from './App.module.scss';
import { Divider, Header, Text, Title } from '@monorepo/core/components';

const App = () => {
  return (
    <>
      <Title title="K1MY3CH4N" />
      <div className={styles.introduce}>
        <div>
          <Header size="m">질문하는 프론트엔드 개발자 입니다 .</Header>
          <Header size="m">질문하고 경험한 것들을 기록하고 공유합니다 .</Header>
        </div>
        <div>
          <Header size="m">김예찬</Header>
        </div>
      </div>
      <Title title="프로젝트" />
      <Title title="블로그" />
      <Title title="ETC" />
    </>
  );
};

export default App;
