import Header from '../../components/Header';
import List from '../../components/List';
import NumberList from '../../components/NumberList';
import Text from '../../components/Text';
import Title from '../../components/Title';

const project = () => {
  return (
    <>
      <Title title="🤖 유저용 작업 관제 웹 프로덕트 ( 오더피킹 )" />
      <div>img</div>
      <Header size="s">기간</Header>
      <Text>2023.01 ~ 2024.04</Text>

      <Header size="m">작업 및 성과</Header>

      <List>
        유저용 로봇 관제 웹 프로덕트 ( 오더피킹 ) 개발 및 서비스
        <List spot="m">
          작업의 현재 상태 , 로봇의 현재 상태 , 지도 , 알림을 볼 수 있는 실시간 대시보드 개발 및
          서비스
        </List>
        <List spot="m">
          멀티오더피킹 , 토탈피킹 기능 개발
          <List spot="s">멀티오더피킹 : 여러 송장을 모아서 한 번에 피킹 작업을 실행</List>
          <List spot="s">토탈피킹 : 한 송장 내에 많은 피킹 작업 실행</List>
        </List>
        <List spot="m">
          WMS 연동이 필요 없이 , 엑셀만으로 WMS 처럼 작업 생성 및 지시 기능 개발
          <List spot="s">엑셀 데이터로 작업 생성 및 유효성 검사 기능 개발</List>
          <List spot="s">한 엑셀로 여러 작업 생성 및 지시 기능 개발</List>
          <List spot="s">
            커버로지스 , 한익스프레스 등 5개 이상의 화주사에 신규 사업 유치 및 납품{' '}
          </List>
        </List>
      </List>

      {/* todo : Number List 추가 예정 */}
      <List>
        웹 프로덕트 배포 및 버저닝 자동화, 리팩토링 진행
        <NumberList>
          {/* 1 */}
          <>
            github action을 이용한 배포 및 버저닝 자동화 진행
            <List spot="m">
              서버, 테스트팀 , 디자인팀 등 다른 여러 팀들과 협업할 때 통일된 버전이 필요해짐
            </List>
            <List spot="m">
              배포와 버저닝을 수동으로 진행하다 보니, 빠뜨리거나 오류가 발생해서 실수하는 경우가
              생김
            </List>
            <List spot="m">github action을 통해서 배포 및 버저닝 자동화 진행</List>
          </>
          {/* 2 */}
          <>
            CRA → VITE 마이그레이션 및 monorepo 적용
            <List spot="m">
              기존 사용하던 CRA 의 여러 문제점으로 인해서 불편함을 인지
              <List spot="s">CRA 개발 지원 중단</List>
              <List spot="s">불필요한 의존성이 과다한 문제 ( node_modules )</List>
              <List spot="s">빌드 시간이 오래 걸리는 문제</List>
            </List>
            <List spot="m">
              개발하던 두 프로덕트가 같은 디자인 , 비슷한 코드를 가지고 있지만 hook과 component 들이
              중복으로 사용됨
            </List>
            <List spot="m">
              따라서 CRA 의 대안으로 떠오른 VITE 및 monorepo 적용
              <List spot="s">빌드 시간 단축 ( 2:20 → 0:40 , 약 72% 속도 개선 )</List>
              <List spot="s">
                yarn workspaces 사용해서 monorepo 적용으로 공통으로 사용되는 hook 과 component 를
                중복하지 않고 사용 가능
              </List>
              <List spot="s">pnp 모드 적용으로 zero-install 적용</List>
            </List>
          </>
          {/* 3 */}
          <>
            msw ( mock service worker ) 적용
            <List spot="m">
              graphql 사용 중 , 서버 개발이 늦어지는 경우 클라이언트에서 기다려야 하는 경우 발생
            </List>
            <List spot="m">
              단순 API mocking은 통합 테스트 , 스토리북 작성 시 제어하기 힘든 경우가 생김
            </List>
            <List spot="m">
              msw 적용으로 위 두가지 문제 해결
              <List spot="s">서버 개발이 늦어지는 경우 , 미리 API 명세서를 보고 작업 가능</List>
              <List spot="s">
                해당 작업 후 서버 측에 API 명세에 대한 피드백 전달 가능 ( 프론트엔드 주도 인터페이스
                개발 )
              </List>
              <List spot="s">테스트 , 스토리북 작성 시 실제와 비슷한 환경에서 실행 가능</List>
            </List>
          </>
        </NumberList>
      </List>

      <List>
        테스트 코드 및 스토리북 작성
        <NumberList>
          <>
            테스트 코드 작성
            <List spot="m">기능 개발에 업무가 치우쳐져 있어서 테스트 코드에 대한 관심 미흡</List>
            <List spot="m">
              기능 개발을 진행했지만 , 추후에 edge case가 발견되어 bug fix 의 빈도가 늘어남
            </List>
            <List spot="m">
              jest, React Testing Library 와 msw ( mock service worker ) 를 사용해서 테스트 코드
              작성
              <List spot="s">테스트 coverage 20% → 87% 달성</List>
              <List spot="s">msw 를 사용해서 실제와 비슷한 환경에서 테스트 작성</List>
            </List>
          </>
          <>
            스토리북 작성
            <List spot="m">디자인팀이 직접 데이터를 넣어서 검수해야 하는 경우 발생</List>
            <List spot="m">일부만 테스트하기 위해서 전체를 실행해야 하는 경우 발생</List>
            <List spot="m">
              msw 를 사용해서 스토리북 작성
              <List spot="s">필요한 데이터만 수정해서 디자인 검수 가능</List>
              <List spot="s">전체를 실행할 필요 없이 일부만 테스트 가능</List>
            </List>
          </>
        </NumberList>
      </List>

      <Header size="s">관련 홈페이지 및 자료</Header>
      <List>관련 홈페이지</List>
      <List>관련 유튜브</List>
    </>
  );
};

export default project;
