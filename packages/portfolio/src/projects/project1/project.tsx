import Header from '../../components/Header';
import Link from '../../components/Link';
import List from '../../components/List';
import Text from '../../components/Text';
import Title from '../../components/Title';

const project = () => {
  return (
    <>
      <Title title="🤖 관리자용 로봇 관제 웹 프로젝트" />
      <div>img</div>
      <Header size="s">기간</Header>
      <Text>2022.04 ~ 2023.01</Text>

      <Header size="m">작업 및 성과</Header>
      <List>
        관리자를 위한 로봇 관제 웹 프로덕트 개발
        <List spot="m">로봇 제어 및 인프라 제어 웹 개발과 서비스 진행</List>
        <List spot="m">실제 동작하는 로봇의 세부 설정 , 워크스페이스의 세부 설정 기능 개발</List>
        <List spot="m">관리자 편의를 위한 UI 개발 및 제어 기능 개발</List>
      </List>
      <List>
        프로덕트 유지보수 및 리팩토링 진행
        <List spot="m">
          자바스크립트 → 타입스크립트 전환
          <List spot="s">타입스크립트 95% 전환</List>
        </List>
        <List spot="m">
          테스트 코드 작성
          <List spot="s">커버리지 30% → 70% 달성</List>
        </List>
        <List spot="m">
          프로젝트의 컴포넌트화 / 모듈화 진행
          <List spot="s">약 30부분 이상의 유효성 검사 기능 모듈화 및 적용</List>
        </List>
      </List>

      <List>
        관련 홈페이지 및 자료
        <List spot="m">
          <Link text="관련 홈페이지" link="https://twinny.ai/" />
        </List>
      </List>
    </>
  );
};

export default project;
