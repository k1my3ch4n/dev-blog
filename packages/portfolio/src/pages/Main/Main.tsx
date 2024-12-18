import styles from './Main.module.scss';

import Header from '@components/Header';
import Highlight from '@components/Highlight';
import Link from '@components/Link';
import List from '@components/List';
import Text from '@components/Text';
import Title from '@components/Title';
import { ReactComponent as MainPhoto } from '@images/mainPhoto.svg';
import SplitGrid from '@src/components/SplitGrid';
import { useNavigate } from 'react-router-dom';
import Introduce from './Introduce';

const Main = () => {
  const navigate = useNavigate();

  const handleClick = (projectName: string) => {
    navigate(`/project/${projectName}`);
  };

  return (
    <>
      <Title title="🔥 질문을 '잘' 하는 프론트엔드 개발자 김예찬입니다." />
      <div className={styles.content}>
        <Introduce />

        {/* Profile */}
        <Header>🔎 Profile</Header>
        <Header size="s">경력 (총 2년)</Header>
        <SplitGrid
          lhs={
            <>
              <div>img</div>
              <Text>TWINNY</Text>
              <Text>2022.4 - 2024.4</Text>
            </>
          }
          rhs={
            <>
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
                    서버 개발이 늦어지는 경우 미리 API 명세서를 보고 작업 가능, 해당 작업 후 서버
                    측에 API 명세에 대한 피드백 전달 가능 ( 프론트엔드 주도 인터페이스 개발 )
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
            </>
          }
        />

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
        <div className={styles.box} onClick={() => handleClick('1')}>
          1
        </div>
        <div className={styles.box} onClick={() => handleClick('2')}>
          2
        </div>

        <Header>💫 About Me</Header>
      </div>
    </>
  );
};

export default Main;
