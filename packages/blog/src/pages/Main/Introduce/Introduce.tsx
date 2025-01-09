import { Divider, Header, Link, SplitGrid, Text, Title } from '@monorepo/core/components';
import styles from './Introduce.module.scss';
import { MainPhoto } from '@src/assets/images';

const Introduce = () => {
  return (
    <div className={styles.wrapper}>
      <Title title="📘 K1MY3CH4N's Blog" />
      <Divider />
      <SplitGrid
        lhs={
          <>
            <MainPhoto className={styles.mainPhoto} />
            <Text>🔥 김예찬</Text>
            <Text>✉️ k1my3ch4n@gmail.com</Text>
            <Text>📱 010-2695-7092</Text>
            <Text>🏠 경기 성남시 분당구</Text>
          </>
        }
        rhs={
          <>
            <Header size="m">질문하는 프론트엔드 개발자 입니다 .</Header>
            <Header size="m">질문하고 경험한 것들을 기록하고 공유합니다 .</Header>
            <Header size="m">
              <Link link="">저에 대해서 더 알고 싶으시다면 클릭 !</Link>
            </Header>
          </>
        }
        rhsClassName={styles.rhs}
      />
    </div>
  );
};

export default Introduce;
