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
            <Text>
              웹 프론트엔드 개발자로 React 등 SPA 프레임워크 사용과 Javascript/Typescript 사용에
              능숙하고 깊은 이해를 가지고 있습니다. 자율 주행 로봇 스타트업에서 커리어를 시작해서,
              관리자 및 사용자를 위한 로봇 관제 웹 프로덕트 개발 및 운영 경험을 쌓았습니다.
            </Text>
            <List>
              사용자 경험 중심의 로봇 관리 및 제어 웹 프로덕트를 개발하고 운영하여 실제
              현장(물류센터 등)에 성공적으로 납품 및 적용한 경험을 가지고 있습니다.
            </List>
            <List>
              엔지니어와 현장 작업자가 로봇을 효율적으로 제어하고 작업 현황을 실시간으로 파악할 수
              있도록 실시간 대시보드 및 엑셀 기반 WMS 작업 생성/지시 기능을 개발하여 업무 효율성을
              높였습니다.
            </List>
            <List>
              문제 해결을 주도적으로 수행하여 개발 환경을 개선하고 생산성을 향상시킨 경험이
              있습니다. 대표적으로 CRA 환경에서 빌드 속도 지연 문제를 주도적으로 분석하고 VITE
              마이그레이션을 통해 빌드 시간을 약 72% 단축하는 성과를 거두었습니다.
            </List>
            <List>
              다양한 직군과의 원활한 소통을 위해 노력하며 협업 효율성을 높이는 데 기여했습니다. 서버
              팀과의 API 개발 협의를 위해 MSW를 도입하고, 디자인 팀과의 일관된 UI 개발을 위해
              Storybook을 적극적으로 활용했습니다.
            </List>
            <List>
              팀의 개발 생산성 향상을 위해 Github Actions, AWS, Notion을 활용한 배포 및 버저닝 CI/CD
              자동화를 구축하여 운영 효율성을 높였습니다. 또한, Yarn Workspaces를 활용한 Monorepo
              구성 및 Zero Install 적용을 통해 개발 환경을 최적화했습니다.
            </List>
            <List>
              서버 개발 지연 시에는 API 명세서를 기반으로 프론트엔드 개발을 주도하고, 개발된
              결과물을 바탕으로 서버 팀에 적극적으로 피드백을 전달하며 협업했습니다.
            </List>
            <List>
              안정적인 서비스 운영을 위해 jest, React Testing Library, MSW를 활용한 테스트 코드를
              작성하고, 테스트 커버리지를 20%에서 87%까지 향상시켜 코드 품질을 높였습니다.
            </List>
          </>
        }
      />
    </>
  );
};

export default Introduce;
