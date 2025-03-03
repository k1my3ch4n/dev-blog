import styles from './Introduce.module.scss';
import { MainPhoto } from '@images';

import { Text, Divider, Header, List, SplitGrid, Link } from 'k1my3ch4n-core/components';

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
            <Text>
              ✉️ <Link link="mailto:k1my3ch4n@gmail.com">k1my3ch4n@gmail.com</Link>
            </Text>
            <Text>📱 010-2695-7092</Text>
            <Text>🏠 경기 성남시 분당구</Text>
            <Text>
              📘{' '}
              <Link link="https://k1my3ch4ns.notion.site/1a8c98c1db058050acfdfab5d4bc6b9f">
                Resume
              </Link>
            </Text>
          </>
        }
        rhs={
          <>
            <Text>웹 프론트엔드 개발자로 자율 주행 로봇 스타트업에서 커리어를 시작했습니다.</Text>
            <Text>
              트위니에서 프론트엔드 개발자로 관리자가 로봇을 제어하는 프로덕트 개발 및 운영한 경험을
              가지고 있습니다.
            </Text>
            <List>
              엔지니어가 로봇을 제어할 수 있도록 제품을 개발 및 운영한 경험을 가지고 있습니다.
            </List>
            <List>
              물류센터 등에서 직원이 로봇을 제어할 수 있도록 제품을 개발하여 화주사에 납품 및 운영한
              경험을 가지고 있습니다.
            </List>

            <Text>
              저는 다른 사람들과 소통하고, 프로세스를 개선하여 효율적으로 문제를 해결하는 것을
              중요하게 생각합니다.
            </Text>
            <List>
              다른 팀과의 효율적이고 생산성 있는 협업을 위해서 노력합니다.
              <List spot="m">
                서버 팀과의 협업을 위해서 MSW ( Mock Service Worker ) 를 도입 및 API 관련 논의
              </List>
              <List spot="m">
                디자인 팀과의 협업을 위해서 Storybook 을 도입 및 디자인 관련 논의
              </List>
            </List>
            <List>
              팀이 개발에 집중할 수 있는 환경을 만드는데 관심이 많습니다 .
              <List spot="m">배포 및 버저닝을 자동화하여 자원 소모를 줄임</List>
              <List spot="m">
                개발 환경을 통일하고 , 빌드 시간 단축 및 자원 소모를 줄이기 위해 새로운 기술 및 도구
                도입
              </List>
            </List>
          </>
        }
      />
    </>
  );
};

export default Introduce;
