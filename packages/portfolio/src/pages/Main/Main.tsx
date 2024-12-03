import styles from './Main.module.scss';

import Header from '@components/Header';
import Highlight from '@components/Highlight';
import Link from '@components/Link';
import List from '@components/List';
import Text from '@components/Text';
import Title from '@components/Title';

import Project1 from '../../projects/project1';
import Project2 from '../../projects/project2';

const Main = () => {
  return (
    <div className={styles.wrapper}>
      <Title title="🔥 질문을 '잘' 하는 프론트엔드 개발자 김예찬입니다." />
      <div className={styles.content}>
        {/* Who Am I */}
        <Header>🙎‍♂️ Who Am I ?</Header>
        <div className={styles.splitGrid}>
          <div>
            <div>img</div>
            <Text>🔥 김예찬</Text>
            <Text>✉️ k1my3ch4n@gmail.com</Text>
            <Text>📱 010-2695-7092</Text>
            <Text>🏠 경기 성남시 분당구</Text>
          </div>
          <div>
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
          </div>
        </div>

        {/* Profile */}
        <Header>🔎 Profile</Header>
        <Header size="s">경력 (총 2년)</Header>
        <div className={styles.splitGrid}>
          <div>
            <div>img</div>
            <Text>TWINNY</Text>
            <Text>2022.4 - 2024.4</Text>
          </div>
          <div>
            <Header size="s">유저용 작업 관제 웹 프로덕트 ( 오더피킹 ) 개발 및 서비스</Header>
            <Text>
              <Highlight>2023.01 ~ 2024.04</Highlight>
            </Text>
            <List spot="l">
              유저용 로봇 관제 웹 프로덕트 ( 오더피킹 ) 개발 및 서비스
              <List spot="m">
                실시간 대시보드 개발 및 엑셀로 WMS 처럼 작업 생성 및 지시 기능 개발
              </List>
            </List>
            <List spot="l">
              웹 프로덕트 배포 및 버저닝 자동화, 리팩토링 진행
              <List spot="m">
                <Link link="https://velog.io/@k1my3ch4n/series/github-actions">
                  <Highlight>github action</Highlight>을 이용한 배포 및 버저닝 자동화 진행
                </Link>
              </List>
              <List spot="m">
                <Highlight>CRA</Highlight> → <Highlight>VITE</Highlight> 마이그레이션 및{' '}
                <Link link="https://velog.io/@k1my3ch4n/series/monorepo">
                  <Highlight>monorepo</Highlight> 적용
                </Link>
                <List spot="s">빌드 시간 단축 ( 2:20 → 0:40 , 약 72% 속도 개선 )</List>
                <List spot="s">
                  <Highlight>yarn workspaces</Highlight> 사용해서 <Highlight>monorepo</Highlight>
                  적용으로 공통으로 사용되는 hook 과 component 를 중복하지 않고 사용 가능
                </List>
                <List spot="s">
                  <Highlight>pnp</Highlight> 모드 적용으로 zero-install 적용
                </List>
              </List>
              <List spot="m">
                <Highlight>msw ( mock service worker )</Highlight> 적용
                <List spot="s">
                  서버 개발이 늦어지는 경우 미리 API 명세서를 보고 작업 가능, 해당 작업 후 서버 측에
                  API 명세에 대한 피드백 전달 가능 ( 프론트엔드 주도 인터페이스 개발 )
                </List>
                <List spot="s">테스트 , 스토리북 작성 시 실제와 비슷한 환경에서 실행 가능</List>
              </List>
            </List>
            <List spot="l">
              테스트 코드 및 스토리북 작성
              <List spot="m">
                <Highlight>jest</Highlight>, <Highlight>React Testing Library</Highlight> 와{' '}
                <Highlight>msw ( mock service worker )</Highlight>를 사용해서 테스트 코드 작성
                <List spot="s">테스트 coverage 20% → 87% 달성</List>
              </List>
              <List spot="m">
                <Highlight>msw ( mock service worker )</Highlight> 를 사용해서 스토리북 작성
              </List>
            </List>
            {/* 구분선 */}
            <Header size="s">관리자용 작업 관제 웹 프로덕트 개발 및 서비스 </Header>
            <Text>
              <Highlight>2022.04 ~ 2023.01</Highlight>
            </Text>
            <List spot="l">관리자를 위한 로봇 관제 웹 프로덕트 개발</List>
            <List spot="l">
              프로덕트 유지보수 및 리팩토링 진행
              <List spot="m">자바스크립트 → 타입스크립트 전환 ( 95% 이상 전환 )</List>
              <List spot="m">
                프로젝트의 모듈화 진행
                <List spot="s">약 30부분 이상의 유효성 검사 기능에 모듈화 적용</List>
              </List>
            </List>
          </div>
        </div>
        <Header size="s">학력</Header>
        <Text>홍익대학교 컴퓨터공학과 졸업</Text>
        <Text>
          <Highlight>2015.3 - 2022.2</Highlight>
        </Text>

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
        <Project1 />
        <Project2 />

        <Header>💫 About Me</Header>
      </div>
    </div>
  );
};

export default Main;
