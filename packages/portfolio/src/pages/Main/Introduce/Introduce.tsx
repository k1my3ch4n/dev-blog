import styles from './Introduce.module.scss';
import { MainPhoto } from '@images';

import { Text, Divider, Header, List, SplitGrid } from 'k1my3ch4n-core/components';

const Introduce = () => {
  return (
    <>
      <Header>🙎‍♂️ Who Am I ?</Header>
      <Divider />
      <SplitGrid
        lhs={
          <>
            <MainPhoto className={styles.mainPhoto} />
            <Text>🔥 김예찬 </Text>
            <Text>✉️ k1my3ch4n@gmail.com</Text>
            <Text>📱 010-2695-7092</Text>
            <Text>🏠 경기 성남시 분당구</Text>
          </>
        }
        rhs={
          <>
            <Text>
              2년차 웹 프론트엔드 개발자로 자율주행 로봇 스타트업에서 유저 및 관리자가 로봇을 제어할
              수 있도록 관제하는 웹 프로덕트를 개발 및 서비스하면서 커리어를 시작했습니다.
            </Text>
            <List>
              개발 환경 개선에 관심이 많습니다. 배포 및 버저닝을 자동화하고, 빌드 시간 단축 등 자원
              소모를 줄인 경험을 가지고 있고 , 이로써 개발에 집중할 수 있는 환경을 만드는데 관심이
              많습니다 .
            </List>
            <List>
              효율적이고 생산성 있는 협업을 위해서 노력합니다. 서버팀과의 협업을 위해서 msw 를
              도입해 API 관련 논의를 진행하거나 , 디자인팀과 논의를 위해 스토리북을 도입하는 등의
              효율적이고 생산성 있는 협업을 한 경험을 가지고 있습니다.
            </List>
            <List>
              더 나은 제품을 위해 끊임없이 많은 질문을 합니다. 만약 필요하다면 새로운 기술이나
              도구를 도입하는데 적극적이고 , 변화를 두려워하지 않습니다.
            </List>
          </>
        }
      />
    </>
  );
};

export default Introduce;
